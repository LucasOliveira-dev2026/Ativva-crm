<!-- ODD MEMORY MIRROR (Engram substitute, by user decision)
project: ativva-crm (fork of melgarafael/DeskcommCRM) — /home/user/crm/ativva-crm
feature: fortis-platform-migration
source of truth: odd/tasks/fortis-platform-migration.md (this file is a copy; code + evidence win over both)
last synced: 2026-09-26
-->

# Fortis platform migration (DeskcommCRM → ATIVVA CRM)

## Objective

Turn the DeskcommCRM fork into the native ATIVVA CRM: **100% functional parity**
with upstream + **zero Supabase runtime**, converging on the Fortis platform
(Keycloak realm `fortis`, PostgreSQL 17 + pgvector, ATIVVA tenancy GUC contract,
Socket.IO realtime, S3/MinIO, Redis, n8n). **Chatwoot is not part of the
architecture** (user decision): Inbox/Conversas/WhatsApp stay Deskcomm's.

## Problem

Every layer of the upstream depends on Supabase (Auth, PostgREST data access,
RLS context via `auth.uid()`, Realtime, Storage, installer/CI). Fortis must not
run a second, parallel platform.

## Why

One identity (SSO with ATIVVA), one tenancy model, one operational stack.

## Authorized Scope

- Fork + inventories + parity matrix (F0), then F1..F9 on `feat/fortis-platform-migration`.
- Commit and **push feature branches**. **No** merge, **no** PR unless asked, **no** production deploy.
- ATIVVA repo (`LucasOliveira-dev2026/Ativva`): branch `feat/crm-integration` only
  (created from `main` @ `c5ec95e`, no CRM code; used in F10).
- Keycloak realm changes only via ADR + snapshot + explicit user approval.
- Always answer the user in **Portuguese**. Follow ODD (this file + memory mirror).

## Constraints

- Preserve every upstream feature; replace infrastructure only. Never "REMOVE" a feature.
- Keep upstream files intact where possible (sync): the schema and the DB tests are
  derived by reproducible transforms (`scripts/fortis/**`); `tests/invariants/**`
  is frozen upstream (`loop/hooks/freeze-invariants.sh`) — never edit it.
- No Supabase stubs in the Fortis platform; transforms are fail-closed.
- Strict TDD for new behavior; never claim RED retroactively.
- Commits: conventional, English, no AI attribution/Co-Authored-By (Fortis rule).

## Acceptance Criteria

- Inventories with UNVERIFIED = 0 (done).
- F1: neutral schema applies (install + update) on plain pg17; upstream invariant
  suite on the Fortis platform has **zero failures** (upstream reference has zero).
- Final: `node scripts/fortis/zero-supabase-gate.mjs --strict` passes and the parity
  matrix has PARITY_FAIL = 0 and NOT_VERIFIED = 0.

## Tasks

- [x] T1 Fork provenance (remotes, upstream.json, license) — `91334e9`
- [x] T2 Functional + Supabase inventories, parity matrix — `dbfe5c6`
- [x] T3 F1 schema: platform prelude, neutralizer, tenancy overlay, test fixtures,
      codemod, Fortis DB harness, ratchet gate, CI, ADRs, report — `e64cafa`, `ea79a05`
- [x] T4 F1 evidence: `pnpm test:db:fortis` full suite **0 failures** (run 4,
      2026-09-25: 2300/2301 pass, 1 skipped, 274 files, exit 0) on `ea79a05`
- [x] T5 Sync with upstream `main` `d1081dc` (19 commits): merge `38e3644`, regen
      `11b6385`, unit-suite fix `992cc1e`; invariants and unit suite at the reference
- [x] T6a F1b data layer foundation `lib/db` (Prisma 7.10 + adapter-pg):
      `runTenantTransaction` / `runPlatformTransaction` / `onCommit` — `fa30bb9`
- [x] T6x Upstream unit test `pdf-extractor` fixed (was failing on the upstream
      base too): tsx subprocess runs a script FILE instead of `--eval` (D17)
- [ ] T6b Prisma schema from the neutral DB (`db pull`) + first module moved off
      the Supabase client (strangling starts), decomposed into T6b.1–T6b.5 below
- [ ] T7 F2 Keycloak client `ativva-crm` (ADR-0003 proposed; realm change needs approval)
- [ ] T8 F3 object storage · T9 F4 realtime · T10 F5 Redis/workers · T11 F6 n8n
- [ ] T12 F7 installer/backup/deploy · T13 F8 remove SDK/env (`--strict`) · T14 F9 parity · T15 F10 ATIVVA

