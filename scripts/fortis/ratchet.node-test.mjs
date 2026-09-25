// node --test scripts/fortis/ratchet.node-test.mjs
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { compare, strictProblems } from './ratchet.mjs';

const rec = (path, classes, category = 'RUNTIME') => ({ path, category, classes });
const base = new Map([
  ['lib/a.ts', rec('lib/a.ts', ['REPLACE_DB_LAYER'])],
  ['lib/b.ts', rec('lib/b.ts', ['REPLACE_REALTIME'])],
]);

test('a new file with a Supabase dependency fails', () => {
  const { problems } = compare(base, [...base.values(), rec('lib/new.ts', ['REPLACE_KEYCLOAK'])]);
  assert.match(problems[0], /new Supabase dependency: lib\/new\.ts/);
});

test('an existing file gaining a dependency class fails', () => {
  const { problems } = compare(base, [rec('lib/a.ts', ['REPLACE_DB_LAYER', 'REPLACE_STORAGE']), base.get('lib/b.ts')]);
  assert.match(problems[0], /lib\/a\.ts gained REPLACE_STORAGE/);
});

test('historical records never fail the ratchet', () => {
  const { problems } = compare(base, [...base.values(), rec('evidence/x.md', ['HISTORICAL_ALLOWED'], 'HISTORY')]);
  assert.deepEqual(problems, []);
});

test('removed dependencies are reported so the baseline gets tightened', () => {
  const { problems, tightened } = compare(base, [base.get('lib/a.ts')]);
  assert.deepEqual(problems, []);
  assert.deepEqual(tightened, ['lib/b.ts']);
});

test('strict mode: runtime and @supabase packages fail, upstream schema source does not', () => {
  const out = strictProblems(
    [
      rec('lib/a.ts', ['REPLACE_DB_LAYER']),
      rec('lib/c.ts', ['KEEP_DOMAIN_LOGIC']),
      rec('supabase/migrations/1.sql', ['REPLACE_RLS'], 'SQL'),
      rec('docs/x.md', ['DELETE_INFRA_ONLY'], 'DOC'),
    ],
    { dependencies: { '@supabase/ssr': '1', next: '16' } },
  );
  assert.deepEqual(out, ['RUNTIME lib/a.ts', 'package.json dependencies: @supabase/ssr']);
});
