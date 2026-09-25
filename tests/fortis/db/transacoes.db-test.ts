/**
 * lib/db — the two transaction scopes of the Fortis data layer (ADR-0001/0002),
 * against the real Fortis platform (plain PostgreSQL + database/*), no mocks.
 *
 * Runs inside `pnpm test:db:fortis`, which prepares a fresh database per file.
 * The runtime login role `crm_app` is NOINHERIT and holds no privileges: every
 * query must go through runTenantTransaction (RLS applies, as
 * crm_authenticated) or runPlatformTransaction (crm_service, BYPASSRLS).
 */
import pg from "pg";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { createDatabase, DbScopeError, type Database } from "@/lib/db";

const port = process.env.TEST_DB_PORT;
if (!port) throw new Error("TEST_DB_PORT ausente: rode via `pnpm test:db:fortis`.");
const APP_URL = `postgresql://crm_app:crm_app@127.0.0.1:${port}/postgres`;
const SUPERUSER_URL = `postgresql://postgres:postgres@127.0.0.1:${port}/postgres`;

const ORG_A = "f0000000-0000-4000-8000-00000000000a";
const ORG_B = "f0000000-0000-4000-8000-00000000000b";
const USER_A = "f0000000-0000-4000-8000-0000000000a1"; // member of A
const USER_AB = "f0000000-0000-4000-8000-0000000000ab"; // member of A and B
const SESSION = "f0000000-0000-4000-8000-00000000005e";

let db: Database;

async function superuser(sql: string, params: unknown[] = []) {
  const c = new pg.Client({ connectionString: SUPERUSER_URL });
  await c.connect();
  try {
    return await c.query(sql, params);
  } finally {
    await c.end();
  }
}

type Row = Record<string, unknown>;
const rows = async (tx: { $queryRawUnsafe: (q: string, ...v: unknown[]) => Promise<unknown> }, q: string, ...v: unknown[]) =>
  (await tx.$queryRawUnsafe(q, ...v)) as Row[];

beforeAll(async () => {
  await superuser(`
    insert into identity.users (id, external_identity_id, email) values
      ('${USER_A}', 'kc:user-a', 'a@example.test'),
      ('${USER_AB}', 'kc:user-ab', 'ab@example.test');
    insert into public.organizations (id, slug, legal_name, display_name) values
      ('${ORG_A}', 'fortis-db-a', 'A Ltda', 'A'),
      ('${ORG_B}', 'fortis-db-b', 'B Ltda', 'B');
    insert into public.user_organizations (user_id, organization_id, role, accepted_at) values
      ('${USER_A}', '${ORG_A}', 'admin', now()),
      ('${USER_AB}', '${ORG_A}', 'agent', now()),
      ('${USER_AB}', '${ORG_B}', 'agent', now());
  `);
  db = createDatabase({ url: APP_URL });
});

afterAll(async () => {
  await db?.disconnect();
});

const tenant = (userId: string, companyId: string | null = null) => ({
  userId,
  companyId,
  aal: "aal1" as const,
  sessionId: null,
});

describe("fail-closed: crm_app outside the scopes", () => {
  it("the login role itself cannot read tenant data", async () => {
    const c = new pg.Client({ connectionString: APP_URL });
    await c.connect();
    try {
      await expect(c.query("select id from public.organizations")).rejects.toThrow(/permission denied/);
    } finally {
      await c.end();
    }
  });
});

describe("runTenantTransaction", () => {
  it("runs as crm_authenticated with the request context in app.* GUCs", async () => {
    const [r] = await db.runTenantTransaction(
      { userId: USER_AB, companyId: ORG_B, aal: "aal2", sessionId: SESSION },
      (tx) =>
        rows(
          tx,
          `select current_user as role, fortis.current_user_id()::text as uid,
                  fortis.current_company_id()::text as company, fortis.current_aal() as aal,
                  fortis.current_session_id()::text as sid, current_setting('lock_timeout') as lock`,
        ),
    );
    expect(r).toEqual({ role: "crm_authenticated", uid: USER_AB, company: ORG_B, aal: "aal2", sid: SESSION, lock: "4s" });
  });

  it("RLS isolates tenants: a member of A never sees B", async () => {
    const orgs = await db.runTenantTransaction(tenant(USER_A), (tx) =>
      rows(tx, "select id::text from public.organizations order by id"),
    );
    expect(orgs.map((o) => o.id)).toEqual([ORG_A]);
  });

  it("the active company narrows a multi-org member to that company", async () => {
    const all = await db.runTenantTransaction(tenant(USER_AB), (tx) =>
      rows(tx, "select id::text from public.organizations order by id"),
    );
    expect(all.map((o) => o.id)).toEqual([ORG_A, ORG_B]);
    const onlyB = await db.runTenantTransaction(tenant(USER_AB, ORG_B), (tx) =>
      rows(tx, "select id::text from public.organizations order by id"),
    );
    expect(onlyB.map((o) => o.id)).toEqual([ORG_B]);
  });

  it("rejects an invalid context before touching the database", async () => {
    let touched = false;
    await expect(
      db.runTenantTransaction({ ...tenant(USER_A), userId: "not-a-uuid" }, async () => {
        touched = true;
      }),
    ).rejects.toBeInstanceOf(DbScopeError);
    await expect(
      db.runTenantTransaction({ ...tenant(USER_A), aal: "aal3" as "aal1" }, async () => {
        touched = true;
      }),
    ).rejects.toBeInstanceOf(DbScopeError);
    expect(touched).toBe(false);
  });

  it("rolls back everything when the unit of work throws", async () => {
    await expect(
      db.runPlatformTransaction("maintenance", async (tx) => {
        await tx.$executeRawUnsafe(`update public.organizations set display_name = 'mudou' where id = $1::uuid`, ORG_A);
        throw new Error("falha no meio");
      }),
    ).rejects.toThrow("falha no meio");
    const { rows: r } = await superuser("select display_name from public.organizations where id = $1", [ORG_A]);
    expect(r[0].display_name).toBe("A");
  });

  it("the context does not leak into the next transaction on the same connection", async () => {
    const one = createDatabase({ url: APP_URL, maxConnections: 1 });
    try {
      await one.runTenantTransaction(tenant(USER_AB, ORG_A), async () => undefined);
      const [r] = await one.runPlatformTransaction("maintenance", (tx) =>
        rows(
          tx,
          `select coalesce(current_setting('app.current_user_id', true), '') as uid,
                  coalesce(current_setting('app.current_company_id', true), '') as company`,
        ),
      );
      expect(r).toEqual({ uid: "", company: "" });
    } finally {
      await one.disconnect();
    }
  });
});

