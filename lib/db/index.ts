/**
 * Fortis data layer (ADR-0001, ADR-0002 in docs/fortis/adr).
 *
 * The runtime connects as `crm_app`, a login role that is NOINHERIT and holds no
 * privileges: nothing runs outside the two scopes below, so a forgotten scope
 * fails closed instead of running with implicit privileges.
 *
 * - runTenantTransaction — replaces the Supabase *server* client. `SET LOCAL ROLE
 *   crm_authenticated` plus the request context in `app.*` GUCs (read by
 *   fortis.current_user_id()/company_id()/aal()/session_id()); the existing RLS
 *   stays the authority. `app.current_company_id` is the ATIVVA GUC.
 * - runPlatformTransaction — replaces the Supabase *admin* client. `SET LOCAL ROLE
 *   crm_service` (BYPASSRLS), no lock timeout, and a typed reason recorded in
 *   `app.platform_reason`, so every RLS bypass says why.
 *
 * Same contract as ATIVVA's PrismaService: a nested call reuses the outer
 * transaction, and onCommit() work runs once, after the outermost commit. Unlike
 * ATIVVA (two connection pools), both scopes share one pool and differ by role,
 * so a nested call that would change role or context is refused.
 */
import { AsyncLocalStorage } from "node:async_hooks";

import { PrismaPg } from "@prisma/adapter-pg";
import { z } from "zod";

import { logger } from "@/lib/logger";

import { PrismaClient, type Prisma } from "./generated/client";

export type Transaction = Prisma.TransactionClient;

/** Why a unit of work needs to bypass RLS. Extend as modules migrate. */
export const PLATFORM_REASONS = [
  "cron",
  "worker",
  "webhook",
  "auth",
  "public_link",
  "platform_admin",
  "lgpd",
  "maintenance",
] as const;
export type PlatformReason = (typeof PLATFORM_REASONS)[number];

// Postgres `uuid` accepts any 8-4-4-4-12 hex id (upstream fixtures are not all
// RFC 4122), so the check is the database's, not z.uuid()'s.
const tenantContextSchema = z
  .object({
    userId: z.guid(),
    companyId: z.guid().nullable(),
    aal: z.enum(["aal1", "aal2"]),
    sessionId: z.guid().nullable(),
  })
  .strict();
export type TenantContext = z.infer<typeof tenantContextSchema>;

const platformReasonSchema = z.enum(PLATFORM_REASONS);

export class DbScopeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DbScopeError";
  }
}

export type Database = {
  runTenantTransaction<T>(ctx: TenantContext, fn: (tx: Transaction) => Promise<T>): Promise<T>;
  runPlatformTransaction<T>(reason: PlatformReason, fn: (tx: Transaction) => Promise<T>): Promise<T>;
  /** Defers side effects (realtime, events) until the outermost commit. */
  onCommit(callback: () => unknown): void;
  disconnect(): Promise<void>;
};

type Scope = { key: string; tx: Transaction; afterCommit: Array<() => unknown> };

export function createDatabase(options: { url: string; maxConnections?: number }): Database {
  const client = new PrismaClient({
    adapter: new PrismaPg({ connectionString: options.url, max: options.maxConnections }),
  });
  const current = new AsyncLocalStorage<Scope>();

  async function run<T>(key: string, enter: (tx: Transaction) => Promise<void>, fn: (tx: Transaction) => Promise<T>): Promise<T> {
    const outer = current.getStore();
    if (outer) {
      if (outer.key !== key) {
        throw new DbScopeError(`nested transaction scope differs from the outer one (${outer.key} → ${key})`);
      }
      return fn(outer.tx);
    }
    const afterCommit: Array<() => unknown> = [];
    const result = await client.$transaction(async (tx) => {
      await enter(tx);
      return current.run({ key, tx, afterCommit }, () => fn(tx));
    });
    for (const callback of afterCommit) {
      try {
        await callback();
      } catch (error) {
        logger.error("db.on_commit_failed", { scope: key.split(":")[0], error: String(error) });
      }
    }
    return result;
  }

  return {
    runTenantTransaction(ctx, fn) {
      const parsed = tenantContextSchema.safeParse(ctx);
      if (!parsed.success) return Promise.reject(new DbScopeError(`invalid tenant context: ${parsed.error.message}`));
      const c = parsed.data;
      return run(
        `tenant:${c.userId}:${c.companyId ?? ""}:${c.aal}:${c.sessionId ?? ""}`,
        async (tx) => {
          await tx.$executeRawUnsafe("set local role crm_authenticated");
          await tx.$executeRaw`select set_config('app.current_user_id', ${c.userId}, true),
                                      set_config('app.current_company_id', ${c.companyId ?? ""}, true),
                                      set_config('app.current_aal', ${c.aal}, true),
                                      set_config('app.current_session_id', ${c.sessionId ?? ""}, true)`;
        },
        fn,
      );
    },

    runPlatformTransaction(reason, fn) {
      const parsed = platformReasonSchema.safeParse(reason);
      if (!parsed.success) return Promise.reject(new DbScopeError(`unknown platform reason: ${String(reason)}`));
      return run(
        "platform",
        async (tx) => {
          await tx.$executeRawUnsafe("set local role crm_service");
          await tx.$executeRawUnsafe("set local lock_timeout = 0");
          await tx.$executeRaw`select set_config('app.platform_reason', ${parsed.data}, true)`;
        },
        fn,
      );
    },

    onCommit(callback) {
      const scope = current.getStore();
      if (!scope) throw new DbScopeError("onCommit() called outside a transaction scope");
      scope.afterCommit.push(callback);
    },

    disconnect: () => client.$disconnect(),
  };
}