## Context map (where things live)

| What                                | Path                                                                                                                                   |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream base record                | `docs/fortis/upstream.json` (base `aaf1b3b`, MIT)                                                                                      |
| Inventory generator (rules + tests) | `scripts/fortis/inventory/*.mjs` → `docs/fortis/SUPABASE-MIGRATION-INVENTORY.md`, `FUNCTIONAL-INVENTORY.md`, `docs/fortis/inventory/*` |
| Parity matrix                       | `docs/fortis/FUNCTIONAL-PARITY-REPORT.md`                                                                                              |
| F0 report / ADRs / sync guide       | `docs/fortis/PLATFORM-MIGRATION-REPORT.md`, `docs/fortis/adr/0001..0006`, `docs/fortis/UPSTREAM-SYNC.md`                               |
| Platform prelude (superuser, once)  | `database/platform/0001_fortis_platform.sql`                                                                                           |
| Neutral schema (generated)          | `database/baseline/baseline.sql` ← `scripts/fortis/baseline/build.mjs` ← `neutralize.mjs`                                              |
| Tenancy overlay (after baseline)    | `database/platform/0100_fortis_tenancy.sql`                                                                                            |
| Test-only fixtures                  | `database/testing/fixtures.sql`                                                                                                        |
| DB test codemod (load-time)         | `scripts/fortis/testing/test-codemod.mjs` + `vitest.db.fortis.config.ts`                                                               |
| Fortis DB harness                   | `scripts/fortis/test-db.sh` (`pnpm test:db:fortis`)                                                                                    |
| Zero-Supabase ratchet               | `scripts/fortis/zero-supabase-gate.mjs`, `ratchet.mjs`, baseline `docs/fortis/inventory/supabase-baseline.jsonl`                       |
| CI (own file, no upstream edits)    | `.github/workflows/fortis-platform.yml`                                                                                                |

## Decisions (with reason)

- **D1 DB access = Prisma 7** (ADR-0001): convergence with ATIVVA; ~2,060 `.from()`
  in 565 files + 97 RPCs to rewrite module by module; SQL domain (≈350 functions,
  187 policies, 120 triggers) preserved. Rejected: PostgREST self-hosted, fake
  `supabase.from()` wrapper.
- **D2 Tenancy = keep Deskcomm RLS, swap context** (ADR-0002): `auth.uid()` →
  `fortis.current_user_id()` (GUC `app.current_user_id`); new `app.current_company_id`
  (same GUC name as ATIVVA); `fn_user_org_ids()` = memberships ∩ active company when
  set (overlay). F2 exit: company becomes mandatory.
- **D3 Roles**: `anon/authenticated/service_role` → `crm_anonymous/crm_authenticated/crm_service`
  (NOLOGIN); login role `crm_app` NOINHERIT (must SET ROLE, holds no privileges);
  schema owner `crm_owner` (non-superuser, database owner).
- **D4 Identity** (ADR-0003): `auth.users/sessions/mfa_factors` → `identity.*`
  fed from Keycloak (`external_identity_id` = `sub`, NOT NULL; `aal` from `acr/amr`;
  `sid` → sessions). `raw_user_meta_data` → `profile`.
- **D5 Storage** (ADR-0004): `storage.*` → `object_storage.*` metadata registry; RLS
  policies keep authorizing before presigning; bytes in S3/MinIO.
- **D6 Realtime** (ADR-0005): publication renamed `crm_realtime` (catalog of live
  tables); Socket.IO gateway with post-commit events.
- **D7 lock_timeout 4s** (upstream migration 0243) set in the prelude on `crm_app`
  and `crm_authenticated`; the neutralizer turns the baseline's `alter role … lock_timeout`
  into `null;` (crm_owner cannot alter roles).
- **D8 Owner literal** `'postgres'` → `'crm_owner','postgres'` (Supabase's postgres
  was owner + admin; both stay privileged).
- **D9 Role rename rules** skip SQL comment lines, text after `-- ` on a line,
  column aliases (`AS anon`) and object keys (`{ anon: … }`, colon + space), and
  use identifier boundaries `[A-Za-z0-9_]` (so `anonExecuta` is untouched);
  casts (`'anon'::regrole`) and `role:privilege` strings are renamed.