describe("runPlatformTransaction", () => {
  it("runs as crm_service (BYPASSRLS), without lock timeout, labelled with its reason", async () => {
    const [r] = await db.runPlatformTransaction("cron", (tx) =>
      rows(
        tx,
        `select current_user as role, current_setting('lock_timeout') as lock,
                current_setting('app.platform_reason', true) as reason,
                (select count(*)::int from public.organizations) as orgs`,
      ),
    );
    expect(r).toEqual({ role: "crm_service", lock: "0", reason: "cron", orgs: 2 });
  });

  it("refuses a reason outside the typed list", async () => {
    await expect(db.runPlatformTransaction("because" as "cron", async () => undefined)).rejects.toBeInstanceOf(DbScopeError);
  });
});

describe("nesting", () => {
  it("a nested call with the same scope reuses the outer transaction", async () => {
    const seen = await db.runPlatformTransaction("maintenance", async (tx) => {
      await tx.$executeRawUnsafe(`update public.organizations set display_name = 'dentro' where id = $1::uuid`, ORG_B);
      const inner = await db.runPlatformTransaction("maintenance", (inner) =>
        rows(inner, "select display_name from public.organizations where id = $1::uuid", ORG_B),
      );
      await tx.$executeRawUnsafe(`update public.organizations set display_name = 'B' where id = $1::uuid`, ORG_B);
      return inner[0]?.display_name;
    });
    expect(seen).toBe("dentro");
  });

  it("a nested call with a different scope is refused (no silent privilege change)", async () => {
    await expect(
      db.runPlatformTransaction("maintenance", () => db.runTenantTransaction(tenant(USER_A), async () => undefined)),
    ).rejects.toBeInstanceOf(DbScopeError);
    await expect(
      db.runTenantTransaction(tenant(USER_A), () => db.runPlatformTransaction("maintenance", async () => undefined)),
    ).rejects.toBeInstanceOf(DbScopeError);
    await expect(
      db.runTenantTransaction(tenant(USER_A), () => db.runTenantTransaction(tenant(USER_AB), async () => undefined)),
    ).rejects.toBeInstanceOf(DbScopeError);
  });
});

describe("onCommit", () => {
  it("runs after the commit of the outermost transaction, and only then", async () => {
    const log: string[] = [];
    await db.runTenantTransaction(tenant(USER_A), async () => {
      db.onCommit(() => void log.push("outer"));
      await db.runTenantTransaction(tenant(USER_A), async () => {
        db.onCommit(() => void log.push("inner"));
      });
      log.push("body-end");
    });
    expect(log).toEqual(["body-end", "outer", "inner"]);
  });

  it("is discarded on rollback", async () => {
    const log: string[] = [];
    await expect(
      db.runTenantTransaction(tenant(USER_A), async () => {
        db.onCommit(() => void log.push("never"));
        throw new Error("rollback");
      }),
    ).rejects.toThrow("rollback");
    expect(log).toEqual([]);
  });

  it("outside a transaction it is an error, not a silent immediate call", () => {
    expect(() => db.onCommit(() => undefined)).toThrow(DbScopeError);
  });

  it("a failing callback does not fail the committed unit of work", async () => {
    const log: string[] = [];
    const out = await db.runTenantTransaction(tenant(USER_A), async () => {
      db.onCommit(() => {
        throw new Error("efeito falhou");
      });
      db.onCommit(() => void log.push("segue"));
      return "ok";
    });
    expect(out).toBe("ok");
    expect(log).toEqual(["segue"]);
  });
});
