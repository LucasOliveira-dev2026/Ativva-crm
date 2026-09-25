// node --test scripts/fortis/inventory/
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { categorize, classify } from './classify.mjs';
import { importSpecifiers } from './imports.mjs';
import { isEntryPoint, moduleOf, routeOf } from './modules.mjs';
import { detectSignals } from './signals.mjs';

const ts = (text) => detectSignals(text, { sql: false });
const sql = (text) => detectSignals(text, { sql: true });

test('detects query builder tables and rpc names, not storage buckets', () => {
  const s = ts(`const a = await db.from("crm_leads").select("*");
await db.rpc('fn_conversation_assign', {});
await sb.storage.from("whatsapp-media").upload(p, b);`);
  assert.deepEqual(s.tables, ['crm_leads']);
  assert.deepEqual(s.rpcs, ['fn_conversation_assign']);
  assert.ok(s.hits.storage);
});

test('a comment-only mention is not a runtime dependency', () => {
  const s = ts('// antes usava Supabase aqui\nexport const x = 1;');
  assert.equal(s.commentOnly, true);
  assert.deepEqual(classify('lib/x.ts', s).classes, ['KEEP_DOMAIN_LOGIC']);
});

test('runtime auth calls are REPLACE_KEYCLOAK; admin client is high risk', () => {
  const s = ts('import { createAdminClient } from "@/lib/supabase/admin";\nawait supabase.auth.getUser();');
  const { classes } = classify('lib/foo.ts', s);
  assert.ok(classes.includes('REPLACE_KEYCLOAK'));
  assert.ok(classes.includes('REPLACE_DB_LAYER'));
});

test('a threaded client handle in runtime is REPLACE_DB_LAYER, in docs it is not', () => {
  const s = ts('await run(ctx.supabase, id);');
  assert.deepEqual(classify('lib/mcp/tools/x.ts', s).classes, ['REPLACE_DB_LAYER']);
  assert.deepEqual(classify('docs/guia.md', s).classes, ['DELETE_INFRA_ONLY']);
});

test('SQL: auth.uid policies are RLS, auth.users is identity, buckets are storage', () => {
  const s = sql(`create policy p on t using (organization_id in (select fn_user_org_ids()));
create table x (user_id uuid references auth.users(id));
insert into storage.buckets (id) values ('a');
alter publication supabase_realtime add table t;`);
  assert.deepEqual(classify('supabase/migrations/1.sql', s).classes, [
    'REPLACE_KEYCLOAK',
    'REPLACE_REALTIME',
    'REPLACE_RLS',
    'REPLACE_STORAGE',
  ]);
});

test('historical records are allowed, never UNVERIFIED', () => {
  assert.equal(categorize('HANDOFF-ia-360.md'), 'HISTORY');
  assert.equal(categorize('evidence/x/log.txt'), 'HISTORY');
  assert.deepEqual(classify('evidence/a.md', ts('Supabase')).classes, ['HISTORICAL_ALLOWED']);
});

test('categories follow the tree layout', () => {
  assert.equal(categorize('.github/workflows/ci.yml'), 'CI');
  assert.equal(categorize('tests/invariants/a.test.ts'), 'TEST');
  assert.equal(categorize('lib/a/b.test.ts'), 'TEST');
  assert.equal(categorize('docker-compose.prod.yml'), 'INFRA');
  assert.equal(categorize('ubuntu-production-installer.sh'), 'INFRA');
  assert.equal(categorize('lib/database.types.ts'), 'GENERATED');
  assert.equal(categorize('proxy.ts'), 'RUNTIME');
});

test('entry points map to product modules', () => {
  assert.ok(isEntryPoint('app/app/inbox/[id]/page.tsx'));
  assert.ok(!isEntryPoint('app/app/inbox/page.test.tsx'));
  assert.equal(moduleOf('app/app/inbox/[id]/page.tsx'), 'INBOX');
  assert.equal(moduleOf('app/api/v1/leads/[id]/route.ts'), 'CRM');
  assert.equal(moduleOf('app/app/ai/followups/page.tsx'), 'FOLLOWUP');
  assert.equal(moduleOf('app/api/v1/webhooks/waha/route.ts'), 'WHATSAPP');
  assert.equal(moduleOf('app/api/v1/webhooks/in/[slug]/route.ts'), 'WEBHOOKS');
  assert.equal(moduleOf('app/(public)/login/page.tsx'), 'AUTH');
  assert.equal(moduleOf('app/app/settings/api-tokens/page.tsx'), 'API_TOKENS');
  assert.equal(routeOf('app/(public)/login/mfa/page.tsx'), '/login/mfa');
  assert.equal(routeOf('app/api/v1/leads/route.ts'), '/api/v1/leads');
});

test('import specifiers cover static, dynamic, side-effect and re-exports', () => {
  const specs = importSpecifiers(`import a from "@/lib/a";
import "./side";
export { b } from '../b';
const c = await import("@/lib/c");`);
  assert.deepEqual(specs.sort(), ['../b', './side', '@/lib/a', '@/lib/c']);
});
