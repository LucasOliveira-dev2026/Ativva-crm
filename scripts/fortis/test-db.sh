#!/usr/bin/env bash
# Fortis DB gate: the upstream invariant suite (tests/invariants/**) against a
# PLAIN PostgreSQL carrying the Fortis platform — no Supabase stubs.
#
# Mirrors scripts/test-db.sh (upstream) step by step: throwaway container,
# baseline applied in INSTALL then UPDATE mode with ON_ERROR_STOP=1, a template
# database copied fresh for every test file, shuffled file order, and the
# "tree moved during the run" guard. What differs is the platform:
#   database/platform/0001_fortis_platform.sql  (roles, fortis.*, identity.*, object_storage.*)
#   database/baseline/baseline.sql              (generated, applied as crm_owner)
#   database/platform/0100_fortis_tenancy.sql   (tenancy overlay, as crm_owner)
#   database/testing/fixtures.sql               (test-only helpers)
# and the tests are rewritten at load time by scripts/fortis/testing/test-codemod.mjs.
#
# Usage: pnpm test:db:fortis [vitest filters...]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
if ! command -v vitest >/dev/null 2>&1; then
  echo "ERRO: \`vitest\` não está no PATH. Use \`pnpm test:db:fortis\`." >&2
  exit 1
fi
node "$ROOT/scripts/fortis/baseline/build.mjs" --check

IMAGE="${TEST_DB_IMAGE:-pgvector/pgvector:pg17}"
CONTAINER="ativva-crm-test-db-$$"
TEMPLATE="inv_baseline"
PUBLICACAO="127.0.0.1::5432"
[ -n "${TEST_DB_PORT:-}" ] && PUBLICACAO="127.0.0.1:${TEST_DB_PORT}:5432"
CARIMBO="$(mktemp "${TMPDIR:-/tmp}/crm-test-db-carimbo.XXXXXX")"
MEDIDOS=("$ROOT/database" "$ROOT/tests/invariants" "$ROOT/scripts/fortis" "$ROOT/vitest.db.fortis.config.ts")

cleanup() {
  docker rm -fv "$CONTAINER" >/dev/null 2>&1 || true
  rm -f "$CARIMBO"
}
trap cleanup EXIT

echo "==> $IMAGE como $CONTAINER"
docker run -d --rm --name "$CONTAINER" -p "$PUBLICACAO" \
  --label "ativva-crm.harness=test-db-fortis" --label "ativva-crm.worktree=$ROOT" \
  -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres "$IMAGE" >/dev/null
PORT="$(docker port "$CONTAINER" 5432/tcp | head -1 | sed 's/.*://')"
export TEST_DB_PORT="$PORT"
for _ in $(seq 1 60); do
  docker exec "$CONTAINER" psql -h 127.0.0.1 -U postgres -d postgres -c 'select 1' >/dev/null 2>&1 && break
  sleep 1
done

as_superuser() {
  local db="$1"; shift
  docker exec -i "$CONTAINER" psql -U postgres -d "$db" -v ON_ERROR_STOP=1 -q "$@" -f -
}
as_owner() {
  { echo 'set role crm_owner;'; cat; } | docker exec -i "$CONTAINER" psql -U postgres -d "$1" -v ON_ERROR_STOP=1 -q -f - >/dev/null
}

docker exec "$CONTAINER" psql -U postgres -q -c "create database $TEMPLATE" >/dev/null
echo "==> plataforma Fortis (papéis, fortis.*, identity.*, object_storage.*)"
as_superuser "$TEMPLATE" < "$ROOT/database/platform/0001_fortis_platform.sql" >/dev/null
docker exec "$CONTAINER" psql -U postgres -q -c "alter database $TEMPLATE owner to crm_owner" >/dev/null
as_superuser "$TEMPLATE" < "$ROOT/database/testing/fixtures.sql" >/dev/null

echo "==> fidelidade: ACL padrão que o schema pressupõe (funções e tabelas novas)"
fidelidade="$(as_superuser "$TEMPLATE" -tA <<'SQL'
set role crm_owner;
create function public.fn_sonda_fidelidade() returns int language sql security definer as $f$ select 1 $f$;
create table public.sonda_fidelidade (id int);
select (select exists (select 1 from pg_proc p, unnest(coalesce(p.proacl, '{}'::aclitem[])) a
                        where p.proname = 'fn_sonda_fidelidade' and split_part(a::text, '=', 1) = 'crm_anonymous'))
    || ':' || (select count(distinct a.grantee) from pg_class c, aclexplode(c.relacl) a
                where c.oid = 'public.sonda_fidelidade'::regclass and a.privilege_type = 'DELETE'
                  and a.grantee in ('crm_anonymous'::regrole, 'crm_user'::regrole, 'crm_platform'::regrole));
drop table public.sonda_fidelidade;
drop function public.fn_sonda_fidelidade();
SQL
)"
if [ "$fidelidade" != "true:3" ]; then
  echo "FATAL: ACL padrão divergente ($fidelidade, esperado true:3): o prelude Fortis perdeu os" >&2
  echo "       'alter default privileges' que o schema e seus invariantes de hardening pressupõem." >&2
  exit 1
fi

aplicar_baseline() {
  as_owner "$TEMPLATE" < "$ROOT/database/baseline/baseline.sql"
  as_owner "$TEMPLATE" < "$ROOT/database/platform/0100_fortis_tenancy.sql"
  as_superuser "$TEMPLATE" >/dev/null <<'SQL'
create table if not exists test_db.aplicacoes_do_baseline (aplicada_em timestamptz not null default clock_timestamp());
insert into test_db.aplicacoes_do_baseline default values;
SQL
}

echo "==> INSTALL: baseline Fortis com ON_ERROR_STOP=1"
aplicar_baseline
TEMPLATE_UMA_APLICACAO="inv_baseline_uma_aplicacao"
docker exec "$CONTAINER" psql -U postgres -d template1 -q -v ON_ERROR_STOP=1 \
  -c "create database $TEMPLATE_UMA_APLICACAO template $TEMPLATE" >/dev/null
echo "==> UPDATE: re-aplicação (idempotência)"
aplicar_baseline

as_superuser template1 >/dev/null <<SQL
drop database if exists postgres with (force);
create database postgres template $TEMPLATE;
SQL

echo "==> invariantes contra a plataforma Fortis (banco novo por arquivo, ordem sorteada)"
TEST_DB_CONTAINER="$CONTAINER" TEST_DB_TEMPLATE="$TEMPLATE" TEST_DB_PORT="$PORT" \
  TEST_DB_TEMPLATE_UMA_APLICACAO="$TEMPLATE_UMA_APLICACAO" \
  vitest run --config vitest.db.fortis.config.ts --sequence.shuffle.files=true "$@"

mexidos="$(find "${MEDIDOS[@]}" -type f -newer "$CARIMBO" 2>/dev/null | head -20)"
if [ -n "$mexidos" ]; then
  echo "FATAL: a árvore mudou durante a corrida; o resultado não vale:" >&2
  echo "$mexidos" | sed 's/^/  /' >&2
  exit 1
fi
echo "==> test:db:fortis verde"