- **D10 Tests**: upstream invariants stay byte-identical; the codemod rewrites in
  memory: `set_config('request.jwt.claims', …)` → `test_db.contexto_do_usuario(…)`
  (sets app.* GUCs), platform rules, `supabase/baseline.sql` → `database/baseline/baseline.sql`,
  `supabase/migrations` and `"supabase", "migrations"` → `database/upstream-migrations`
  (neutral copies generated by `build.mjs`), regex spellings `auth\\.uid\\(\\)`
  and `auth[.]uid[(][)]`, `authenticator` → `crm_app`. Fixtures (test DB only):
  `external_identity_id = 'fixture:'||id`; objects created by `postgres` get the
  crm_* default ACL; `grant postgres to crm_owner` (upstream owner == test user).
- **D12 Overlay guard**: the tenancy overlay re-states upstream's LATEST
  `fn_user_org_ids()` body (memberships ∪ active support session) and only adds
  the active-company filter; `build.mjs` pins the upstream body's sha256 and
  fails when upstream changes it. (A first overlay dropped the support-session
  union — a real regression caught by `suporte-temporario`.)
- **D13 Role names preserve upstream order**: `crm_anonymous` < `crm_authenticated`
  < `crm_service` (was crm_user/crm_platform), because code and tests order by
  role name (`audit-log-sob-o-default-acl…` compares an ordered string).
- **D14 `scripts/lib/gate-ativacao.ts`** (ops CLI querying the DB) edited in place
  to ask for `crm_service`: it is Fortis-owned now (expect a small sync conflict).
- **D15 Fortis rule tests are `*.node-test.mjs`** (not `*.test.mjs`): vitest's
  default include ran them and failed to bundle `node:test`, breaking the upstream
  unit suite. And the two `fortis-platform.yml` jobs are declared in the upstream
  map `tests/unit/gatilho-dos-jobs-de-entrega.test.ts` (with `condicao: null`) —
  a Fortis edit to an upstream unit test (expect a small sync conflict).
