#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
IMAGE="${TEST_DB_IMAGE:-pgvector/pgvector:pg17}"
CONTAINER="ativva-crm-prisma-introspect-$$"
cleanup() { docker rm -f "$CONTAINER" >/dev/null 2>&1 || true; }
trap cleanup EXIT

docker run -d --rm --name "$CONTAINER" -p 127.0.0.1::5432 \
  -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres "$IMAGE" >/dev/null
PORT="$(docker port "$CONTAINER" 5432/tcp | head -1 | sed 's/.*://')"
for _ in $(seq 1 60); do
  if docker exec "$CONTAINER" pg_isready -U postgres >/dev/null 2>&1; then break; fi
  sleep 1
done
docker exec "$CONTAINER" pg_isready -U postgres >/dev/null
psql() { docker exec -i "$CONTAINER" psql -U postgres -d postgres -v ON_ERROR_STOP=1 -q "$@"; }
psql < "$ROOT/database/platform/0001_fortis_platform.sql"
psql -c 'create database fortis_introspection owner crm_owner' >/dev/null
# Roles are cluster-wide; extensions and platform schemas belong in the target DB.
docker exec -i "$CONTAINER" psql -U postgres -d fortis_introspection -v ON_ERROR_STOP=1 -q < "$ROOT/database/platform/0001_fortis_platform.sql"
as_owner() { { printf 'set role crm_owner;\n'; cat; } | docker exec -i "$CONTAINER" psql -U postgres -d fortis_introspection -v ON_ERROR_STOP=1 -q; }
as_owner < "$ROOT/database/baseline/baseline.sql"
as_owner < "$ROOT/database/platform/0100_fortis_tenancy.sql"
URL="postgresql://postgres:postgres@127.0.0.1:$PORT/fortis_introspection"
cd "$ROOT"
corepack pnpm exec prisma db pull --schema prisma/schema.prisma --url "$URL" --schemas public,identity,object_storage
corepack pnpm exec prisma generate --schema prisma/schema.prisma
# Prisma 7.10 emits trailing whitespace in generated comments; normalize it so
# the committed client remains clean under git diff --check and deterministic.
find "$ROOT/lib/db/generated" -type f -print0 | xargs -0 sed -i 's/[[:space:]]\+$//'
