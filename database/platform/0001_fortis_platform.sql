-- Fortis platform prelude for the ATIVVA CRM database.
--
-- Runs ONCE per database, as a superuser, BEFORE database/baseline/baseline.sql
-- (which runs as crm_owner). It provides, on a plain PostgreSQL, everything
-- the schema used to get from the Supabase platform — with Fortis semantics:
--
--   Supabase                         Fortis (this file)
--   anon / authenticated / service_role  crm_anonymous / crm_user / crm_platform
--   authenticator (PostgREST login)  crm_app (login, NOINHERIT: must SET ROLE)
--   postgres (schema owner)          crm_owner
--   auth.uid() / auth.jwt()          fortis.current_user_id() / current_aal() /
--                                    current_session_id() over app.* GUCs
--   auth.users / sessions / mfa_factors  identity.* (fed from Keycloak)
--   storage.objects / buckets        object_storage.* (metadata; bytes in S3)
--
-- The request context follows the ATIVVA contract: the data layer opens a
-- transaction, `SET LOCAL ROLE crm_user` and `set_config(..., true)` for
-- app.current_user_id and app.current_company_id (same GUC name as ATIVVA).
-- Nothing is readable before that: crm_app itself holds no privileges.
--
-- Idempotent: safe to re-run.

do $$
declare
  r text;
begin
  foreach r in array array['crm_owner', 'crm_anonymous', 'crm_user', 'crm_platform', 'crm_app'] loop
    if to_regrole(r) is null then
      execute format('create role %I nologin', r);
    end if;
  end loop;
end
$$;

-- Parity with service_role: the platform role bypasses RLS. It is reachable
-- only through an explicit SET LOCAL ROLE in the data layer's platform scope.
alter role crm_platform bypassrls;
alter role crm_anonymous nobypassrls;
alter role crm_user nobypassrls;
alter role crm_app nobypassrls noinherit;
alter role crm_owner nobypassrls;
grant crm_anonymous, crm_user, crm_platform to crm_app;

-- API requests wait at most 4s for a lock (upstream migration 0243, set there
-- on PostgREST's `authenticator` and on `authenticated`). Platform work that
-- may wait resets it with SET LOCAL in the data layer's platform scope.
alter role crm_app set lock_timeout = '4s';
alter role crm_user set lock_timeout = '4s';

-- crm_owner owns the schema (like `ativva` in the ATIVVA database).
grant create, usage on schema public to crm_owner;
alter schema public owner to crm_owner;

create schema if not exists extensions authorization crm_owner;
create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists pgcrypto with schema extensions;
create extension if not exists vector with schema public;
create extension if not exists citext with schema public;
create extension if not exists pg_trgm with schema public;

-- The schema's security model assumes these default ACLs (Supabase bootstraps
-- them before any user SQL; the upstream hardening revokes on top of them and
-- its invariant suite measures the result). Reproduced for crm_owner.
alter default privileges for role crm_owner in schema public grant all on functions to crm_anonymous, crm_user, crm_platform;
alter default privileges for role crm_owner in schema public revoke execute on functions from public;
alter default privileges for role crm_owner in schema public grant all on tables to crm_anonymous, crm_user, crm_platform;
alter default privileges for role crm_owner in schema public grant all on sequences to crm_anonymous, crm_user, crm_platform;

-- ---------------------------------------------------------------- context --
create schema if not exists fortis authorization crm_owner;

create or replace function fortis.current_user_id() returns uuid
  language sql stable parallel safe
  set search_path = ''
  as $$ select nullif(current_setting('app.current_user_id', true), '')::uuid $$;

create or replace function fortis.current_company_id() returns uuid
  language sql stable parallel safe
  set search_path = ''
  as $$ select nullif(current_setting('app.current_company_id', true), '')::uuid $$;

-- Authenticator assurance level of the current Keycloak session: 'aal2' when
-- the session was established with a second factor (acr/amr), else 'aal1'.
create or replace function fortis.current_aal() returns text
  language sql stable parallel safe
  set search_path = ''
  as $$ select coalesce(nullif(current_setting('app.current_aal', true), ''), 'aal1') $$;

create or replace function fortis.current_session_id() returns uuid
  language sql stable parallel safe
  set search_path = ''
  as $$ select nullif(current_setting('app.current_session_id', true), '')::uuid $$;