- **D16 `lib/db` contract** (ADR-0001): one pool as `crm_app`; scopes differ by
  role. Tenant: `SET LOCAL ROLE crm_authenticated` + `app.current_user_id /
company_id / aal / session_id` (zod-validated, `z.guid()` = Postgres uuid).
  Platform: `SET LOCAL ROLE crm_service`, `lock_timeout = 0`, typed reason in
  `app.platform_reason` (`PLATFORM_REASONS`). Nested call reuses the outer
  transaction only for an identical scope, else `DbScopeError` (no silent
  privilege change — ATIVVA uses two pools, we cannot reuse across roles).
  `onCommit` runs after the outermost commit, dropped on rollback, failures
  logged (`db.on_commit_failed`) without failing the unit of work. Generated
  client committed in `lib/db/generated` (`prisma-client` generator, ESM), CI
  checks it is current. Fortis DB tests are `tests/fortis/db/*.db-test.ts`
  (outside vitest's default include), run by `test:db:fortis`; fixtures give
  `crm_app` LOGIN + password `crm_app` in the throwaway cluster only.
  `DATABASE_URL` becomes required when the first call site moves; no application
  module is switched in T6b.2.
- **D17 `pdf-extractor` tsx case**: under `tsx --eval`, `import()` of a TS module
  (compiled to CJS) yields only `{ default }` (Node 22.22 + tsx 4.23.13, even for a
  trivial module); from a script file the named exports exist — which is how the
  worker runs. The upstream test now writes a temp `.cjs` and runs it with tsx
  (Fortis edit of an upstream test; worth proposing upstream).
- **D18 Atomic platform cutover; no dual-stack**: the application must never read
  some data from Supabase and other data from Fortis PostgreSQL. Keycloak auth,
  `lib/db` data access, S3/MinIO storage, and Socket.IO realtime move together on
  this feature branch; intermediate commits compile and pass applicable suites,
  but end-to-end app operation is accepted only after coordinated cutover. Nothing
  is deployed until then. Mixed identity/data/storage/realtime providers split
  authorization and consistency boundaries, making tenant isolation and parity
  unprovable. T6b prepares shared adapters without claiming operational status.
- **D11 Fork location**: `LucasOliveira-dev2026/ativva-crm` (org `Fortis-solucoes`
  unreachable; GitHub App cannot create repos — user created it).

## Verification (commands)

```bash
node --test 'scripts/fortis/**/*.node-test.mjs'
node scripts/fortis/baseline/build.mjs --check
node scripts/fortis/inventory/generate.mjs --check
node scripts/fortis/zero-supabase-gate.mjs
pnpm test:db:fortis --reporter=json --outputFile=/tmp/fortis-inv.json
pnpm test:db
```

## Evidence

- Upstream unit baseline @ base (`vitest run`, JSON reporter): 14017/14018 pass;
  1 pre-existing failure `tests/unit/pdf-extractor.test.ts` (tsx subprocess strategy).
- Upstream invariants @ base (upstream harness, pgvector pg15): 2298/2299 pass,
  1 skipped, 0 failures → Fortis target is 0 failures.
- Neutral schema on plain pg17: 170 tables, 561 policies, 436 functions, 156
  triggers, 12 tables in `crm_realtime`, 6 buckets; second application clean.
- Static gates @ WIP commit: 25/25 rule tests, `build --check`, `generate --check`,
  ratchet PASS, eslint 0 problems on `scripts/fortis`.
- Fortis run 1 (exploratory, contended by unit run): 2235/2299 pass, 59 fails / 22 files.
- Fortis run 2 (after D7–D10): 2243/2301 pass, 53 fails / 20 files, 5 skipped.
- Fortis subset runs after D9–D14: 53 → 16 → 2 → 0 failures on the 20 previously
  failing files (last subset: 41/41 across 4 hardest files).
- Fortis full run 4 (alone, on `ea79a05`): 2300/2301 pass, 1 skipped, 0 failures,
  0 failed suites, 274 files, harness exit 0. F1 acceptance met.
- After T5 (upstream `d1081dc` merged), invariants: 2318/2319 pass, 1 skipped,
  0 failures, 276 files, exit 0.
- Unit suite after T5, before D17: 14043/14044 pass; only `pdf-extractor` failed.
- T6a: DB transaction tests RED (`not implemented`), then 15/15 GREEN; sabotage
  nested-scope check disabled → 14/15, caught. Full invariants 2333/2334 pass,
  1 skipped, 0 failures.
- `pdf-extractor` D17: RED reproduced; 16/16 GREEN after fix. Sabotage of
  `estrategiaPadrao()` made both strategy cases RED, caught; source restored.
- Full unit suite after D17 (`73ba361`): 14044/14044 pass, 0 failures, 1402 files,
  exit 0, no `Errors` line.
- **T6b.2:** `pnpm test:db:fortis --reporter=json --outputFile=/tmp/t6b2-db.json`
  exited 0. JSON: 738/738 suites passed; 2333 passed, 0 failed, 1 pending.
  Container `ativva-crm-test-db-364680` removed by harness. Commit `75cb81e82`
  records verification; implementation is `fd4f463be`.
- **T6b.3 current:** `lib/auth/tenant-context.ts` is a pure mapping from BFF-validated
  principal `{sub,sid,acr,amr}`, resolved identity row, and selected company to existing
  `TenantContext`; no credential parsing or authorization decision. ADR-0003 defines
  `sub` as opaque text, not UUID; mapping requires exact equality with
  `identity.external_identity_id`, and only the internal identity UUID becomes `userId`.
  It rejects invalid claims, absent/disabled/mismatched identity and invalid company.
  Tests cover those contracts: 10/10 pass; `pnpm exec prettier --check
lib/auth/tenant-context.ts lib/auth/tenant-context.test.ts` passes. Initial test-first invocation failed because the target module did not
  exist (runner exited 1 with zero tests collected); this is not counted as valid
  behavior RED evidence. Initial typecheck hit OOM at default memory;
  `NODE_OPTIONS=--max-old-space-size=8192 pnpm typecheck` passed. The first expanded
  direct tsc run caught test fixture literal widening; adding `as const` fixed it.
  `AuthUser`, `ActiveOrg`, `loadAuthUser`, and `requireRole` remain Supabase-backed;
  this seam alone does not switch runtime or make app operational. Coordinator clarified
  source during T6b.3: use this validated-principal seam now; BFF validation wiring is
  an ATIVVA handoff, not a reason to block CRM-only work. `lib/auth/identity.ts` now
  resolves exact opaque `sub` through `identity.users.external_identity_id` inside
  `runPlatformTransaction("auth")`; absent, disabled, malformed, or mismatched rows fail
  closed through the pure mapper. `lib/auth/identity.test.ts` covers lookup and failures;
  combined auth tests pass 13/13, and `NODE_OPTIONS=--max-old-space-size=8192 pnpm typecheck`
  passes. Resolver is groundwork only; `loadAuthUser` does not call it. Attempted
  `pnpm exec eslint lib/auth/tenant-context.ts lib/auth/tenant-context.test.ts` twice;
  the harness exited 2 with `ESLint output (JSON parse failed: EOF while parsing a value...)`,
  so file-level lint remains unavailable, not passed. Projection wiring awaits a typed
  BFF principal request-context contract; preserve D18 and avoid dual identity resolution.
- **Native review:** unavailable for both observed T6b.3 candidates. Initial inspect
  refused with `empty_base_diff_bootstrap_required` and returned target `sha256:a0fa7500…`
  rather than requested `sha256:e3162166…`. After the subject-binding correction,
  inspect again returned `empty_base_diff_bootstrap_required`, no paths, and target
  `sha256:6fecb0c0…` rather than the newly supplied `sha256:e4beac79…`. A later inspect
  failed safely before native mutation (`unrelated target status is inconsistent`,
  `retry_safe: true`). Standing orders say do not retry unavailable review. No bootstrap,
  retry or START.

## Triage of run 2 (resolved; confirmed by full run 4)

| Cause                                                                | Fix                                                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Tests read/apply upstream migration files                            | neutral copies in `database/upstream-migrations/` + codemod path mapping (D10) |
| Tests read baseline via `join(…, "supabase", "baseline.sql")`        | path-parts rule (D10)                                                          |
| Role words in camelCase keys, object keys, `role:priv` strings       | D9 boundaries                                                                  |
| Probe objects created by `postgres` vs definers owned by `crm_owner` | fixtures `grant postgres to crm_owner` (D10)                                   |
| Support sessions missing from `fn_user_org_ids()`                    | overlay re-states upstream body + hash guard (D12)                             |
| Regex spellings of `auth.uid()` in scanners                          | codemod rules (D10)                                                            |
| Ordered role strings                                                 | role names preserving order (D13)                                              |
| `gate-ativacao.ts` asked for `service_role`                          | D14                                                                            |

## Environment notes (for the next agent)

- Docker: a fresh cloud container may have daemon stopped; use only authorized local
  disposable test infrastructure. Never touch persistent or unrelated containers.
- Subagents: haiku for search, sonnet for triage/mechanical rewrites, opus only for hard design.
- Vitest non-TTY should use JSON reporter to preserve summary and exit evidence.
- `node --test <dir>` fails on Node 22; pass a glob.
- Do not run unit and DB suites in parallel (docker EPIPE).
- `scripts/fortis/test-db.sh` refuses result if protected paths change during run.
- The memory mirror is `odd/fortis-platform-migration/tasks.md`; update with this file.

## Progress

- Fork: `LucasOliveira-dev2026/ativva-crm`; branch `feat/fortis-platform-migration` pushed.
- T6b.2 verification record pushed in `75cb81e82`.
- Local unowned `.gitignore` change adds `.atl/`; preserve, do not commit.

## T6b task breakdown

### T6b.1 — Reproducible Prisma introspection [x]

Completed and pushed previously. Generated schema/client reproducible; 175 models,
`ai_chunks.embedding Unsupported("vector")`, schema validation and CI freshness covered.

### T6b.2 — Shared database configuration [x]

`DATABASE_URL` env contract and `.env.example`; lazy process-shared `db()` backed by
`createDatabase`; focused validation/singleton tests 4/4; `pnpm typecheck` previously
passed. Full Fortis DB suite evidence above. No app module switched.

### T6b.3 — Keycloak session and tenant context [in progress]

Scope: BFF session with HttpOnly/Secure/SameSite=Strict, resolve validated Keycloak
`sub` through `identity.users`, expose validated `TenantContext` through auth while
keeping `AuthUser`/`ActiveOrg` as projections. No realm mutation and no second OIDC
implementation; reuse ATIVVA BFF. Current completed slice only maps an already validated
principal to DB context. Focused Vitest, Prettier check, and `NODE_OPTIONS=--max-old-space-size=8192
pnpm typecheck` pass. File-level ESLint invocation is unavailable due harness JSON parse
failure (exit 2). Pending: shared BFF session validation and lookup wiring,
context/projection integration with existing auth, cookie tests, role tests under new
principal source, and coordinated ATIVVA handoff. Details:

- Identity model: `prisma/schema.prisma` (`identity.users`, `sessions`), generated
  client under `lib/db/generated`; source DDL `database/platform/0001_fortis_platform.sql`.
- Auth current source: `lib/auth/server.ts` still calls Supabase `auth.getUser()` and
  resolves Supabase memberships; `lib/auth/require-role.ts` retains database RPC role
  check via Supabase. Avoid mixed runtime until atomic cutover.
- ADR: `docs/fortis/adr/0003-identity-keycloak.md` is proposed; reuse the ATIVVA BFF
  at `/home/lucas/orca/Ativva/apps/web/src/app/api/auth/*`; no realm edits here.
- ATIVVA-side work is excluded from this repo; handoff details are below.

### T6b.4 — Platform service adapters [ ]

Shared adapters: S3/MinIO and object metadata authorization, Socket.IO emission only
via `onCommit`, Redis Fortis. Existing consumers remain unchanged until coordinated
cutover. Test object authorization/metadata, post-commit and rollback behavior, Redis
ops, and preserve current browser/API contracts.

### T6b.5 — Atomic adapter readiness gate [ ]

Run combined contract tests and static checks; explicitly assert app remains
non-operational until coordinated auth/data/storage/realtime cutover. Never leave
runtime split across providers.

## ATIVVA integration handoff

ATIVVA repository must be coordinated separately; do not edit it from this CRM task.

- **BFF/session:** reuse `/home/lucas/orca/Ativva/apps/web/src/app/api/auth/*` modules
  (`oidc-config.ts`, `oidc-transaction.ts`, `transaction-store.ts`, `session-custody.ts`,
  `refresh/`, `logout/`, `callback/`). Add CRM-specific `ativva-crm` client config and
  exact callback/logout redirect contracts per ADR-0003. Browser holds opaque
  HttpOnly/Secure/SameSite=Strict cookie; server validates token/session and resolves
  verified claims `{sub,sid,acr,amr}`. CRM does not implement parallel OIDC.
- **Chatwoot touchpoints:** coordinator must inventory using the authorized read-only
  search `grep -rn -i chatwoot /home/lucas/orca/Ativva/apps /home/lucas/orca/Ativva/infra`.
  For each hit, replace/repoint to the CRM contract only after API/event schemas are
  settled; no unverified endpoint or event names asserted here.
- **CRM identity contract:** verified `sub` maps only to
  `identity.users.external_identity_id`; internal `users.id` is the tenant DB user id.
  `sid` maps to UUID `identity.sessions.id`; `acr`/`amr` produce AAL and MFA-factor
  mirror per ADR. Missing or disabled identity must fail closed. CRM membership and
  role authorization stay in `user_organizations`/policies; role RPC remains authority.
- **Realm:** proposed confidential `ativva-crm` client, authorization code + PKCE,
  `fullScopeAllowed: false`, exact redirect URIs; service account narrowly scoped to
  `manage-users` only if signup/invites require it. Snapshot + explicit owner approval
  required before applying any change. This work has not applied it.
- **Environment:** coordinate names/values for issuer, internal Keycloak URL, client ID,
  client secret, redirect/app base URL, Redis BFF custody, and any callback allowlist.
  Never put secrets in git/docs or log them; add CRM env declarations in `.env.example`
  and `lib/env.ts` only once contract names/defaults are approved.
- **Data migration:** preserve UUID identity references across 66 domain FKs; link existing
  CRM users to Keycloak by explicit validated identity mapping, never email-only; reconcile
  duplicate/missing subjects before enabling cutover; mirror sessions and MFA factors per ADR.
  Exact backfill/source procedure remains to be designed with owner and ATIVVA coordinator.

## Next Step

T6b.3 remains in progress. CRM maps an already validated BFF principal and exactly matched
internal identity to `TenantContext`; `lib/auth/identity.ts` performs scoped identity lookup.
Added `lib/auth/validated-principal.ts` as a strict, branded carrier for claims returned by
the trusted BFF boundary; it parses only the typed claims payload, not cookies or tokens.
Its focused suite passes 6/6; `NODE_OPTIONS=--max-old-space-size=8192 pnpm typecheck`
passes. This is a contract seam only, not connected to request runtime or `loadAuthUser`.
ATIVVA must provide the trusted request-context integration per handoff. Storage adapter
work remains blocked on the ADR-0004 authorization/schema mismatch. Native review unavailable
as recorded; CI plus coordinator review is check of record. No realm mutation, app-module
migration, deploy, merge or PR.
