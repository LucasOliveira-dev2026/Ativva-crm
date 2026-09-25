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
- [ ] T3 F1 schema: platform prelude, neutralizer, tenancy overlay, test fixtures,
      codemod, Fortis DB harness, ratchet gate, CI, ADRs, report — **committed as
      WIP; static gates green; invariant suite not yet at 0 failures (T4)**
- [ ] T4 F1 evidence: `pnpm test:db:fortis` with **0 failures** — 53 left (see Triage)
- [ ] T5 Sync with upstream `main` (fork `main` = `d1081dc`, 19 commits past base
      `aaf1b3b`): `git merge upstream/main`, rebuild baseline, reinventory, rerun gates
- [ ] T6 F1b data layer `lib/db` (Prisma 7 + adapter-pg; `runTenantTransaction`
      sets `SET LOCAL ROLE crm_user` + GUCs; `runPlatformTransaction` sets
      `SET LOCAL ROLE crm_platform` + `SET LOCAL lock_timeout = 0`)
- [ ] T7 F2 Keycloak client `ativva-crm` (ADR-0003 proposed; realm change needs approval)
- [ ] T8 F3 object storage · T9 F4 realtime · T10 F5 Redis/workers · T11 F6 n8n
- [ ] T12 F7 installer/backup/deploy · T13 F8 remove SDK/env (`--strict`) · T14 F9 parity · T15 F10 ATIVVA

## Context map (where things live)

| What | Path |
| --- | --- |
| Upstream base record | `docs/fortis/upstream.json` (base `aaf1b3b`, MIT) |
| Inventory generator (rules + tests) | `scripts/fortis/inventory/*.mjs` → `docs/fortis/SUPABASE-MIGRATION-INVENTORY.md`, `FUNCTIONAL-INVENTORY.md`, `docs/fortis/inventory/*` |
| Parity matrix | `docs/fortis/FUNCTIONAL-PARITY-REPORT.md` |
| F0 report / ADRs / sync guide | `docs/fortis/PLATFORM-MIGRATION-REPORT.md`, `docs/fortis/adr/0001..0006`, `docs/fortis/UPSTREAM-SYNC.md` |
| Platform prelude (superuser, once) | `database/platform/0001_fortis_platform.sql` |
| Neutral schema (generated) | `database/baseline/baseline.sql` ← `scripts/fortis/baseline/build.mjs` ← `neutralize.mjs` |
| Tenancy overlay (after baseline) | `database/platform/0100_fortis_tenancy.sql` |
| Test-only fixtures | `database/testing/fixtures.sql` |
| DB test codemod (load-time) | `scripts/fortis/testing/test-codemod.mjs` + `vitest.db.fortis.config.ts` |
| Fortis DB harness | `scripts/fortis/test-db.sh` (`pnpm test:db:fortis`) |
| Zero-Supabase ratchet | `scripts/fortis/zero-supabase-gate.mjs`, `ratchet.mjs`, baseline `docs/fortis/inventory/supabase-baseline.jsonl` |
| CI (own file, no upstream edits) | `.github/workflows/fortis-platform.yml` |

## Decisions (with reason)

- **D1 DB access = Prisma 7** (ADR-0001): convergence with ATIVVA; ~2,060 `.from()`
  in 565 files + 97 RPCs to rewrite module by module; SQL domain (≈350 functions,
  187 policies, 120 triggers) preserved. Rejected: PostgREST self-hosted, fake
  `supabase.from()` wrapper.
- **D2 Tenancy = keep Deskcomm RLS, swap context** (ADR-0002): `auth.uid()` →
  `fortis.current_user_id()` (GUC `app.current_user_id`); new `app.current_company_id`
  (same GUC name as ATIVVA); `fn_user_org_ids()` = memberships ∩ active company when
  set (overlay). F2 exit: company becomes mandatory.
- **D3 Roles**: `anon/authenticated/service_role` → `crm_anonymous/crm_user/crm_platform`
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
  and `crm_user`; the neutralizer turns the baseline's `alter role … lock_timeout`
  into `null;` (crm_owner cannot alter roles).
- **D8 Owner literal** `'postgres'` → `'crm_owner','postgres'` (Supabase's postgres
  was owner + admin; both stay privileged).
- **D9 Role rename rules** skip SQL comment lines, text after `-- ` on a line, and
  column aliases (`AS anon`), because JS reads them as result keys.
- **D10 Tests**: upstream invariants stay byte-identical; the codemod rewrites in
  memory: `set_config('request.jwt.claims', …)` → `test_db.contexto_do_usuario(…)`
  (sets app.* GUCs), platform rules, `supabase/baseline.sql` → `database/baseline/baseline.sql`,
  `authenticator` → `crm_app`. Fixtures fill `external_identity_id = 'fixture:'||id`
  and give objects created by `postgres` the same default ACL (test DB only).
- **D11 Fork location**: `LucasOliveira-dev2026/ativva-crm` (org `Fortis-solucoes`
  unreachable; GitHub App cannot create repos — user created it).

