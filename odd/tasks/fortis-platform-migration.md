# Fortis platform migration (DeskcommCRM → ATIVVA CRM)

## Objective

Turn the DeskcommCRM fork into the native ATIVVA CRM: **100% functional parity**
with upstream + **zero Supabase runtime**, converging on the Fortis platform
(Keycloak realm `fortis`, PostgreSQL 17 + pgvector, ATIVVA tenancy GUC contract,
Socket.IO realtime, S3/MinIO, Redis, n8n). Chatwoot is not part of the architecture.

## Problem

Every layer of the upstream depends on Supabase (Auth, PostgREST data access,
RLS context via `auth.uid()`, Realtime, Storage, installer/CI). Fortis must not
run a second, parallel platform.

## Why

One identity (SSO with ATIVVA), one tenancy model, one operational stack.

## Authorized Scope

- Fork + inventories + parity matrix (F0), then F1..F9 on `feat/fortis-platform-migration`.
- Commit locally and push feature branches. **No** merge, **no** production deploy.
- ATIVVA: branch `feat/crm-integration` only (created, no CRM code; F10 later).
- Keycloak realm changes only via ADR + snapshot + explicit approval.

## Constraints

- Preserve every upstream feature; replace infrastructure only.
- Keep upstream files intact where possible (sync): schema and tests are derived by
  reproducible transforms (`scripts/fortis/**`); `tests/invariants/**` stays frozen.
- No Supabase stubs in the Fortis platform; fail-closed transforms.
- Strict TDD for new behavior; never claim RED retroactively.

## Acceptance Criteria

- `SUPABASE-MIGRATION-INVENTORY` and `FUNCTIONAL-INVENTORY` with UNVERIFIED = 0.
- F1: neutral schema applies (install + update) on plain pg17; upstream invariant
  suite on the Fortis platform has **no failure that the upstream harness does not
  also have** (pre-existing failures listed separately).
- Final: `zero-supabase-gate --strict` passes and parity matrix has
  PARITY_FAIL = 0 and NOT_VERIFIED = 0.

## Tasks

- [x] T1 Fork provenance (remotes, upstream.json, license) — commit `91334e9`
- [x] T2 Functional + Supabase inventories, parity matrix — commit `dbfe5c6`
- [ ] T3 F1 schema: platform prelude, neutralizer, tenancy overlay, test fixtures, codemod, Fortis DB harness
- [ ] T4 F1 evidence: upstream invariants on Fortis vs upstream harness (baseline diff)
- [ ] T5 Zero-Supabase ratchet gate + CI workflow + UPSTREAM-SYNC + ADRs + report
- [ ] T6 F1b data layer (`lib/db`, Prisma 7, runTenantTransaction/runPlatformTransaction)
- [ ] T7 F2 Keycloak (client `ativva-crm` ADR → realm change needs approval)
- [ ] T8 F3 object storage · T9 F4 realtime · T10 F5 Redis/workers · T11 F6 n8n
- [ ] T12 F7 installer/backup/deploy · T13 F8 remove SDK/env (`--strict`) · T14 F9 parity

## Verification

- `node --test 'scripts/fortis/**/*.test.mjs'`
- `node scripts/fortis/baseline/build.mjs --check`, `node scripts/fortis/inventory/generate.mjs --check`
- `node scripts/fortis/zero-supabase-gate.mjs`
- `pnpm test:db:fortis` vs `pnpm test:db` (upstream reference, same commit)
- `pnpm typecheck`, `pnpm lint`, `pnpm test:unit`

## Evidence

- Upstream unit baseline @ base: 14017/14018 pass; 1 pre-existing failure
  (`tests/unit/pdf-extractor.test.ts`, tsx subprocess strategy).
- Neutral schema on pg17: 170 tables, 561 policies, 436 functions, 156 triggers,
  12 realtime tables, 6 buckets; second application clean (idempotent).
- Exploratory Fortis invariant run (unit suite running concurrently, some docker
  EPIPE): 2235/2299 pass, 22 files failing — triage in T4.

## Progress

- Fork: `LucasOliveira-dev2026/ativva-crm` (created by the user outside the
  organization; `Fortis-solucoes` unreachable from this session). Its `main` is
  upstream `d1081dc` (19 commits past our base `aaf1b3b`): sync pending after F1.
- Memory mirror: `odd/fortis-platform-migration/tasks.md` (local .md standing in for Engram, by user decision).

## Next Step

T4: finish the upstream reference run, diff failures, fix the Fortis-caused ones.