alter function fortis.current_user_id() owner to crm_owner;
alter function fortis.current_aal() owner to crm_owner;
alter function fortis.current_company_id() owner to crm_owner;
alter function fortis.current_session_id() owner to crm_owner;
revoke all on schema fortis from public;
grant usage on schema fortis to crm_anonymous, crm_user, crm_platform;
revoke execute on all functions in schema fortis from public;
grant execute on all functions in schema fortis to crm_anonymous, crm_user, crm_platform;

-- --------------------------------------------------------------- identity --
-- One row per person known to the CRM, keyed by the Keycloak subject. The
-- internal id is what every domain FK references (66 of them); the email is
-- never an identity key.
create schema if not exists identity authorization crm_owner;

create table if not exists identity.users (
  id uuid primary key default gen_random_uuid(),
  external_identity_id text not null unique,
  email citext,
  profile jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  disabled_at timestamptz,
  constraint users_external_identity_id_not_blank check (btrim(external_identity_id) <> '')
);

-- Keycloak sessions the CRM has seen (`sid`), with their assurance level.
-- Support/impersonation sessions bind to one of these and expire with it.
create table if not exists identity.sessions (
  id uuid primary key,
  user_id uuid not null references identity.users(id) on delete cascade,
  aal text not null default 'aal1' check (aal in ('aal1', 'aal2')),
  not_after timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists sessions_user_id_idx on identity.sessions(user_id);

-- Second factors enrolled in Keycloak (otp, webauthn), mirrored at login.
create table if not exists identity.mfa_factors (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references identity.users(id) on delete cascade,
  factor_type text not null check (factor_type in ('totp', 'webauthn')),
  status text not null default 'verified' check (status in ('verified', 'unverified')),
  created_at timestamptz not null default now(),
  unique (user_id, factor_type)
);

alter table identity.users owner to crm_owner;
alter table identity.sessions owner to crm_owner;
alter table identity.mfa_factors owner to crm_owner;
revoke all on schema identity from public;
grant usage on schema identity to crm_anonymous, crm_user, crm_platform;
-- Same exposure as auth.users had: readable by the definer functions (owner),
-- by the platform role, and SELECT for the API roles (FK checks and the
-- upstream `select ... from auth.users` reads). Writes only by the platform.
revoke all on all tables in schema identity from public, crm_anonymous, crm_user;
grant select on all tables in schema identity to crm_anonymous, crm_user;
grant all on all tables in schema identity to crm_platform;

-- --------------------------------------------------------- object storage --
-- Metadata registry of the Fortis object store (S3/MinIO). Bytes never live
-- here. The ObjectStorage adapter writes a row inside the caller's tenant
-- transaction before presigning, so the schema's RLS policies on
-- object_storage.objects decide who may read or write which key.
create schema if not exists object_storage authorization crm_owner;

create table if not exists object_storage.buckets (
  id text primary key,
  name text not null unique,
  public boolean not null default false,
  file_size_limit bigint,
  allowed_mime_types text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists object_storage.objects (
  id uuid primary key default gen_random_uuid(),
  bucket_id text not null references object_storage.buckets(id),
  name text not null,
  owner uuid,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (bucket_id, name)
);

-- `company/<id>/...` → {company, <id>, ...}; same contract as storage.foldername.
create or replace function object_storage.foldername(name text) returns text[]
  language sql immutable parallel safe
  set search_path = ''
  as $$ select (string_to_array(name, '/'))[1:array_length(string_to_array(name, '/'), 1) - 1] $$;

create or replace function object_storage.filename(name text) returns text
  language sql immutable parallel safe
  set search_path = ''
  as $$ select (string_to_array(name, '/'))[array_length(string_to_array(name, '/'), 1)] $$;

create or replace function object_storage.extension(name text) returns text
  language sql immutable parallel safe
  set search_path = ''
  as $$ select (string_to_array(object_storage.filename(name), '.'))[array_length(string_to_array(object_storage.filename(name), '.'), 1)] $$;

alter table object_storage.buckets owner to crm_owner;
alter table object_storage.objects owner to crm_owner;
alter function object_storage.foldername(text) owner to crm_owner;
alter function object_storage.filename(text) owner to crm_owner;
alter function object_storage.extension(text) owner to crm_owner;
alter table object_storage.objects enable row level security;
revoke all on schema object_storage from public;
grant usage on schema object_storage to crm_anonymous, crm_user, crm_platform;
grant select on object_storage.buckets to crm_anonymous, crm_user;
grant select, insert, update, delete on object_storage.objects to crm_anonymous, crm_user;
grant all on all tables in schema object_storage to crm_platform;
grant execute on all functions in schema object_storage to crm_anonymous, crm_user, crm_platform;
