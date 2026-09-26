#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SCRIPT="$ROOT/scripts/fortis/prisma/introspect.sh"

[ -x "$SCRIPT" ]
grep -q 'prisma db pull' "$SCRIPT"
grep -q -- '--schemas public,identity,object_storage' "$SCRIPT"
grep -q "sed -i 's/\[\[:space:\]\]\\\\+\$//'" "$SCRIPT"

# CI must generate the schema/client first, then verify that committed outputs
# did not change. The test uses an isolated Git repository to exercise that
# exact freshness-check pattern against a staged candidate (not HEAD).
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
mkdir -p "$tmp/work/.github/workflows" "$tmp/work/lib/db/generated"
cp "$ROOT/.github/workflows/fortis-platform.yml" "$tmp/work/.github/workflows/fortis-platform.yml"
printf 'schema candidate\n' > "$tmp/work/schema.prisma"
printf 'client candidate\n' > "$tmp/work/lib/db/generated/client.ts"
git -C "$tmp/work" init -q
git -C "$tmp/work" config user.email test@example.invalid
git -C "$tmp/work" config user.name test
git -C "$tmp/work" add .
git -C "$tmp/work" commit -qm candidate
check="$(awk '/name: Prisma schema and client are current/{capture=1} capture{print} capture && /pnpm test:db:fortis/{exit}' "$ROOT/.github/workflows/fortis-platform.yml")"
[ -n "$check" ]
case "$check" in
  *'git diff --exit-code -- prisma/schema.prisma lib/db/generated'*) ;;
  *) echo 'CI freshness diff must target the committed schema and generated client' >&2; exit 1;;
esac
if printf '%s\\n' "$check" | grep -q 'pnpm exec prisma generate'; then
  echo 'CI must not redundantly generate the client after the introspection script' >&2
  exit 1
fi
printf 'schema candidate\n' > "$tmp/work/schema.prisma"
printf 'client candidate\n' > "$tmp/work/lib/db/generated/client.ts"
git -C "$tmp/work" diff --exit-code -- schema.prisma lib/db/generated
printf 'stale\n' > "$tmp/work/schema.prisma"
if git -C "$tmp/work" diff --exit-code -- schema.prisma lib/db/generated >/dev/null 2>&1; then
  echo 'freshness check failed to detect stale generated schema' >&2
  exit 1
fi
