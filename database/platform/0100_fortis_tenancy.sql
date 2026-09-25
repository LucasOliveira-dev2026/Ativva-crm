-- Fortis tenancy overlay, applied as crm_owner AFTER database/baseline/baseline.sql.
--
-- The CRM keeps its membership-based RLS (ADR-0002). What changes is the
-- context: `fn_user_org_ids()`, the helper behind the organization policies,
-- narrows the caller's memberships to the ACTIVE company when the data layer
-- set `app.current_company_id` (the same GUC ATIVVA uses). Without it the
-- result is the caller's own memberships, exactly as upstream — never more.
--
-- Re-applied on every build, so a newer upstream definition of the function
-- in the baseline cannot silently drop the narrowing; guarded by
-- tests/fortis/tenancy-overlay.test.ts.
create or replace function public.fn_user_org_ids() returns setof uuid
  language sql stable security definer
  set search_path to 'public'
as $$
  select organization_id
    from public.user_organizations
   where user_id = fortis.current_user_id()
     and revoked_at is null
     and (fortis.current_company_id() is null
          or organization_id = fortis.current_company_id());
$$;

comment on function public.fn_user_org_ids() is
  'Fortis (ADR-0002): organizações do usuário (app.current_user_id), restritas à empresa ativa (app.current_company_id) quando definida.';