## Verification (commands)

```bash
node --test 'scripts/fortis/**/*.test.mjs'          # 25 tests (transform/ratchet/inventory rules)
node scripts/fortis/baseline/build.mjs --check      # schema current + zero Supabase residuals
node scripts/fortis/inventory/generate.mjs --check  # inventories current
node scripts/fortis/zero-supabase-gate.mjs          # ratchet
pnpm test:db:fortis --reporter=json --outputFile=/tmp/fortis-inv.json   # ~20 min, needs docker
pnpm test:db   # upstream reference harness (Supabase stubs), same commit
```

## Evidence

- Upstream unit baseline @ base (`vitest run`, JSON reporter): 14017/14018 pass;
  1 pre-existing failure `tests/unit/pdf-extractor.test.ts` (tsx subprocess strategy).
- Upstream invariants @ base (upstream harness, pgvector pg15): **2298/2299 pass,
  1 skipped, 0 failures** → Fortis target is 0 failures.
- Neutral schema on plain pg17: 170 tables, 561 policies, 436 functions, 156
  triggers, 12 tables in `crm_realtime`, 6 buckets; second application clean.
- Static gates @ WIP commit: 25/25 rule tests, `build --check`, `generate --check`,
  ratchet PASS, eslint 0 problems on `scripts/fortis`.
- Fortis run 1 (exploratory, contended by the unit run): 2235/2299 pass, 59 fails / 22 files.
- Fortis run 2 (after D7–D10): **2243/2301 pass, 53 fails / 20 files, 5 skipped**.
- Tests of the rules were written alongside the code (no observed RED phase);
  the quoted `"auth"."users"` / `"auth"."uid"()` rules came from real apply
  failures on pg17 (RED observed through the database).

## Triage of run 2 (open, T4)

| Cause | Files | Fix direction |
| --- | --- | --- |
| Tests read upstream **migration files** (`supabase/migrations/*.sql`) at runtime and pipe them to psql → `role "anon"/"authenticated" does not exist` | atualizacao-nao-reduplica-demanda, cura-da-demanda-poupa-a-referenciada, titulo-do-evento-pessoal-fora-do-alcance, audit-log-sob-o-default-acl-do-supabase, orcamento-nasce-desarmado, webhooks-secret-encryption, cascata-lgpd-nao-encolhe (parses a block) | generate neutral copies of the migrations (same `neutralize`) and map the path in the codemod |
| Re-applying the whole baseline on real data / spawnSync EPIPE | baseline-reaplica-sobre-acervo-real (877 errors), atualizar-nao-desliga-o-lembrete, agenda-meet-export (run 1) | reproduce alone; likely re-apply as `postgres` vs `crm_owner` ownership |
| Role word as a **JS object key** (`{ anon: false }`) renamed while the SQL alias is kept | pre-go-live-canal | role rules must also skip `word:` object keys (not `::` casts) |
| ACL details of probe objects created by `postgres` in tests (PUBLIC grant / role list) | modulo-instalado, provisionadora-de-modulo (+ helper `molde-de-provisionadora.ts`), definer-nova-nasce-exposta, hardening-definer-varredura | compare proacl with upstream harness for the same probe |
| `fn_user_org_ids()` count under support sessions (expected 2) | suporte-temporario, extensoes-declarativas | check the tenancy overlay against support/impersonation membership (support grants B without membership) |
| `fn_role_at_least` not recognized as delegation | definer-membership-varredura | the scanner reads function bodies; check renamed tokens it matches |
| `scripts/lib/gate-ativacao.ts` (runtime helper, not a test) uses `'service_role'` | gate-ativacao | runtime code: migrate with the data layer (T6) or map in codemod scope |

## Environment notes (for the next agent)

- Docker works; image `pgvector/pgvector:pg17` pulled. Docker Hub may rate-limit:
  use `mirror.gcr.io/<image>` if a pull fails.
- Vitest in non-TTY may exit without a summary: always use `--reporter=json --outputFile=…`.
- `node --test <dir>` fails on Node 22: pass a glob.
- `scripts/fortis/test-db.sh` refuses the result if `database/`, `tests/invariants`,
  `scripts/fortis` or `vitest.db.fortis.config.ts` change during the run.
- Do not run the unit suite and the DB suite at the same time (docker EPIPE).
- Run artifacts of this session (not in git): `…/scratchpad/fortis-inv2.json`
  (run 2), `upstream-inv.json` (reference), `unit-base.json` (unit baseline).

## Progress

- Fork: `LucasOliveira-dev2026/ativva-crm`; its `main` is upstream `d1081dc`.
  Branch `feat/fortis-platform-migration` pushed.
- Memory mirror: `odd/fortis-platform-migration/tasks.md` (markdown stands in for
  Engram, user decision). Update both files together.

## Next Step

T4: fix the causes in "Triage of run 2" one by one (start with neutral copies of
the upstream migrations), rerun `pnpm test:db:fortis` alone until 0 failures,
then mark T3/T4 done.
