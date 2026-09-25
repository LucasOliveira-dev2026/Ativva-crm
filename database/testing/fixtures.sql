-- Test-only fixtures for the Fortis DB harness (scripts/fortis/test-db.sh).
-- Never applied outside the throwaway test database.
create schema if not exists test_db;

-- Upstream invariant tests describe the logged-in user as a JWT claims object
-- (`{"sub": …, "aal": …, "session_id": …}`), as PostgREST did. The Fortis
-- harness rewrites their `set_config('request.jwt.claims', …)` into this call
-- (scripts/fortis/testing/test-codemod.mjs), which sets the Fortis request
-- contract instead. The `role` claim is ignored: the role comes from SET ROLE.
create or replace function test_db.contexto_do_usuario(claims text, is_local boolean)
  returns text
  language plpgsql
as $$
declare
  c jsonb := coalesce(nullif(claims, ''), '{}')::jsonb;
begin
  perform set_config('app.current_user_id', coalesce(c ->> 'sub', ''), is_local);
  perform set_config('app.current_aal', coalesce(c ->> 'aal', ''), is_local);
  perform set_config('app.current_session_id', coalesce(c ->> 'session_id', ''), is_local);
  return claims;
end
$$;

-- Upstream fixtures create users by id/email only. In the real schema the
-- Keycloak subject is mandatory; here a fixture subject is derived from the
-- id so those fixtures keep working. New Fortis tests pass it explicitly.
create or replace function test_db.external_identity_da_fixture()
  returns trigger
  language plpgsql
as $$
begin
  new.external_identity_id := coalesce(new.external_identity_id, 'fixture:' || new.id);
  return new;
end
$$;

drop trigger if exists fixture_external_identity on identity.users;
create trigger fixture_external_identity
  before insert on identity.users
  for each row execute function test_db.external_identity_da_fixture();

-- Upstream tests create probe functions/tables as the session user
-- (`postgres` here), relying on the default ACL that Supabase gives objects
-- created by its owner. Same default for the test superuser.
alter default privileges for role postgres in schema public grant all on functions to crm_anonymous, crm_authenticated, crm_service;
alter default privileges for role postgres in schema public revoke execute on functions from public;
alter default privileges for role postgres in schema public grant all on tables to crm_anonymous, crm_authenticated, crm_service;
alter default privileges for role postgres in schema public grant all on sequences to crm_anonymous, crm_authenticated, crm_service;
-- Upstream's schema owner WAS the test session user (postgres). Here the
-- definer functions run as crm_owner, so in the throwaway test cluster only,
-- crm_owner is a member of postgres: it acts as the owner of the probe
-- objects the tests create, without adding entries to their ACLs.
grant postgres to crm_owner;

grant usage on schema test_db to crm_anonymous, crm_authenticated, crm_service;
grant execute on all functions in schema test_db to crm_anonymous, crm_authenticated, crm_service;

-- The runtime login role (crm_app) is NOLOGIN in the prelude: the installer
-- gives it LOGIN and a secret. The throwaway test cluster uses a fixed one so
-- tests/fortis/db can connect exactly as the application does.
alter role crm_app login password 'crm_app';
