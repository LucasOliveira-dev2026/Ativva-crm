-- Fortis tenancy overlay, applied as crm_owner AFTER database/baseline/baseline.sql.
--
-- The CRM keeps its membership-based RLS (ADR-0002). What changes is the
-- context: `fn_user_org_ids()`, the helper behind the organization policies,
-- narrows its result to the ACTIVE company when the data layer set
-- `app.current_company_id` (the same GUC ATIVVA uses). Without it the result is
-- exactly upstream's — the caller's memberships plus the organization of an
-- active support session — never more.
--
-- The inner query is upstream's latest body, verbatim after the neutral
-- rewrite. scripts/fortis/baseline/build.mjs pins its hash below and fails the
-- build when upstream changes the function, so a behavior change (like the
-- support-session union) is ported here instead of being silently dropped.
-- upstream-body-sha256: 598e16304c80f1d348dc2d25e72b74954da39b15dca42c61f49c9f7d2628b0f5
create or replace function public.fn_user_org_ids()
returns setof uuid language sql stable security definer set search_path = public as $f$
 select org from (
 select organization_id from public.user_organizations where user_id=fortis.current_user_id() and revoked_at is null
 union select (s->>'organization_id')::uuid from (select public.fn_support_context() s) c where s->>'status'='active'
 ) as upstream(org)
 where fortis.current_company_id() is null or org = fortis.current_company_id();
$f$;

comment on function public.fn_user_org_ids() is
  'Fortis (ADR-0002): organizações do usuário (app.current_user_id) e da sessão de suporte ativa, restritas à empresa ativa (app.current_company_id) quando definida.';
