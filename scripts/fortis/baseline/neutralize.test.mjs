// node --test scripts/fortis/baseline/neutralize.test.mjs
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { neutralize } from './neutralize.mjs';
import { transformTestSource } from '../testing/test-codemod.mjs';

test('request context moves to the Fortis GUC contract', () => {
  const { sql, residuals } = neutralize(
    `create policy p on t using (user_id = auth.uid());
create policy q on "public"."u" using (("user_id" = "auth"."uid"()));
select coalesce(auth.jwt()->>'aal','aal1');
select nullif(auth.jwt()->>'session_id','')::uuid;`,
  );
  assert.match(sql, /user_id = fortis\.current_user_id\(\)/);
  assert.match(sql, /"fortis"\."current_user_id"\(\)/);
  assert.match(sql, /coalesce\(fortis\.current_aal\(\),'aal1'\)/);
  assert.match(sql, /select fortis\.current_session_id\(\);/);
  assert.deepEqual(residuals, []);
});

test('identity, storage and realtime map to Fortis schemas', () => {
  const { sql } = neutralize(`references auth.users(id)
REFERENCES "auth"."users"("id")
select raw_user_meta_data->>'full_name' from auth.users;
create policy s on storage.objects using (storage.foldername(name));
alter publication supabase_realtime add table public.messages;`);
  assert.match(sql, /references identity\.users\(id\)/);
  assert.match(sql, /REFERENCES "identity"\."users"\("id"\)/);
  assert.match(sql, /select profile->>'full_name' from identity\.users;/);
  assert.match(sql, /on object_storage\.objects using \(object_storage\.foldername\(name\)\)/);
  assert.match(sql, /alter publication crm_realtime/);
});

test('roles are renamed in statements, keeping identifier quotes', () => {
  const { sql } = neutralize(`GRANT ALL ON TABLE "public"."t" TO "anon";
grant select on t to authenticated, service_role;
if current_user not in('postgres','service_role') then
ALTER FUNCTION f() OWNER TO "postgres";`);
  assert.match(sql, /TO "crm_anonymous";/);
  assert.match(sql, /to crm_authenticated, crm_service;/);
  assert.match(sql, /not in\('crm_owner','postgres','crm_service'\)/);
  assert.match(sql, /OWNER TO "crm_owner";/);
});

test('role words inside SQL comments are left as history', () => {
  const { sql } = neutralize('-- rodava como authenticated no PostgREST\nselect 1;');
  assert.match(sql, /-- rodava como authenticated no PostgREST/);
});

test('role-level lock_timeout moves to the platform prelude', () => {
  const { sql } = neutralize("    execute 'alter role authenticated set lock_timeout = ''4s''';");
  assert.match(sql, /null; -- Fortis: set on crm_app\/crm_authenticated by database\/platform/);
});

test('an unmapped Supabase platform object is refused, not shipped', () => {
  const { residuals } = neutralize(`select auth.email();
select * from storage.s3_multipart_uploads;
select current_setting('request.jwt.claims', true);`);
  assert.equal(residuals.length, 2);
  assert.match(residuals[0], /auth schema/);
  assert.match(residuals[1], /jwt claims/);
});

test('test codemod: claims become the Fortis request context, quotes survive', () => {
  const { text } = transformTestSource(`await c.query("select set_config('request.jwt.claims', $1, true)", [x]);
await c.query("set local role authenticated");
const role = user ? "authenticated" : "service_role";
await c.query("insert into auth.users (id, email) values ($1, $2)");
// comentário: authenticated fica
const conn = "postgresql://postgres:postgres@127.0.0.1/postgres";`);
  assert.match(text, /select test_db\.contexto_do_usuario\( \$1, true\)/);
  assert.match(text, /set local role crm_authenticated/);
  assert.match(text, /user \? "crm_authenticated" : "crm_service"/);
  assert.match(text, /insert into identity\.users/);
  assert.match(text, /comentário: authenticated fica/);
  assert.match(text, /postgres:postgres@127\.0\.0\.1\/postgres/);
});

test('column aliases named after roles are result keys, not roles', () => {
  const { sql } = neutralize(
    "select has_function_privilege('anon', f.oid, 'EXECUTE') AS anon, x as authenticated from f;",
  );
  assert.match(sql, /'crm_anonymous', f\.oid, 'EXECUTE'\) AS anon, x as authenticated/);
});

test('role words after an SQL comment marker stay as written', () => {
  const { text } = transformTestSource(
    "const CAB = '-- ---- VARREDURA anon:'; grant x to anon; -- anon aqui é prosa",
  );
  assert.equal(text, "const CAB = '-- ---- VARREDURA anon:'; grant x to anon; -- anon aqui é prosa");
  const { sql } = neutralize('grant select on t to anon; -- pro anon');
  assert.equal(sql, 'grant select on t to crm_anonymous; -- pro anon');
});

test('the owner literal keeps the cluster superuser privileged', () => {
  const { sql } = neutralize("if current_user not in('postgres','service_role') then");
  assert.match(sql, /not in\('crm_owner','postgres','crm_service'\)/);
});

test('test codemod points schema readers at the Fortis baseline and maps the login role', () => {
  const { text } = transformTestSource('readFileSync("supabase/baseline.sql"); const P = ["authenticator", "authenticated"];');
  assert.match(text, /database\/baseline\/baseline\.sql/);
  assert.match(text, /\["crm_app", "crm_authenticated"\]/);
});

test('test codemod maps every path form of the upstream schema sources', () => {
  const { text } = transformTestSource(`join(process.cwd(), "supabase", "baseline.sql");
join(ROOT, 'supabase', 'migrations', f);
readFileSync("supabase/migrations/20260718150000_0041_x.sql");`);
  assert.match(text, /join\(process\.cwd\(\), "database", "baseline", "baseline\.sql"\)/);
  assert.match(text, /join\(ROOT, 'database', 'upstream-migrations', f\)/);
  assert.match(text, /"database\/upstream-migrations\/20260718150000_0041_x\.sql"/);
});

test('object keys named after roles are kept; casts are still renamed', () => {
  const { text } = transformTestSource(`expect(r).toEqual({ anon: false, authenticated: true });
select 'anon'::regrole, "service_role"::regrole;`);
  assert.match(text, /\{ anon: false, authenticated: true \}/);
  assert.match(text, /'crm_anonymous'::regrole, "crm_service"::regrole/);
});

test('role words inside camelCase identifiers and role:privilege strings', () => {
  const { text } = transformTestSource(`const p = { anonExecuta: c[7] === "true" }; if (p.anonExecuta) {}
expect(s).toBe("anon:INSERT,authenticated:SELECT");`);
  assert.match(text, /\{ anonExecuta: c\[7\]/);
  assert.match(text, /p\.anonExecuta/);
  assert.match(text, /"crm_anonymous:INSERT,crm_authenticated:SELECT"/);
});

test('test codemod maps regex spellings of auth.uid()', () => {
  const { text } = transformTestSource(`from 'auth\\\\.uid\\\\(\\\\) is not null'
f.src ~* 'auth[.]uid[(][)]'`);
  assert.match(text, /fortis\\\\\.current_user_id\\\\\(\\\\\) is not null/);
  assert.match(text, /'fortis\[\.\]current_user_id\[\(\]\[\)\]'/);
});
