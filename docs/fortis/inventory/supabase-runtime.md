# Supabase — RUNTIME (863 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-90b107 | `app/(public)/layout.tsx` | serverClient:4 auth:49 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-9b8062 | `app/(public)/login/forgot/page.tsx` | serverClient:4 auth:14 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-087b97 | `app/(public)/login/mfa/page.tsx` | serverClient:3 auth:19,22 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-bd29f8 | `app/(public)/login/page.tsx` | serverClient:6 auth:25 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-5d5cb6 | `app/(public)/login/recovery/page.tsx` | serverClient:4 auth:19 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-38d1eb | `app/(public)/login/reset/page.tsx` | serverClient:2 auth:12 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-edfccd | `app/(public)/signup/page.tsx` | serverClient:9 auth:50 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-709edb | `app/403/page.tsx` | serverClient:4 auth:15 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-f14490 | `app/500/page.tsx` | serverClient:4 auth:27 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-997b44 | `app/503/page.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-55a9e6 | `app/account-suspended/page.tsx` | serverClient:5 auth:30 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-c7908d | `app/acesso-revogado/page.tsx` | serverClient:3 auth:32 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-4e2783 | `app/actions/admin/salvarConfiguracaoDaInstalacao.ts` | adminClient:34,49 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a786ef | `app/actions/auth/confirmMfaEnroll.ts` | serverClient:6 adminClient:7,70 auth:35,42,49 db:68,71 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_recovery_codes | PENDING |
| SB-8db7c6 | `app/actions/auth/enrollMfa.ts` | serverClient:7 auth:25,29,32,56 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-904833 | `app/actions/auth/politicaDeMfa.ts` | serverClient:22 adminClient:23,47,99 auth:144,147 db:49,62,104,115 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:platform_admins | PENDING |
| SB-1c7edf | `app/actions/auth/recoverOrganization.ts` | serverClient:7 adminClient:38 auth:76 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-4e8da3 | `app/actions/auth/requestPasswordReset.ts` | serverClient:5 auth:49 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-2ef467 | `app/actions/auth/signInWithGoogle.ts` | serverClient:6,21 auth:55 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-5f23a6 | `app/actions/auth/signInWithPassword.ts` | serverClient:8 auth:68,91 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-8ba354 | `app/actions/auth/signOut.ts` | serverClient:4 auth:11,14 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-d004d0 | `app/actions/auth/signUp.ts` | serverClient:5 cookie:31 auth:137 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-0fa032 | `app/actions/auth/updatePassword.ts` | serverClient:6 auth:42,53,56,59,63,71 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-2dbc31 | `app/actions/auth/useRecoveryCode.ts` | adminClient:9,52,57 env:52 auth:61,102,106 db:78,93 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_recovery_codes, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-bb7189 | `app/actions/auth/verifyMfa.ts` | serverClient:8 supabaseHelper:10 auth:38,42,63,70 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-c5808b | `app/actions/integrations/disconnectNuvemshop.ts` | adminClient:15,33 db:35,45 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:tenant_integrations | PENDING |
| SB-e109e3 | `app/actions/onboarding/_shared.ts` | adminClient:9,56,75 db:58,81 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-78a715 | `app/actions/onboarding/chaveDaIa.ts` | adminClient:29,87 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-cfacd8 | `app/actions/onboarding/createDefaultAgent.ts` | adminClient:12,132 db:160,174,251 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:event_log | PENDING |
| SB-e84dc2 | `app/actions/onboarding/finishOnboarding.ts` | adminClient:11,27 db:30,39,45 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:event_log, t:organizations | PENDING |
| SB-85aa33 | `app/actions/onboarding/montarQuadro.ts` | adminClient:15,43,90,129,214 db:47,61,94,103,222 rpc:232 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, t:crm_pipelines, t:crm_stages +1 | PENDING |
| SB-2965c4 | `app/actions/registration/decide.ts` | adminClient:10,42 auth:55 db:44,80 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:registration_requests | PENDING |
| SB-184b27 | `app/actions/settings/apagarDadosOperacionaisDaOrganizacao.ts` | adminClient:15,74 db:77 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-457df7 | `app/actions/settings/atualizarInterfaceDaEmpresa.ts` | adminClient:7,60 db:67 rpc:91 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations, rpc:emit_event | PENDING |
| SB-701413 | `app/actions/settings/definirAgendaDosColegas.ts` | serverClient:34 db:14 rpc:76 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations, rpc:fn_definir_colegas_podem_mexer_na_agenda | PENDING |
| SB-b1a8d5 | `app/actions/settings/definirClientePelaAgenda.ts` | serverClient:32 db:16 rpc:86 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations, rpc:fn_definir_cliente_pela_agenda | PENDING |
| SB-7b4b9b | `app/actions/settings/regenerateRecoveryCodes.ts` | serverClient:5 adminClient:6,43 auth:27,31 db:44,47,51,54 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_recovery_codes | PENDING |
| SB-075093 | `app/actions/settings/signOutEverywhere.ts` | serverClient:5 auth:13,17 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-34da3c | `app/actions/settings/trocarIdioma.ts` | serverClient:9 auth:39 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-ec97da | `app/actions/settings/updateAdInsightsConnection.ts` | adminClient:11,110,208 db:113,158,210 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ad_insights_connections | PENDING |
| SB-f9789e | `app/actions/settings/updateAdPlatformConnection.ts` | adminClient:11,104 db:127 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ad_platform_connections | PENDING |
| SB-852ab4 | `app/actions/settings/updateBranding.ts` | adminClient:10,38,54,109 db:110 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_branding | PENDING |
| SB-7a5e31 | `app/actions/settings/updateCapturaDeUtm.ts` | adminClient:11,92 db:94 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:meta_ads_landing_pages | PENDING |
| SB-c24f50 | `app/actions/settings/updateGoogleAdsConnection.ts` | adminClient:11,74 db:84 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ad_platform_connections | PENDING |
| SB-30ea64 | `app/actions/settings/updateGoogleOAuth.ts` | adminClient:9,75 db:94 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_google_oauth | PENDING |
| SB-87d382 | `app/actions/settings/updateMarcaDaOrganizacao.ts` | adminClient:15,69,145 rpc:145 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:fn_definir_marca_da_organizacao | PENDING |
| SB-06acf9 | `app/actions/settings/updateMetaApp.ts` | adminClient:11,105,161,219,234,274 db:107,162 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_meta_app | PENDING |
| SB-8d9034 | `app/actions/settings/updateModuloDaInstalacao.ts` | adminClient:15,52 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-deae70 | `app/actions/settings/updatePipelineConfig.ts` | serverClient:7 db:46,66 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-900bc8 | `app/actions/settings/updateProfile.ts` | serverClient:6 auth:34 rpc:68 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | rpc:emit_event | PENDING |
| SB-118048 | `app/actions/settings/updateTenant.ts` | adminClient:7,52 db:69 rpc:100 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations, rpc:emit_event | PENDING |
| SB-a4de2c | `app/actions/shell/setActiveOrg.ts` | serverClient:5 supabaseHelper:6 db:17 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-6ec937 | `app/actions/shell/toggleSidebar.ts` | supabaseHelper:4 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-d8751f | `app/actions/team/acceptInvite.ts` | serverClient:18 auth:36 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-f5d789 | `app/admin/(protected)/extensoes/page.tsx` | adminClient:8,38,52 db:54,60,64 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:extension_catalogs, t:extension_installations, t:organization_extensions | PENDING |
| SB-ed45eb | `app/admin/(protected)/google/page.tsx` | adminClient:7,56 db:57 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_google_oauth | PENDING |
| SB-d78dee | `app/admin/(protected)/meta/page.tsx` | adminClient:7,50 db:51 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_meta_app | PENDING |
| SB-d58a0c | `app/admin/(protected)/sistema/page.tsx` | adminClient:6,48 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-049ed5 | `app/admin/(protected)/tenants/[id]/layout.tsx` | adminClient:3,65 db:68 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-ff56c7 | `app/admin/forbidden/page.tsx` | serverClient:4 auth:18 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-9e430c | `app/api/mcp/route.ts` | adminClient:19,53 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-af59da | `app/api/v1/admin/audit/[entryId]/route.ts` | adminClient:4,37 auth:75 db:41 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:api_audit_log | PENDING |
| SB-76f3f1 | `app/api/v1/admin/audit/route.ts` | adminClient:4,69 db:81 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_audit_log | PENDING |
| SB-b6b058 | `app/api/v1/admin/dashboard/kpis/route.ts` | adminClient:4,45 db:55,60,66,73,101,118 rpc:81 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_budgets, t:channel_sessions, t:conversations, t:lgpd_requests +2 | PENDING |
| SB-8ef004 | `app/api/v1/admin/impersonate/end/route.ts` | serverClient:4 adminClient:5,20 supabaseHelper:6 auth:15,17 rpc:20 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | rpc:fn_end_support | PENDING |
| SB-041c5b | `app/api/v1/admin/inbox/conversations/[id]/route.ts` | adminClient:3,26 db:30,57,65,73 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:conversations, t:messages, t:organizations | PENDING |
| SB-05e75e | `app/api/v1/admin/inbox/conversations/route.ts` | adminClient:4,68 db:75 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations | PENDING |
| SB-85f2e7 | `app/api/v1/admin/incidents/[id]/resolve/route.ts` | adminClient:15,51 db:54,70,104 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:event_log, t:incidents | PENDING |
| SB-7f6e9d | `app/api/v1/admin/incidents/[id]/route.ts` | adminClient:11,29 db:32,45 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_audit_log, t:incidents | PENDING |
| SB-6b4058 | `app/api/v1/admin/incidents/route.ts` | adminClient:13,75 db:79 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:incidents | PENDING |
| SB-9d63d1 | `app/api/v1/admin/lgpd/requests/[id]/route.ts` | adminClient:13,32 db:36,52,59 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_audit_log, t:lgpd_requests, t:organizations | PENDING |
| SB-3c2ecf | `app/api/v1/admin/lgpd/requests/route.ts` | adminClient:13,102 db:106 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:lgpd_requests | PENDING |
| SB-1406af | `app/api/v1/admin/platform-admins/route.ts` | adminClient:3,30 auth:93 db:40 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:platform_admins | PENDING |
| SB-45279a | `app/api/v1/admin/tenants/[id]/agents/route.ts` | adminClient:30,85 db:91,105,128 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, t:organizations | PENDING |
| SB-9dc1ad | `app/api/v1/admin/tenants/[id]/health/route.ts` | adminClient:3,185 db:191,199,209,221 rpc:218 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_budgets, t:api_audit_log, t:channel_sessions, t:tenant_integrations +1 | PENDING |
| SB-100515 | `app/api/v1/admin/tenants/[id]/impersonate/route.ts` | serverClient:7 adminClient:8,34 supabaseHelper:11 auth:31 db:40 rpc:35 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:platform_support_sessions, rpc:fn_start_support | PENDING |
| SB-fc11a6 | `app/api/v1/admin/tenants/[id]/reactivate/route.ts` | adminClient:15,52 db:56,77,110 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:event_log, t:organizations | PENDING |
| SB-268531 | `app/api/v1/admin/tenants/[id]/route.ts` | adminClient:3,26 db:30,65,69,73,77,81 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:conversations, t:crm_leads, t:lgpd_requests +6 | PENDING |
| SB-d4effa | `app/api/v1/admin/tenants/[id]/suspend/route.ts` | adminClient:15,52 db:56,72,105 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:event_log, t:organizations | PENDING |
| SB-647822 | `app/api/v1/admin/tenants/route.ts` | adminClient:8,68,193 db:72 rpc:195 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations, rpc:fn_create_tenant_with_owner | PENDING |
| SB-ca8075 | `app/api/v1/admin/usage/route.ts` | adminClient:4,92 db:99,126,142,168,195,247 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:conversations, t:llm_calls, t:messages +1 | PENDING |
| SB-106d4d | `app/api/v1/admin/users/[id]/route.ts` | adminClient:3,26 auth:30 db:40,81 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:api_audit_log, t:user_organizations | PENDING |
| SB-cbaaca | `app/api/v1/admin/users/route.ts` | adminClient:4,70 auth:186 db:93 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations | PENDING |
| SB-fe1867 | `app/api/v1/ads/meta/accounts/route.ts` | adminClient:24,39 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-40dde2 | `app/api/v1/ads/meta/campaigns/route.ts` | adminClient:27,88 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8a00ce | `app/api/v1/agenda/agendamentos/[id]/google/meet/_action.ts` | serverClient:5 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d0c929 | `app/api/v1/agenda/agendamentos/[id]/google/resolver/route.ts` | serverClient:5 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-3e618d | `app/api/v1/agenda/agendamentos/[id]/route.ts` | serverClient:7 adminClient:8,35,44,74 db:23,36,44,49,65,69 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:appointment_recovery_receipts, t:calendar_appointments, t:conversations, t:followup_enrollments +2 | PENDING |
| SB-33e2c0 | `app/api/v1/agenda/agendamentos/_handler.ts` | sdkImport:50 db:244,316,344,466,657,675 rpc:159,952,1077 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:calendar_event_types, t:contacts, t:crm_lead_links +5 | PENDING |
| SB-599ae6 | `app/api/v1/agenda/agendamentos/route.ts` | serverClient:30 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a35de5 | `app/api/v1/agenda/configuracao/route.ts` | serverClient:4 db:16 rpc:37 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations, rpc:fn_agenda_settings | PENDING |
| SB-e3573e | `app/api/v1/agenda/enderecos/route.ts` | serverClient:9 db:32,34,39,82 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:calendar_event_types, t:calendar_locations | PENDING |
| SB-2140dc | `app/api/v1/agenda/excecoes/route.ts` | serverClient:45 db:77,111,176 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_availability_exceptions | PENDING |
| SB-7cf480 | `app/api/v1/agenda/google/calendarios/atualizar/route.ts` | adminClient:5,18 serverClient:6 db:15 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_connections | PENDING |
| SB-ed9072 | `app/api/v1/agenda/google/calendarios/route.ts` | serverClient:5 db:18,28 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_connection_calendars, t:calendar_connections | PENDING |
| SB-f13f5b | `app/api/v1/agenda/google/callback/route.ts` | adminClient:51,226 supabaseHelper:56 db:227,325,357,409 rpc:12 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_connection_calendars, t:calendar_connections, t:calendar_oauth_nonces, rpc:fn_encrypt_oauth | PENDING |
| SB-98810d | `app/api/v1/agenda/google/connect/route.ts` | supabaseHelper:40 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-ca9054 | `app/api/v1/agenda/google/desconectar/route.ts` | adminClient:53,87 db:92,114,121,128 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_connection_calendars, t:calendar_connections, t:calendar_external_events | PENDING |
| SB-375927 | `app/api/v1/agenda/horarios-livres/route.ts` | serverClient:47 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-98a675 | `app/api/v1/agenda/pessoas/route.ts` | adminClient:21,41,62 serverClient:22 auth:65 db:43 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations | PENDING |
| SB-0991b8 | `app/api/v1/agenda/tipos/reativar/route.ts` | adminClient:49,68 db:70 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_event_types | PENDING |
| SB-8fe5f5 | `app/api/v1/agenda/tipos/route.ts` | adminClient:42,235,291,342,377 db:293,344,379 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_event_types | PENDING |
| SB-a40101 | `app/api/v1/agenda/vinculos/route.ts` | serverClient:4 db:17,39 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations | PENDING |
| SB-ab3e17 | `app/api/v1/ai/agents/[id]/duplicate/route.ts` | adminClient:17,40 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8ad948 | `app/api/v1/ai/agents/[id]/pause/route.ts` | adminClient:15,37 db:39,53 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents | PENDING |
| SB-1cbbc4 | `app/api/v1/ai/agents/[id]/proposals/[pid]/apply/route.ts` | adminClient:13,46 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9ae8be | `app/api/v1/ai/agents/[id]/proposals/route.ts` | adminClient:11,47 db:50,60 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:flywheel_distiller_proposals | PENDING |
| SB-3cc647 | `app/api/v1/ai/agents/[id]/publish/route.ts` | adminClient:20,64 db:69,106 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:event_log | PENDING |
| SB-8cce9a | `app/api/v1/ai/agents/[id]/reconcile/route.ts` | adminClient:7,31 db:33,45 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents | PENDING |
| SB-825b88 | `app/api/v1/ai/agents/[id]/route.ts` | serverClient:15 adminClient:16,121,232 db:52,125,198,235,264 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents | PENDING |
| SB-bf4c35 | `app/api/v1/ai/agents/[id]/runs/route.ts` | serverClient:48 db:176 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:llm_calls | PENDING |
| SB-b4f961 | `app/api/v1/ai/agents/[id]/tool-usage/route.ts` | adminClient:28,69 db:74,86,92 rpc:104 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, rpc:fn_agent_tool_usage | PENDING |
| SB-6cf3e9 | `app/api/v1/ai/agents/[id]/versions/[vid]/route.ts` | serverClient:14 adminClient:15,87 db:42,89,136 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions | PENDING |
| SB-30b9f4 | `app/api/v1/ai/agents/[id]/versions/[vid]/test/route.ts` | adminClient:34,60,111 db:67,114,128 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_runs, t:ai_agent_versions | PENDING |
| SB-2179e6 | `app/api/v1/ai/agents/[id]/versions/route.ts` | serverClient:16 adminClient:17,36,102 db:38,58,107,144 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents | PENDING |
| SB-c0b367 | `app/api/v1/ai/agents/assignable/route.ts` | serverClient:43 db:67,94 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents | PENDING |
| SB-bb33cf | `app/api/v1/ai/agents/route.ts` | serverClient:21 adminClient:22,109 db:68,126,133,139,170 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents | PENDING |
| SB-6baa5d | `app/api/v1/ai/automatico-ativo/route.ts` | serverClient:35 db:49 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents | PENDING |
| SB-64ecd9 | `app/api/v1/ai/budget/route.ts` | adminClient:44,124,318 db:127,226,238,325 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:ai_budgets | PENDING |
| SB-c749fc | `app/api/v1/ai/cases/[id]/chat/route.ts` | adminClient:74,424 serverClient:75 env:217 db:196 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_case_chat_messages, SUPABASE_DB_URL | PENDING |
| SB-a3a058 | `app/api/v1/ai/cases/[id]/reply/route.ts` | adminClient:44,147 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1b6633 | `app/api/v1/ai/cases/[id]/route.ts` | adminClient:20,47 serverClient:21 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c67872 | `app/api/v1/ai/cases/alerta/route.ts` | adminClient:55,132,193,219 serverClient:56 rpc:170 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:fn_definir_aviso_de_caso | PENDING |
| SB-fde099 | `app/api/v1/ai/cases/alerta/teste/route.ts` | adminClient:50,112 serverClient:51 db:93 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:config_aviso_de_caso | PENDING |
| SB-881ff0 | `app/api/v1/ai/cases/route.ts` | adminClient:3,24,57 serverClient:25 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1b56c2 | `app/api/v1/ai/credentials/[id]/revalidate/route.ts` | adminClient:19,42 db:47,101 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials | PENDING |
| SB-5e22d8 | `app/api/v1/ai/credentials/[id]/route.ts` | adminClient:50,160,228,338 db:165,205,231,248,281,344 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_provider_credentials, t:organizations | PENDING |
| SB-ca1b10 | `app/api/v1/ai/credentials/route.ts` | adminClient:21,132,156 serverClient:22 db:57,157 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-4d2f15 | `app/api/v1/ai/evolution/route.ts` | serverClient:24 db:203 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_stages | PENDING |
| SB-979806 | `app/api/v1/ai/followup-flows/[id]/disable/route.ts` | serverClient:12 db:38,51 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers | PENDING |
| SB-90b6d6 | `app/api/v1/ai/followup-flows/[id]/duplicate/route.ts` | serverClient:19 db:50,59,76 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers | PENDING |
| SB-41a3bb | `app/api/v1/ai/followup-flows/[id]/publish/route.ts` | adminClient:7,20,50 db:52,127,176,187,226 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_stages, t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-cfb04e | `app/api/v1/ai/followup-flows/[id]/rollback/route.ts` | serverClient:21 db:63,72,82 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-05ac8f | `app/api/v1/ai/followup-flows/[id]/route.ts` | serverClient:18 db:45,59,118,129,143,199 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_enrollments, t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-82c956 | `app/api/v1/ai/followup-flows/from-model/route.ts` | serverClient:30 db:84,122 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_stages, t:followup_flow_pointers | PENDING |
| SB-176c77 | `app/api/v1/ai/followup-flows/route.ts` | serverClient:13 adminClient:14,79 db:39,86 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:followup_flow_pointers | PENDING |
| SB-06f45b | `app/api/v1/ai/followups/enrollments/[id]/cancel/route.ts` | serverClient:19 db:51,64,83 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_enrollment_events, t:followup_enrollments | PENDING |
| SB-968274 | `app/api/v1/ai/followups/enrollments/[id]/pause/route.ts` | adminClient:19,43 serverClient:20 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6785fb | `app/api/v1/ai/followups/enrollments/[id]/resume/route.ts` | adminClient:20,44 serverClient:21 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-424796 | `app/api/v1/ai/followups/enrollments/[id]/route.ts` | serverClient:37 adminClient:103,120,121 auth:127 db:150,168 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:followup_enrollment_events, t:followup_enrollments | PENDING |
| SB-6cd4ce | `app/api/v1/ai/followups/enrollments/[id]/skip/route.ts` | adminClient:21,64 serverClient:22 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-da4084 | `app/api/v1/ai/followups/enrollments/[id]/snooze/route.ts` | adminClient:19,60 serverClient:20 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-aab8d2 | `app/api/v1/ai/followups/enrollments/route.ts` | adminClient:13,82 serverClient:14 db:46 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:followup_enrollments | PENDING |
| SB-7c1546 | `app/api/v1/ai/followups/promises/[id]/cancel/route.ts` | adminClient:26,55 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0643be | `app/api/v1/ai/followups/queue/route.ts` | serverClient:30 db:174,190,215 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:cron_jobs, t:followup_enrollments | PENDING |
| SB-da81c3 | `app/api/v1/ai/guardrail-layers/route.ts` | serverClient:36 db:64,109 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_guardrail_layers | PENDING |
| SB-739b55 | `app/api/v1/ai/inbox/[id]/route.ts` | adminClient:14,53 db:55 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items | PENDING |
| SB-5b0265 | `app/api/v1/ai/inbox/resolve-all/route.ts` | adminClient:37,60 db:62 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items | PENDING |
| SB-95c6b5 | `app/api/v1/ai/inbox/route.ts` | adminClient:13,43 serverClient:14 db:45,59 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items | PENDING |
| SB-af9fa4 | `app/api/v1/ai/jev/route.ts` | adminClient:35,310 serverClient:36 db:174,191,193,203,219,312 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials, t:llm_calls, t:messages, t:organizations | PENDING |
| SB-1df9b3 | `app/api/v1/ai/knowledge/chave/route.ts` | serverClient:24 db:43 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-c28692 | `app/api/v1/ai/knowledge/reindex-all/route.ts` | adminClient:26,75 serverClient:27 db:51,79 rpc:92 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_knowledge_sources, rpc:emit_event | PENDING |
| SB-9f8512 | `app/api/v1/ai/knowledge/sources/[id]/reindex/route.ts` | serverClient:20 adminClient:21,86 db:70,91 rpc:101 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_knowledge_sources, rpc:emit_event | PENDING |
| SB-a8d617 | `app/api/v1/ai/knowledge/sources/[id]/route.ts` | adminClient:15,158,280 serverClient:16 db:69,88,136,162,189,210 rpc:223 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_faq_items, t:ai_knowledge_sources, rpc:emit_event | PENDING |
| SB-90b3bf | `app/api/v1/ai/knowledge/sources/[id]/trechos/route.ts` | serverClient:21 db:44,66 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_chunks, t:ai_knowledge_sources | PENDING |
| SB-9d8479 | `app/api/v1/ai/knowledge/sources/route.ts` | serverClient:21 adminClient:22,214 storage:228 db:88,165,242,286,291 rpc:298 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:ai_agents, t:ai_faq_items, t:ai_knowledge_sources, rpc:emit_event | PENDING |
| SB-b18092 | `app/api/v1/ai/knowledge/sources/upload/route.ts` | serverClient:32 adminClient:33,138 storage:157,171,204 db:96,182 rpc:219 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:ai_agents, t:ai_knowledge_sources, rpc:emit_event | PENDING |
| SB-7a5205 | `app/api/v1/ai/memory/entries/[id]/route.ts` | adminClient:14,48 db:50 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:org_memory_entries | PENDING |
| SB-f4cc4d | `app/api/v1/ai/memory/entries/route.ts` | adminClient:14,43 db:45 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:org_memory_entries | PENDING |
| SB-bbb239 | `app/api/v1/ai/memory/route.ts` | adminClient:18,33,106 db:36,50,66,75 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:org_memory_entries, t:org_memory_pointers, t:org_memory_versions | PENDING |
| SB-6962e3 | `app/api/v1/ai/memory/versions/[id]/route.ts` | adminClient:10,31 db:33 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:org_memory_versions | PENDING |
| SB-657d32 | `app/api/v1/ai/operator-metrics/route.ts` | serverClient:34 db:75,96 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:event_log | PENDING |
| SB-c84ed7 | `app/api/v1/ai/pacing/route.ts` | adminClient:17,40,54,134 db:43,57,67,136,155,183 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_knobs, t:channel_sessions, t:organizations | PENDING |
| SB-b3238b | `app/api/v1/ai/providers/[provider]/models/route.ts` | serverClient:12 db:45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_models | PENDING |
| SB-893d9e | `app/api/v1/ai/providers/route.ts` | adminClient:34,455 serverClient:35 db:61,65,70,77,79,255 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:ai_models, t:ai_provider_credentials, t:ai_purpose_bindings +1 | PENDING |
| SB-c7d6c9 | `app/api/v1/ai/replies/[id]/route.ts` | serverClient:6 rpc:27 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_reply_action | PENDING |
| SB-3f17da | `app/api/v1/ai/routers/[id]/members/route.ts` | adminClient:18,80 env:74 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_DB_URL | PENDING |
| SB-508f8b | `app/api/v1/ai/routers/[id]/route.ts` | adminClient:17,52,115,187 db:55,68,118,144,190,203 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_router_members, t:ai_routers | PENDING |
| SB-d43e59 | `app/api/v1/ai/routers/[id]/test/route.ts` | adminClient:23,72 db:74,119 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:ai_routers | PENDING |
| SB-ba2390 | `app/api/v1/ai/routers/route.ts` | adminClient:19,43,102 db:46,55,115,133 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_router_members, t:ai_routers, t:channel_sessions | PENDING |
| SB-069fe9 | `app/api/v1/ai/runs/route.ts` | serverClient:21 db:105 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:llm_calls | PENDING |
| SB-d9ac08 | `app/api/v1/ai/skills/[name]/install/route.ts` | adminClient:18,48 db:54 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:skill_pointers | PENDING |
| SB-1df465 | `app/api/v1/ai/skills/[name]/restore/route.ts` | adminClient:22,61 db:63 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:skill_versions | PENDING |
| SB-add7b4 | `app/api/v1/ai/skills/[name]/route.ts` | adminClient:35,69,146,245 db:71,84,148,161,247 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:skill_pointers, t:skill_versions | PENDING |
| SB-d7e564 | `app/api/v1/ai/skills/[name]/versions/route.ts` | adminClient:17,41 db:43,50 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:skill_pointers, t:skill_versions | PENDING |
| SB-b74342 | `app/api/v1/ai/skills/import/route.ts` | adminClient:19,65 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3dc3e0 | `app/api/v1/ai/skills/route.ts` | adminClient:21,46 db:49,57,71 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:skill_pointers, t:skill_versions | PENDING |
| SB-a1fcaa | `app/api/v1/ai/style-adjustments/route.ts` | serverClient:15 db:34,74 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_guardrail_layers | PENDING |
| SB-e2b3ff | `app/api/v1/ai/usage/route.ts` | serverClient:19 db:96,131,150 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:event_log, t:llm_calls, t:messages | PENDING |
| SB-a7bb37 | `app/api/v1/anuncios/google/[org]/route.ts` | adminClient:49,82 db:85 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-44fc52 | `app/api/v1/anuncios/meta/[org]/route.ts` | adminClient:54,84 db:87 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-63cebc | `app/api/v1/attendants/availability/[user_id]/route.ts` | serverClient:29 db:82,114 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:attendant_availability, t:user_organizations | PENDING |
| SB-1bf4ba | `app/api/v1/attendants/availability/route.ts` | adminClient:30,82 serverClient:31 auth:103 db:60 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:attendant_availability | PENDING |
| SB-cc62a6 | `app/api/v1/attendants/presence/route.ts` | serverClient:71 db:97,105 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:attendant_availability | PENDING |
| SB-cee934 | `app/api/v1/audit/export/route.ts` | serverClient:11 db:60 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:api_audit_log | PENDING |
| SB-8c2667 | `app/api/v1/audit/route.ts` | serverClient:13 db:42 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:api_audit_log | PENDING |
| SB-367d56 | `app/api/v1/auth/realtime-token/route.ts` | serverClient:29 auth:43,52 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-786d00 | `app/api/v1/auth/support/route.ts` | serverClient:1 auth:6 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-9bc9df | `app/api/v1/automation-rules/[id]/route.ts` | serverClient:14 adminClient:15,71 db:52,84,119,127 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:automation_rules | PENDING |
| SB-960fa7 | `app/api/v1/automation-rules/[id]/runs/route.ts` | serverClient:9 db:32 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rule_runs | PENDING |
| SB-a6d89b | `app/api/v1/automation-rules/route.ts` | serverClient:14 adminClient:15,62 db:29,74 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:automation_rules | PENDING |
| SB-58cc32 | `app/api/v1/automation-rules/runs/[runId]/resend/route.ts` | serverClient:14 adminClient:15,110,112,131,132 db:47,60,69,134 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:automation_rule_runs, t:automation_rules, t:event_log | PENDING |
| SB-0efaa5 | `app/api/v1/automation-rules/runs/route.ts` | serverClient:10 db:28 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rule_runs | PENDING |
| SB-70f671 | `app/api/v1/calls/route.ts` | serverClient:34 db:86,157,180,222 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:voice_calls, t:voip_trunk_settings | PENDING |
| SB-eab390 | `app/api/v1/campaign-suppressions/[id]/route.ts` | adminClient:17,34 db:36 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:campaign_suppressions | PENDING |
| SB-8bf378 | `app/api/v1/campaign-suppressions/route.ts` | adminClient:27,75 serverClient:28 db:41,77 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:campaign_suppressions | PENDING |
| SB-731e62 | `app/api/v1/campaign-templates/[id]/route.ts` | adminClient:19,47,81 db:49,83 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:campaign_templates | PENDING |
| SB-51c75e | `app/api/v1/campaign-templates/route.ts` | adminClient:18,59 serverClient:19 db:32,61 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:campaign_templates | PENDING |
| SB-7fd978 | `app/api/v1/campaigns/[id]/[acao]/route.ts` | adminClient:40,81 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8557cf | `app/api/v1/campaigns/[id]/metrics/route.ts` | serverClient:23 db:42,64 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients, t:campaigns | PENDING |
| SB-3c980d | `app/api/v1/campaigns/[id]/recipients/route.ts` | serverClient:18 db:45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients | PENDING |
| SB-0e32e1 | `app/api/v1/campaigns/[id]/route.ts` | adminClient:22,55,84 serverClient:23 db:46,170,189 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:campaigns, t:channel_sessions | PENDING |
| SB-d1587e | `app/api/v1/campaigns/preview/route.ts` | adminClient:21,50 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e1362d | `app/api/v1/campaigns/route.ts` | adminClient:29,113 serverClient:30 db:57,117,132 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:campaigns, t:channel_sessions | PENDING |
| SB-e8227f | `app/api/v1/channel-sessions/[id]/ai-access/route.ts` | adminClient:9,24,44 db:24 rpc:44 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, rpc:fn_configurar_pre_go_live_canal | PENDING |
| SB-9bc647 | `app/api/v1/channel-sessions/[id]/pairing-code/route.ts` | serverClient:6 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-79803a | `app/api/v1/channel-sessions/[id]/qr/route.ts` | serverClient:28 db:48 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-2ef569 | `app/api/v1/channel-sessions/[id]/reconnect/route.ts` | adminClient:40,154,168 serverClient:46 db:86,176,193 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-b5df51 | `app/api/v1/channel-sessions/[id]/route.ts` | adminClient:34,111,363,399,482 serverClient:35 db:167,222,326,368,454,461 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-41972b | `app/api/v1/channel-sessions/route.ts` | adminClient:14,109 serverClient:22 db:41 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-498fad | `app/api/v1/channels/graph-partner/route.ts` | adminClient:42,65,115,191 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-39630e | `app/api/v1/channels/graph-partner/templates/route.ts` | adminClient:55,103,147,239 db:113,149,245 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:meta_templates | PENDING |
| SB-a79bf3 | `app/api/v1/channels/official/route.ts` | adminClient:40,70,124,224 db:74,133,243,308 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-0a7056 | `app/api/v1/channels/official/webhook/route.ts` | adminClient:27,45 db:48 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-ca79b6 | `app/api/v1/channels/partner/route.ts` | adminClient:33,67,114 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e51603 | `app/api/v1/channels/partner/templates/media/route.ts` | adminClient:34,104 storage:106,114,116 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-b22b44 | `app/api/v1/channels/partner/templates/route.ts` | adminClient:54,100,140,228 db:110,142,233 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:meta_templates | PENDING |
| SB-1da6e4 | `app/api/v1/channels/social/route.ts` | adminClient:6,67,116 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-45fcd9 | `app/api/v1/channels/templates/route.ts` | adminClient:26,111,200,262 db:113,264,297 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:meta_templates | PENDING |
| SB-4dc3af | `app/api/v1/contact-tags/route.ts` | serverClient:33 db:50 rpc:19 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, rpc:fn_vocabulario_de_tags | PENDING |
| SB-5ae95e | `app/api/v1/contacts/[id]/avatar/route.ts` | adminClient:21,60 storage:32,77,79 db:64,78 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:contacts | PENDING |
| SB-dd5df5 | `app/api/v1/contacts/[id]/crm-summary/route.ts` | adminClient:29,100 serverClient:36 auth:86 db:91,100,116,124,135,145 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts, t:crm_lead_activities, t:crm_leads, t:demandas +3 | PENDING |
| SB-0dab67 | `app/api/v1/contacts/[id]/hierarquia-do-anuncio/route.ts` | adminClient:20,67 serverClient:21 auth:39 db:45 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts | PENDING |
| SB-e8411a | `app/api/v1/contacts/[id]/proposals/[proposal_id]/route.ts` | serverClient:34 db:80,100 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contact_field_proposals | PENDING |
| SB-c56765 | `app/api/v1/contacts/[id]/proposals/route.ts` | serverClient:16 db:46 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contact_field_proposals | PENDING |
| SB-ceaf8c | `app/api/v1/contacts/[id]/roteiros/route.ts` | adminClient:17,45 serverClient:18 db:51,64 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:followup_enrollments | PENDING |
| SB-a4e213 | `app/api/v1/contacts/[id]/route.ts` | serverClient:19 auth:36 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-486e27 | `app/api/v1/contacts/[id]/timeline/route.ts` | serverClient:26 auth:49 db:72,81,94 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts, t:crm_lead_activities, t:crm_leads | PENDING |
| SB-89ba67 | `app/api/v1/contacts/[id]/unblock/route.ts` | adminClient:10,69 db:73 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts | PENDING |
| SB-a05c3b | `app/api/v1/contacts/_handler.ts` | sdkImport:9 adminClient:11,585,656 db:100,236,290,315,404,491 rpc:326,450,640,657,863 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:conversations, t:messages, t:user_organizations +2 | PENDING |
| SB-97d6c0 | `app/api/v1/contacts/duplicates/route.ts` | serverClient:26 db:56 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-27a1b9 | `app/api/v1/contacts/import/route.ts` | serverClient:40 db:199,212,259 rpc:281 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, rpc:emit_event | PENDING |
| SB-3d17a9 | `app/api/v1/contacts/merge/route.ts` | serverClient:28 rpc:103 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_mesclar_contatos | PENDING |
| SB-8913fe | `app/api/v1/contacts/route.ts` | sdkImport:10 serverClient:26 adminClient:27,97 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b72222 | `app/api/v1/conversation-tags/route.ts` | serverClient:15 db:27 rpc:49 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations, rpc:fn_tags_de_conversa_em_uso | PENDING |
| SB-9c8930 | `app/api/v1/conversations/[id]/claim/route.ts` | serverClient:26 rpc:65,94 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:emit_event, rpc:fn_conversation_assign | PENDING |
| SB-30174a | `app/api/v1/conversations/[id]/close/route.ts` | adminClient:14,49 serverClient:15 db:44 rpc:49 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations, rpc:fn_service_status | PENDING |
| SB-0981a9 | `app/api/v1/conversations/[id]/draft-reply/route.ts` | serverClient:5 db:23 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-359e08 | `app/api/v1/conversations/[id]/mark-read/route.ts` | serverClient:14 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-96d62d | `app/api/v1/conversations/[id]/media/route.ts` | adminClient:16,35,100 storage:101 db:58,102 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:conversations | PENDING |
| SB-db304e | `app/api/v1/conversations/[id]/messages/route.ts` | serverClient:13 auth:31 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-acd54e | `app/api/v1/conversations/[id]/notes/[noteId]/route.ts` | serverClient:13 db:38,51 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversation_notes | PENDING |
| SB-7ea135 | `app/api/v1/conversations/[id]/notes/route.ts` | adminClient:17,122 serverClient:18 auth:132 db:38,46,68,85,124 rpc:138 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:conversation_notes, t:conversations, t:user_organizations, rpc:emit_event | PENDING |
| SB-a4fd96 | `app/api/v1/conversations/[id]/passagens/route.ts` | realtime:25 serverClient:46 db:84,92 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | MÉDIO | t:conversations, t:passagens_de_atendimento | PENDING |
| SB-788860 | `app/api/v1/conversations/[id]/pause-ai/route.ts` | serverClient:41 db:73,129 rpc:103 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, rpc:fn_conversation_assign | PENDING |
| SB-320632 | `app/api/v1/conversations/[id]/reactivate-bot/route.ts` | serverClient:27 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e473c8 | `app/api/v1/conversations/[id]/release/route.ts` | serverClient:20 rpc:44 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_conversation_assign | PENDING |
| SB-2dd296 | `app/api/v1/conversations/[id]/retention/route.ts` | serverClient:16 auth:35 db:48,62,78,84,86 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:before_send_traces, t:channel_knobs, t:conversations, t:messages +1 | PENDING |
| SB-9d56d2 | `app/api/v1/conversations/[id]/route.ts` | serverClient:16 auth:64 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-a12363 | `app/api/v1/conversations/[id]/snooze/route.ts` | serverClient:23 db:58,92 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-965a2f | `app/api/v1/conversations/[id]/transfer/route.ts` | serverClient:21 adminClient:22,64 db:66 rpc:82,116 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:user_organizations, rpc:emit_event, rpc:fn_conversation_assign | PENDING |
| SB-1f1031 | `app/api/v1/conversations/[id]/usable-for-rag/route.ts` | serverClient:21 db:61,85 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-d37f78 | `app/api/v1/conversations/_handler.ts` | adminClient:1,478 sdkImport:7 db:175,317,410,490,491,558 rpc:461,478 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:conversations, rpc:fn_conversation_assign, rpc:fn_service_status | PENDING |
| SB-2f1c6d | `app/api/v1/conversations/counts/route.ts` | serverClient:20 auth:77 db:104 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:conversations | PENDING |
| SB-4c8b98 | `app/api/v1/conversations/open-with-contact/route.ts` | adminClient:16,54 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a6ce36 | `app/api/v1/conversations/route.ts` | serverClient:12 auth:26 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-8e1bee | `app/api/v1/cron/agenda-expira-pendentes/route.ts` | adminClient:54,69 db:76,95,131 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_appointments, t:organizations | PENDING |
| SB-298440 | `app/api/v1/cron/agenda-google-push/route.ts` | adminClient:6,15 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-949bf5 | `app/api/v1/cron/agenda-google-refresh/route.ts` | adminClient:36,73,195,210 db:94,165,201 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_connections | PENDING |
| SB-693f32 | `app/api/v1/cron/agenda-google-sync/route.ts` | adminClient:5,14 db:16,37,51,63,74,90 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_connection_calendars, t:calendar_connections | PENDING |
| SB-87f812 | `app/api/v1/cron/agenda-reminder/route.ts` | adminClient:75,259 db:266,325,345,364,372,417 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_appointments, t:channel_sessions, t:contacts, t:message_templates +1 | PENDING |
| SB-082cb8 | `app/api/v1/cron/campaign-worker/route.ts` | adminClient:25,36 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a8c5d6 | `app/api/v1/cron/canal-mudo-watcher/route.ts` | adminClient:42,75 db:81,101,120,146 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:channel_sessions | PENDING |
| SB-ead667 | `app/api/v1/cron/case-stale-watcher/route.ts` | adminClient:57,111,253,305 db:119,144,157,190,262,310 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_cases, t:agent_inbox_items, t:organizations, t:passagens_de_atendimento | PENDING |
| SB-e67105 | `app/api/v1/cron/channel-health/route.ts` | adminClient:57,81 db:87,149 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-71d93a | `app/api/v1/cron/contact-avatars/route.ts` | adminClient:29,79 storage:205 db:90,123,143,206,221 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:channel_sessions, t:contacts, t:storage_redaction_queue | PENDING |
| SB-f8b9c2 | `app/api/v1/cron/contact-birthdays/route.ts` | adminClient:40,87 db:91,110,139,170 rpc:188 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:automation_rules, t:contacts, t:event_log, t:organizations +1 | PENDING |
| SB-0c150f | `app/api/v1/cron/contact-phones/route.ts` | adminClient:50,80 db:84,108,137 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:conversations | PENDING |
| SB-de85e7 | `app/api/v1/cron/contact-proposals-watcher/route.ts` | adminClient:28,43 db:49 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contact_field_proposals | PENDING |
| SB-f487cc | `app/api/v1/cron/data-retention/route.ts` | adminClient:80,373 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-77873e | `app/api/v1/cron/event-log-drain/route.ts` | adminClient:19,36 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e00967 | `app/api/v1/cron/followup-flow-worker/route.ts` | adminClient:34,47,64 db:48 rpc:71 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:job_queue, rpc:fn_appointment_confirmation_sweep | PENDING |
| SB-26fb8b | `app/api/v1/cron/followup-sem-agente/route.ts` | adminClient:51,110 db:113,164,188,204,225 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-b10efc | `app/api/v1/cron/handoff-devolucao/route.ts` | sdkImport:36 adminClient:47,206 db:72,103,121,142 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:ai_routers, t:conversations, t:organizations | PENDING |
| SB-9ebe4b | `app/api/v1/cron/kb-conversations-batch/route.ts` | adminClient:21,40 db:44 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents | PENDING |
| SB-0dae74 | `app/api/v1/cron/lead-date-field-due/route.ts` | adminClient:79,93 db:97,120,164,209 rpc:228 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:automation_rules, t:crm_leads, t:event_log, t:organizations +1 | PENDING |
| SB-a4c767 | `app/api/v1/cron/lgpd-sla-watcher/route.ts` | adminClient:22,58 db:61 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:lgpd_requests | PENDING |
| SB-2de210 | `app/api/v1/cron/prospecting/route.ts` | adminClient:6,17 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c576ff | `app/api/v1/cron/recover-stuck-messages/route.ts` | adminClient:44,78,217 db:88,112,179 rpc:150 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:messages, rpc:emit_event | PENDING |
| SB-4d9f9f | `app/api/v1/cron/recurring-entries/route.ts` | adminClient:24,54 db:60,83 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:financial_entries, t:recurring_entries | PENDING |
| SB-9a4d6e | `app/api/v1/cron/risk-watcher/route.ts` | adminClient:41,56 db:59 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads | PENDING |
| SB-aca555 | `app/api/v1/cron/snooze-watcher/route.ts` | adminClient:25,48 db:52,84,93 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:conversations | PENDING |
| SB-5cfa4d | `app/api/v1/cron/sync-model-catalog/route.ts` | adminClient:52,72,145 db:78,88,97 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_models | PENDING |
| SB-c2a6d3 | `app/api/v1/cron/webhook-log-retention/route.ts` | adminClient:22,46 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-35ce39 | `app/api/v1/cron/webhook-replay/route.ts` | adminClient:28,40 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-df69f8 | `app/api/v1/demandas/[id]/route.ts` | adminClient:37,86 db:106 rpc:89 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:demandas, rpc:fn_demanda_encerrar | PENDING |
| SB-462cb5 | `app/api/v1/external-db/_falha.ts` | adminClient:23,32 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7750eb | `app/api/v1/external-db/connections/[id]/route.ts` | adminClient:27,124,186 serverClient:28 db:51,126,188 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:external_db_connections | PENDING |
| SB-9c5317 | `app/api/v1/external-db/connections/[id]/schemas/route.ts` | adminClient:21,45 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-aad12f | `app/api/v1/external-db/connections/[id]/tables/[schema]/[tabela]/route.ts` | adminClient:25,67 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c43f71 | `app/api/v1/external-db/connections/[id]/test/route.ts` | adminClient:24,51 db:62 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:external_db_connections | PENDING |
| SB-f61440 | `app/api/v1/external-db/connections/route.ts` | adminClient:29,108 serverClient:30 db:49,110 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:external_db_connections | PENDING |
| SB-964c8e | `app/api/v1/financeiro/catalogo/[tipo]/route.ts` | serverClient:30 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6af810 | `app/api/v1/financeiro/comandas/[id]/estornar/route.ts` | serverClient:28 adminClient:100 rpc:78 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:fn_estornar_comanda | PENDING |
| SB-f7f681 | `app/api/v1/financeiro/comandas/[id]/finalizar/route.ts` | serverClient:26 rpc:82 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_finalizar_comanda | PENDING |
| SB-2a1d80 | `app/api/v1/financeiro/comandas/[id]/itens/[itemId]/route.ts` | serverClient:20 db:38,58 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:sale_items, t:sales | PENDING |
| SB-ef9eab | `app/api/v1/financeiro/comandas/[id]/itens/route.ts` | serverClient:23 db:49,63,80 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:commission_rules, t:sale_items, t:sales | PENDING |
| SB-c3d1a6 | `app/api/v1/financeiro/comandas/[id]/route.ts` | serverClient:23 adminClient:113 db:37,82,107 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:sales | PENDING |
| SB-22711c | `app/api/v1/financeiro/comandas/faturar-lote/route.ts` | serverClient:31 db:62,95,121 rpc:93,146 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:sale_items, t:sales, rpc:fn_finalizar_comanda +1 | PENDING |
| SB-491812 | `app/api/v1/financeiro/comandas/pendentes/route.ts` | serverClient:24 db:48,65 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:sales | PENDING |
| SB-dcb949 | `app/api/v1/financeiro/comandas/route.ts` | serverClient:22 db:40,99,114 rpc:108 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:sales, rpc:fn_proximo_numero_de_comanda | PENDING |
| SB-f14d8a | `app/api/v1/financeiro/fidelidade/route.ts` | serverClient:27 db:69,96 rpc:62 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:loyalty_ledger, rpc:fn_saldo_de_fidelidade | PENDING |
| SB-01fdce | `app/api/v1/financeiro/lancamentos/[id]/route.ts` | serverClient:27 db:55,68,96,119 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:financial_entries | PENDING |
| SB-5fee7b | `app/api/v1/financeiro/lancamentos/route.ts` | serverClient:26 db:57,91 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:financial_entries | PENDING |
| SB-4f1f2d | `app/api/v1/health/route.ts` | env:71,75,259 adminClient:73 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-004236 | `app/api/v1/integrations/nuvemshop/callback/route.ts` | adminClient:16,71 db:107,149 rpc:78,87 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:tenant_integrations, rpc:fn_encrypt_oauth | PENDING |
| SB-025025 | `app/api/v1/lead-captures/route.ts` | serverClient:17 db:54 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_lead_captures | PENDING |
| SB-159ac4 | `app/api/v1/leads/[id]/clone/route.ts` | serverClient:50 db:80,131,145,175,194,227 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_pipelines, t:crm_stages | PENDING |
| SB-a15c95 | `app/api/v1/leads/[id]/lose/route.ts` | serverClient:22 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-38dcbb | `app/api/v1/leads/[id]/move/route.ts` | serverClient:19 db:63,78,116,141,161,200 rpc:209 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_stages, rpc:emit_event | PENDING |
| SB-712f68 | `app/api/v1/leads/[id]/next-action/route.ts` | serverClient:21 db:71,94,141 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:lead_state | PENDING |
| SB-39774a | `app/api/v1/leads/[id]/reactivation/route.ts` | serverClient:27 db:66,85,104,126,136 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_reactivations, t:crm_leads, t:cron_jobs | PENDING |
| SB-9bbce8 | `app/api/v1/leads/[id]/route.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7518a2 | `app/api/v1/leads/[id]/timeline/route.ts` | serverClient:40 auth:64 db:83,93 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:crm_lead_activities, t:crm_leads | PENDING |
| SB-2a770e | `app/api/v1/leads/[id]/win/route.ts` | serverClient:20 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-10e663 | `app/api/v1/leads/_handler.ts` | adminClient:2,98,328,456,522,642 sdkImport:9 db:62,99,138,273,333,385 rpc:523,724,741,922 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:contacts, t:crm_lead_activities, t:crm_leads +3 | PENDING |
| SB-37e6cf | `app/api/v1/leads/at-risk/route.ts` | serverClient:21 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e0a7d5 | `app/api/v1/leads/bulk/route.ts` | serverClient:26 adminClient:28,97,349,362 db:99,126,158,246,333,352 rpc:205,292,363,402 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, t:crm_stages, t:user_organizations, rpc:emit_event +1 | PENDING |
| SB-5c8035 | `app/api/v1/leads/import/route.ts` | serverClient:38 db:159,199,210 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:crm_stages | PENDING |
| SB-2f2b9d | `app/api/v1/leads/proposals/route.ts` | serverClient:28 adminClient:29,172 auth:175 db:77,82,106,141 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:crm_lead_activities, t:crm_leads, t:lead_state | PENDING |
| SB-7be640 | `app/api/v1/leads/reactivations/route.ts` | serverClient:21 db:38 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_reactivations | PENDING |
| SB-721f5d | `app/api/v1/leads/route.ts` | serverClient:12 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a823fb | `app/api/v1/lgpd/anonymize/route.ts` | serverClient:37 auth:51 db:70 rpc:115,144 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts, rpc:emit_event, rpc:fn_lgpd_anonymize_contact | PENDING |
| SB-515f42 | `app/api/v1/lgpd/requests/[id]/approve/route.ts` | adminClient:19,60 db:87,109,167,196 rpc:139 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:idempotency_keys, t:lgpd_requests, rpc:emit_event | PENDING |
| SB-2f98ea | `app/api/v1/lgpd/requests/[id]/preview/route.ts` | adminClient:18,44 db:48 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:lgpd_requests | PENDING |
| SB-a8d5f5 | `app/api/v1/lgpd/requests/[id]/route.ts` | adminClient:15,37 storage:82,84 db:41,58,83 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:api_audit_log, t:lgpd_requests | PENDING |
| SB-adcae9 | `app/api/v1/lgpd/requests/route.ts` | serverClient:14 db:80,90 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:lgpd_requests | PENDING |
| SB-d86a32 | `app/api/v1/marca/logo/route.ts` | adminClient:76,195,226,314,443,456 storage:314,444,456 db:197,201,229 rpc:253 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:organizations, t:platform_branding, rpc:fn_definir_logo_por_tema_da_organizacao | PENDING |
| SB-6472f9 | `app/api/v1/mcp/tools/route.ts` | adminClient:25,53 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e188d6 | `app/api/v1/message-templates/[id]/route.ts` | serverClient:17 db:49,85 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:message_templates | PENDING |
| SB-af47e7 | `app/api/v1/message-templates/route.ts` | serverClient:19 db:37,87 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:message_templates | PENDING |
| SB-23d926 | `app/api/v1/messages/[id]/hide/route.ts` | serverClient:11 db:25,42,51,56 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, t:messages | PENDING |
| SB-075e09 | `app/api/v1/messages/[id]/media/route.ts` | adminClient:23,69,95 serverClient:24 auth:42 storage:70,72,79 db:56,71,97 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_STORAGE | F1–F8/F2/F3 | ALTO | t:channel_sessions, t:messages | PENDING |
| SB-598c61 | `app/api/v1/messages/[id]/route.ts` | serverClient:19 db:42,63,70,72,112,120 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:contacts, t:conversations, t:messages | PENDING |
| SB-fa021c | `app/api/v1/messages/_handler.ts` | sdkImport:23 adminClient:49,386,833 storage:834,836 db:110,272,398,405,483,584 rpc:1049 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:contacts, t:conversations, t:messages, rpc:emit_event | PENDING |
| SB-911996 | `app/api/v1/messages/route.ts` | adminClient:23,92 db:121 rpc:127,156 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations, rpc:emit_event, rpc:fn_conversation_assign | PENDING |
| SB-02c160 | `app/api/v1/metrics/atrito/route.ts` | adminClient:39,134,224 serverClient:40 db:136,226,242 rpc:142 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations, rpc:fn_atrito_metrics | PENDING |
| SB-74d932 | `app/api/v1/metrics/attendants/route.ts` | adminClient:18,92 serverClient:19 auth:95 rpc:78 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | rpc:fn_attendant_metrics | PENDING |
| SB-b973eb | `app/api/v1/notifications/push/route.ts` | serverClient:14 db:66,119 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:push_subscriptions | PENDING |
| SB-32ec56 | `app/api/v1/onboarding/whatsapp/qr/route.ts` | serverClient:2 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f7798b | `app/api/v1/onboarding/whatsapp/session/route.ts` | serverClient:6 adminClient:7,38 db:23 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-a45980 | `app/api/v1/phone-numbers/[id]/route.ts` | serverClient:19 db:64 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:phone_numbers | PENDING |
| SB-751140 | `app/api/v1/phone-numbers/route.ts` | serverClient:19 db:42,85 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:phone_numbers | PENDING |
| SB-395361 | `app/api/v1/pipelines/[id]/agent-mapping/route.ts` | serverClient:34 db:103,112,241 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines, t:crm_stages | PENDING |
| SB-2bef64 | `app/api/v1/pipelines/[id]/board/route.ts` | supabaseHelper:28 serverClient:29 auth:445 db:67,85,147,172,197,271 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:agent_inbox_items, t:ai_agent_versions, t:ai_agents, t:contacts +6 | PENDING |
| SB-2007cb | `app/api/v1/pipelines/[id]/route.ts` | serverClient:35 db:260,343,345 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-74e9d8 | `app/api/v1/pipelines/[id]/stages/[stageId]/route.ts` | serverClient:26 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-1897e9 | `app/api/v1/pipelines/[id]/stages/route.ts` | serverClient:28 db:62 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_stages | PENDING |
| SB-623216 | `app/api/v1/pipelines/_funis.ts` | serverClient:27 db:43,72,79,86 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rules, t:crm_leads, t:crm_pipelines, t:webhook_sources | PENDING |
| SB-7d2855 | `app/api/v1/pipelines/_handler.ts` | sdkImport:8 db:52 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-b60273 | `app/api/v1/pipelines/default/route.ts` | serverClient:13 db:29,45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines, t:crm_stages | PENDING |
| SB-cc623f | `app/api/v1/pipelines/route.ts` | serverClient:23 db:129,142,154 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines, t:crm_stages | PENDING |
| SB-979b1d | `app/api/v1/plataformas-de-anuncio/google/callback/route.ts` | adminClient:31,81 db:87 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ad_platform_connections | PENDING |
| SB-7c2416 | `app/api/v1/products/[id]/fotos/route.ts` | adminClient:32,108 serverClient:33 storage:109 db:43,54 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:catalog_products | PENDING |
| SB-31564f | `app/api/v1/products/[id]/route.ts` | serverClient:18 db:49,93 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:catalog_products | PENDING |
| SB-3d612d | `app/api/v1/products/import/route.ts` | serverClient:31 db:152,229,242 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:catalog_products | PENDING |
| SB-86f402 | `app/api/v1/products/route.ts` | serverClient:18 db:32,71 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:catalog_products | PENDING |
| SB-62c86f | `app/api/v1/prospecting/agents/prepare/route.ts` | adminClient:5,25 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c13f08 | `app/api/v1/prospecting/agents/route.ts` | adminClient:5,29 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ec54d7 | `app/api/v1/prospecting/route.ts` | adminClient:7,103 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-00843f | `app/api/v1/reports/activities/route.ts` | adminClient:41,156 serverClient:42 auth:159 db:122,174 rpc:97 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:ai_agents, t:crm_pipelines, rpc:fn_activity_report | PENDING |
| SB-0a47dd | `app/api/v1/reports/financeiro/route.ts` | serverClient:23 rpc:66 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_relatorio_financeiro | PENDING |
| SB-c8f127 | `app/api/v1/settings/api-tokens/[id]/revoke/route.ts` | serverClient:12 db:34,47 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:api_tokens | PENDING |
| SB-221b6c | `app/api/v1/settings/api-tokens/route.ts` | serverClient:17 db:33,75 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:api_tokens | PENDING |
| SB-d4df2d | `app/api/v1/settings/campanhas/route.ts` | adminClient:24,33,74 db:35,76,85 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-ba9994 | `app/api/v1/settings/routing/channels/route.ts` | serverClient:5 rpc:31 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_set_channel_routing | PENDING |
| SB-b0b9d9 | `app/api/v1/settings/routing/route.ts` | adminClient:41,113 serverClient:42 db:57,115,128 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-ceda2a | `app/api/v1/system/agent/route.ts` | adminClient:19,79,134 db:94,139,171,192,212,242 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:system_update_runs, t:system_version | PENDING |
| SB-b6c031 | `app/api/v1/system/instalacao/route.ts` | serverClient:21 adminClient:22,38 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ec0efd | `app/api/v1/system/update/route.ts` | adminClient:15,34 db:36,57,79,97 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:system_update_runs, t:system_version | PENDING |
| SB-78d8ab | `app/api/v1/system/version/route.ts` | adminClient:13,36 db:38,65 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:system_update_runs, t:system_version | PENDING |
| SB-f31e1c | `app/api/v1/tags/cores/route.ts` | serverClient:37 db:49 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-106bdc | `app/api/v1/tags/vocabulario/route.ts` | serverClient:43 rpc:58,104 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_vocabulario_de_tags, rpc:fn_vocabulario_de_tags_operar | PENDING |
| SB-ec09b4 | `app/api/v1/tasks/[id]/route.ts` | serverClient:23 db:76,83,144 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_tasks | PENDING |
| SB-93fada | `app/api/v1/tasks/route.ts` | serverClient:34 db:87,131 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_tasks | PENDING |
| SB-1eacc8 | `app/api/v1/team/[user_id]/_shared.ts` | serverClient:21 db:51,64,81 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-b3848b | `app/api/v1/team/[user_id]/interface/route.ts` | serverClient:6 db:26,41 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-a16738 | `app/api/v1/team/[user_id]/reactivate/route.ts` | serverClient:42 db:65,81 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-fff93a | `app/api/v1/team/[user_id]/revoke/route.ts` | serverClient:16 db:43,56,75,83 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, t:user_organizations | PENDING |
| SB-183911 | `app/api/v1/team/assignable/route.ts` | serverClient:14 adminClient:15,35,53 auth:56 db:37 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations | PENDING |
| SB-f8f659 | `app/api/v1/team/invite/route.ts` | adminClient:27,71 auth:85 db:80 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations | PENDING |
| SB-ff253a | `app/api/v1/team/invites/[id]/resend/route.ts` | adminClient:16,46 db:48 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:team_invites | PENDING |
| SB-1d59f2 | `app/api/v1/team/invites/[id]/revoke/route.ts` | serverClient:18 db:44,60 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:team_invites | PENDING |
| SB-87c417 | `app/api/v1/team/invites/route.ts` | serverClient:17 db:35 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:team_invites | PENDING |
| SB-a0013d | `app/api/v1/team/route.ts` | serverClient:15 adminClient:16,73 auth:76 db:46 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations | PENDING |
| SB-cd45cf | `app/api/v1/voice/calls/[id]/accept/route.ts` | serverClient:10 db:69 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:voice_calls | PENDING |
| SB-2f88e7 | `app/api/v1/voice/calls/[id]/reject/route.ts` | serverClient:10 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-85f7b4 | `app/api/v1/voice/calls/[id]/route.ts` | serverClient:13 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d4a926 | `app/api/v1/voice/calls/[id]/webrtc/route.ts` | serverClient:13 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6cd538 | `app/api/v1/voice/calls/history/route.ts` | serverClient:14 db:36 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:voice_calls | PENDING |
| SB-6f8830 | `app/api/v1/voice/calls/route.ts` | serverClient:16 db:83,134,169 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:voice_calls | PENDING |
| SB-78f77f | `app/api/v1/voice/events/route.ts` | serverClient:33 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b457be | `app/api/v1/voice/opt-in/route.ts` | serverClient:45 db:187 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_voice_calls | PENDING |
| SB-f8d2e3 | `app/api/v1/voice/sessions/pair/route.ts` | serverClient:52 db:152,203,207,235,253 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-2e1723 | `app/api/v1/voice/sessions/route.ts` | serverClient:32 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-c1554b | `app/api/v1/voice/sessions/status/route.ts` | serverClient:10 db:24 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-098d13 | `app/api/v1/voip/trunk/route.ts` | adminClient:18,81,101 serverClient:19 db:44,102 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c40146 | `app/api/v1/webhook-sources/[id]/events/route.ts` | serverClient:10 db:29,38 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_events_log, t:webhook_sources | PENDING |
| SB-d778f7 | `app/api/v1/webhook-sources/[id]/route.ts` | serverClient:14 adminClient:15,75 db:52,89,124,132 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:webhook_sources | PENDING |
| SB-9120bd | `app/api/v1/webhook-sources/route.ts` | serverClient:30 adminClient:31,80,84 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c00d76 | `app/api/v1/webhooks/channel/[token]/route.ts` | adminClient:41,61 db:66,72 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-3756bc | `app/api/v1/webhooks/in/[token]/route.ts` | adminClient:16,86 db:88,161,237,373,387,459 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_leads, t:webhook_events_log, t:webhook_sources | PENDING |
| SB-25726e | `app/api/v1/webhooks/meta/[token]/route.ts` | adminClient:40,114 db:173,184 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:messages, t:meta_templates | PENDING |
| SB-16c3d4 | `app/api/v1/webhooks/nuvemshop/[event]/route.ts` | adminClient:19,63 db:67,111,130 rpc:80,153 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:tenant_integrations, t:webhook_events_log, rpc:emit_event, rpc:fn_decrypt_oauth | PENDING |
| SB-ff8c75 | `app/api/v1/webhooks/nuvemshop/customer-data-request/route.ts` | adminClient:24,99 db:105,174 rpc:119,259 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:tenant_integrations, t:webhook_events_log, rpc:emit_event, rpc:fn_decrypt_oauth | PENDING |
| SB-1f75ed | `app/api/v1/webhooks/nuvemshop/customer-redact/route.ts` | adminClient:24,94 db:100,162 rpc:115,235 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:tenant_integrations, t:webhook_events_log, rpc:emit_event, rpc:fn_decrypt_oauth | PENDING |
| SB-53a51b | `app/api/v1/webhooks/nuvemshop/store-redact/route.ts` | adminClient:30,96 db:101,160,191 rpc:115,235 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:tenant_integrations, t:webhook_events_log, rpc:emit_event +1 | PENDING |
| SB-9ef99d | `app/api/v1/webhooks/waha/[token]/route.ts` | adminClient:20,93 db:101,168 rpc:122 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:webhook_events_log, rpc:fn_decrypt_oauth | PENDING |
| SB-c95919 | `app/api/v1/webhooks/waha/route.ts` | adminClient:21,86 db:93,168 rpc:122 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:webhook_events_log, rpc:fn_decrypt_oauth | PENDING |
| SB-27f857 | `app/app/ads/meta/page.tsx` | adminClient:27,42 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-eac42f | `app/app/agenda/page.tsx` | serverClient:19 db:131,139,228 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:calendar_connections, t:calendar_event_types | PENDING |
| SB-0559b0 | `app/app/ai/agents/[id]/_actions.ts` | adminClient:25,70,154,384,484,692 db:91,158,201,230,285,295 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, t:event_log | PENDING |
| SB-d2a945 | `app/app/ai/agents/[id]/page.tsx` | serverClient:6 db:60,106,112,117,127,136 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents, t:ai_knowledge_sources, t:ai_router_members +2 | PENDING |
| SB-afbcac | `app/app/ai/agents/_actions.ts` | adminClient:6,18,48,92,135,195 db:50,66,94,110,137,166 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents | PENDING |
| SB-e0ea68 | `app/app/ai/agents/new/page.tsx` | serverClient:6 db:44 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-916330 | `app/app/ai/agents/page.tsx` | serverClient:6 db:33 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents | PENDING |
| SB-ca36c0 | `app/app/ai/atendimento/[id]/page.tsx` | serverClient:6 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ebfb9a | `app/app/ai/atendimento/layout.tsx` | adminClient:4,12 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-14d0bb | `app/app/ai/atendimento/page.tsx` | serverClient:6 db:28 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers | PENDING |
| SB-5fcefb | `app/app/ai/credentials/page.tsx` | serverClient:5 db:34,48,61 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:organizations | PENDING |
| SB-9cf0af | `app/app/ai/followups/[id]/page.tsx` | serverClient:6 db:32,40 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-ab5dae | `app/app/ai/followups/page.tsx` | serverClient:6 db:29 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers | PENDING |
| SB-5289df | `app/app/ai/knowledge/sources/_client.tsx` | realtime:9,56,60 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-4d540a | `app/app/ai/knowledge/sources/page.tsx` | serverClient:6 db:52,60,66 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:ai_knowledge_sources | PENDING |
| SB-9f2545 | `app/app/ai/memory/page.tsx` | serverClient:5 db:25,33,49,55 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_memory_entries, t:org_memory_pointers, t:org_memory_versions | PENDING |
| SB-3c5985 | `app/app/ai/page.tsx` | adminClient:6,33 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-cce66c | `app/app/ai/routers/[id]/page.tsx` | serverClient:7 db:31,37,43 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:ai_router_members, t:ai_routers | PENDING |
| SB-ae2506 | `app/app/ai/routers/page.tsx` | serverClient:6 db:27,31 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_router_members, t:ai_routers | PENDING |
| SB-3eb705 | `app/app/ai/skills/page.tsx` | adminClient:5,21 db:24,25,34 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:skill_pointers, t:skill_versions | PENDING |
| SB-7e5d44 | `app/app/ai/usage/page.tsx` | serverClient:5 db:32 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents | PENDING |
| SB-7a4323 | `app/app/analise/page.tsx` | adminClient:6,41 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2eea9c | `app/app/contacts/[id]/page.tsx` | serverClient:3 db:23 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-9be7d1 | `app/app/crm/page.tsx` | adminClient:9,59 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-66048e | `app/app/integracao-dados/[id]/page.tsx` | serverClient:17 db:30 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-9b6a42 | `app/app/integracao-dados/layout.tsx` | adminClient:4,13 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-11fdd8 | `app/app/integracao-dados/page.tsx` | serverClient:20 db:36 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-1ea18a | `app/app/integrations/nuvemshop/page.tsx` | adminClient:17,36 db:38 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:tenant_integrations | PENDING |
| SB-f1d8ac | `app/app/kanban/page.tsx` | serverClient:7 db:40 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-de553d | `app/app/layout.tsx` | adminClient:16,66 db:93 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-c7f7ce | `app/app/leads/[id]/page.tsx` | serverClient:22 db:42 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads | PENDING |
| SB-b2a6a5 | `app/app/pipelines/[id]/page.tsx` | serverClient:3 db:23 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-f1b870 | `app/app/products/page.tsx` | adminClient:9,60 serverClient:10 storage:61,62 db:44 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:catalog_products | PENDING |
| SB-6137ee | `app/app/settings/atendimento/page.tsx` | serverClient:24 db:42 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-920c54 | `app/app/settings/conversoes/page.tsx` | adminClient:56,93 db:105 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-dd02c6 | `app/app/settings/marca/page.tsx` | serverClient:37 db:59 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-85f7e5 | `app/app/settings/meta-ads/page.tsx` | adminClient:34,51 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-65a688 | `app/app/settings/page.tsx` | adminClient:6,40 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-457bd3 | `app/app/settings/security/page.tsx` | adminClient:2,27 db:28 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-1be534 | `app/app/settings/tags/page.tsx` | serverClient:34 rpc:64 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_vocabulario_de_tags | PENDING |
| SB-488e83 | `app/app/settings/tenant/agenda/page.tsx` | serverClient:6 adminClient:90 env:90 db:61,69,76 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:calendar_event_types, t:organizations, t:user_organizations, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-5d24c8 | `app/app/settings/tenant/page.tsx` | serverClient:8 db:40 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-d9d855 | `app/app/settings/tenant/pipelines/page.tsx` | serverClient:5 db:36 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-fabb6d | `app/app/settings/voip-trunk/page.tsx` | serverClient:6 db:25 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6a851a | `app/auth/callback/route.ts` | serverClient:3 auth:93,116 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-6b62fd | `app/auth/confirm/route.ts` | sdkImport:2 serverClient:4,36 auth:86,87,101 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-248a38 | `app/email-templates/[modelo]/route.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-04c6b2 | `app/get-started/page.tsx` | serverClient:4 auth:40 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-7fe915 | `app/icon.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-ee80c9 | `app/layout.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d0d2cd | `app/legal/layout.tsx` | serverClient:4 auth:22 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-48f913 | `app/legal/privacy/page.tsx` | serverClient:5 auth:30 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-716d42 | `app/legal/terms/page.tsx` | serverClient:4 auth:22 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-2e8309 | `app/not-found.tsx` | serverClient:4 auth:15 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-97396f | `app/onboarding/setup-ai/page.tsx` | serverClient:4 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6dfb88 | `app/onboarding/testar/page.tsx` | adminClient:4,28 db:30 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents | PENDING |
| SB-687a66 | `app/onboarding/welcome/page.tsx` | serverClient:5 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-9aeeff | `app/public-env-script.tsx` | env:17,60,61 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-6ee95b | `app/team/accept-invite/[token]/page.tsx` | serverClient:15 auth:38 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-cda057 | `components/admin/tenants/TenantOverview.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-4d5a42 | `components/inbox/CRMSidePanel.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-37e8a2 | `components/kanban/LoseLeadDialog.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-445b38 | `components/shell/OrganizationTransitionProvider.tsx` | browserClient:3 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a8d0e6 | `hooks/ai/useAgentRuns.ts` | realtime:6,16,108 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-c6e2c2 | `hooks/ai/useCaseChat.ts` | realtime:17 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-5ef603 | `hooks/auth/AuthProvider.tsx` | browserClient:12 auth:63 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-ea18bf | `hooks/auth/InterfaceRefresh.tsx` | realtime:6,70 | REPLACE_KEYCLOAK + REPLACE_REALTIME | F2/F4 | ALTO |  | PENDING |
| SB-f5bcfc | `hooks/calls/useInboundCallAlerts.ts` | realtime:6,13,78 browserClient:11 db:28 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | MÉDIO | t:contacts | PENDING |
| SB-0978a8 | `hooks/inbox/useConversationNotes.ts` | realtime:5,36 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-7c9b70 | `hooks/inbox/useConversationTags.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-4f9e63 | `hooks/inbox/useConversationsRealtime.ts` | realtime:4,155,165 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-ef9790 | `hooks/inbox/useMessagesRealtime.ts` | realtime:4,62 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-097128 | `hooks/inbox/usePassagensDaConversa.ts` | realtime:7,17,59 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-fbd227 | `hooks/kanban/useBoard.ts` | realtime:5,42,127,136 cookie:13 | REPLACE_KEYCLOAK + REPLACE_REALTIME | F2/F4 | ALTO |  | PENDING |
| SB-9ae193 | `hooks/leads/useLeadTimeline.ts` | realtime:6,56,104 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-6cda42 | `hooks/notifications/useCrmAlerts.ts` | realtime:6,110,124 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-8272d3 | `hooks/notifications/useInboundMessageAlerts.ts` | realtime:7,19,152 db:43 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | MÉDIO | t:contacts | PENDING |
| SB-35a642 | `hooks/realtime/useRealtimeChannel.ts` | browserClient:3 sdkImport:4 realtime:4,52,123,154,170,173 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-94cb65 | `hooks/realtime/useRefetchDeSeguranca.ts` | realtime:46 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-182b31 | `hooks/useAdminInboxRealtime.ts` | realtime:4,7,10,22 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-f23357 | `hooks/useAlertsRealtime.ts` | realtime:5,34,37,39 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-5b7c78 | `hooks/useTenantAgent.ts` | realtime:7,31,33 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-a0384a | `hooks/useTenantHealth.ts` | realtime:5,31,33,34,36 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-98f014 | `hooks/voice/useVoiceCallSession.ts` | realtime:8,442 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-816b30 | `lib/agenda/consulta.ts` | adminClient:63 sdkImport:70 db:188,239,293,426,588,618 rpc:334,444 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:attendant_availability, t:calendar_appointments, t:calendar_availability_exceptions, t:calendar_event_types +4 | PENDING |
| SB-ba40e8 | `lib/agenda/donos-da-agenda.ts` | adminClient:28,41 serverClient:29 db:43 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:user_organizations | PENDING |
| SB-6caa02 | `lib/agenda/efeito.ts` | sdkImport:4 rpc:50,60,70 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_appointment_enrollment_current, rpc:fn_followup_claim_current, rpc:fn_followup_job_current | PENDING |
| SB-766edd | `lib/agenda/google/calendar-executor.ts` | sdkImport:1 db:24,66,81 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:calendar_connections, t:organizations | PENDING |
| SB-707e49 | `lib/agenda/google/candidates.ts` | sdkImport:1 db:5 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-60d918 | `lib/agenda/google/config.ts` | adminClient:34,162,207 db:163 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_google_oauth | PENDING |
| SB-a87943 | `lib/agenda/google/membros.ts` | adminClient:1,22 db:30 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:user_organizations | PENDING |
| SB-250ac9 | `lib/agenda/google/sync-executor.ts` | sdkImport:3 db:88,109,117 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_connections, t:contacts, t:user_organizations | PENDING |
| SB-72e7b0 | `lib/agenda/google/sync-store.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-76fa9d | `lib/agenda/google/vinculo.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-a3381e | `lib/agenda/locais.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-954817 | `lib/agenda/meet-delivery.ts` | sdkImport:6 rpc:60 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_meet_delivery_policy | PENDING |
| SB-c1c33f | `lib/agenda/motivo-do-meet.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e55d9d | `lib/agenda/ocupacao-externa.ts` | sdkImport:70 rpc:155 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_agenda_ocupacao_google_do_dono | PENDING |
| SB-3f0dd9 | `lib/agenda/protecao-followup.ts` | sdkImport:1 db:83,99 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:organizations | PENDING |
| SB-fc30c2 | `lib/agent-engine/agent/conversa-do-caso/leitura.ts` | sdkImport:22 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-c66f9f | `lib/agent-engine/agent/fotos-do-produto.ts` | adminClient:18,43 storage:44 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-f730fc | `lib/agent-engine/agent/inbound-turn.ts` | adminClient:69,2601 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-114f2c | `lib/agent-engine/agent/media-parts.ts` | sdkImport:7 storage:92 db:56,92 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | MÉDIO | t:ai_models | PENDING |
| SB-0210c8 | `lib/agent-engine/agent/request-deps.ts` | env:25,26 adminClient:26 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-d06789 | `lib/agent-engine/agent/skill-references.ts` | sdkImport:13 storage:72 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-a3b09b | `lib/agent-engine/db/pool.ts` | env:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-66cbe7 | `lib/agent-engine/db/request-pool.ts` | env:4,15,16 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-49f5ce | `lib/agent-engine/edge/channel/waha-adapter.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b2c79e | `lib/agent-engine/edge/crm/mcp-client.ts` | sdkImport:13 env:34,35,38 adminClient:35,38 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-8d3190 | `lib/agent-engine/edge/crm/mcp-tools.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-79633a | `lib/agent-engine/edge/crm/move-lead-stage.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-3114f9 | `lib/agent-engine/edge/crm/send-ledger.ts` | sdkImport:3 db:140,155,166,185,196 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:messages, t:send_ledger | PENDING |
| SB-1e3a9b | `lib/agent-engine/edge/crm/send-message.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-366d9f | `lib/agent-engine/edge/llm/orcamento.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-da8cd8 | `lib/agent-engine/env.ts` | env:4,19,22,23,248 adminClient:23 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-c90b44 | `lib/agent-engine/guardrails/vazamento-interno.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-0501b5 | `lib/agent-engine/pacing/ledger-supabase.ts` | sdkImport:36 db:75,84,91,140,224 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_knobs, t:channel_sessions, t:pacing_ledger | PENDING |
| SB-166888 | `lib/agent-engine/queue/loop.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-a63370 | `lib/ai/agents.ts` | adminClient:6,41,69 db:43,71 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:ai_provider_credentials | PENDING |
| SB-196381 | `lib/ai/agents/create-draft.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-9d822f | `lib/ai/agents/duplicate.ts` | sdkImport:14 db:99,110,127,145,178,193 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents | PENDING |
| SB-77d6c9 | `lib/ai/agents/escolher-modelo.ts` | sdkImport:24 db:120 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_models | PENDING |
| SB-11a4e1 | `lib/ai/agents/escopo.ts` | sdkImport:18 db:44,59 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_knowledge_sources, t:crm_pipelines | PENDING |
| SB-a42d5f | `lib/ai/agents/first-publication.ts` | adminClient:2,85 db:120,165,188,212,237,265 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, t:ai_models, t:ai_provider_credentials +2 | PENDING |
| SB-df684f | `lib/ai/agents/legacy-notice.ts` | sdkImport:1 rpc:24 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_agent_legacy_notice | PENDING |
| SB-284a10 | `lib/ai/agents/operation.ts` | sdkImport:2 db:42 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents | PENDING |
| SB-cf0677 | `lib/ai/agents/org-tem-automatico.ts` | sdkImport:19 db:31 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents | PENDING |
| SB-b54616 | `lib/ai/agents/publish.ts` | sdkImport:9 db:40 rpc:51 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, rpc:fn_publish_ai_agent_version | PENDING |
| SB-edb01d | `lib/ai/agents/router-members-http.ts` | sdkImport:1 db:12,24,35,44,52,59 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:ai_router_members, t:ai_routers, t:followup_flow_pointers | PENDING |
| SB-97142b | `lib/ai/apply-proposal.ts` | sdkImport:9 db:43,62,78,101,115,125 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents, t:flywheel_distiller_proposals, t:org_memory_entries | PENDING |
| SB-06e73c | `lib/ai/budget/check.ts` | adminClient:39,117,148 db:157,160,169 rpc:138 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:ai_budgets, t:llm_calls, rpc:fn_gasto_de_ia_do_mes | PENDING |
| SB-246716 | `lib/ai/catalogo/sincronizar.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-4ede18 | `lib/ai/classifier-models.ts` | sdkImport:23 db:48,74 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_models, t:ai_provider_credentials | PENDING |
| SB-810bc1 | `lib/ai/cost.ts` | adminClient:9,27,78 db:29,84 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_models, t:ai_pricing | PENDING |
| SB-59fea0 | `lib/ai/credenciais/guardar.ts` | adminClient:25,53,154,242,256 db:97,195,246,270 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials | PENDING |
| SB-26cd5a | `lib/ai/credenciais/uso.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-854ebb | `lib/ai/credentials.ts` | adminClient:10,65 db:67,110 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials | PENDING |
| SB-c11807 | `lib/ai/decisao/config.ts` | adminClient:19,56 db:72,88 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-0443bb | `lib/ai/decisao/ponto.ts` | adminClient:39,91 db:93,101 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials, t:organizations | PENDING |
| SB-7bbe01 | `lib/ai/dispatcher/index.ts` | adminClient:27,109,182,348,372,412 db:121,205,224,262,300,349 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_runs, t:ai_agents, t:conversations, t:event_log +2 | PENDING |
| SB-7bf681 | `lib/ai/dispatcher/rate-limit.ts` | redis:6,12,191 | REPLACE_REDIS | F5 | BAIXO |  | PENDING |
| SB-84a6dd | `lib/ai/elegibilidade/autorizacao.ts` | sdkImport:14 db:45,89 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-188e43 | `lib/ai/elegibilidade/consulta-pre-go-live.ts` | sdkImport:1 db:20 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-dd108f | `lib/ai/elegibilidade/consulta-supabase.ts` | sdkImport:24 db:52 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-e4ebd1 | `lib/ai/elegibilidade/gate.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-edfe9a | `lib/ai/embeddings/chave.ts` | adminClient:52,202,228,265 db:204,230,267 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials, t:ai_purpose_bindings | PENDING |
| SB-1c66a4 | `lib/ai/gateway-binding.ts` | adminClient:33,150,273,361,403,452 db:154,275,363,407,454,464 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_models, t:ai_provider_credentials, t:ai_purpose_bindings, t:organizations | PENDING |
| SB-c06cb6 | `lib/ai/handoff/aviso-ao-lead.ts` | sdkImport:43 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-45b4ab | `lib/ai/handoff/orchestrator.ts` | adminClient:33,156,179,539,566 realtime:365,374 db:161,192,275,302,383,480 rpc:342 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:agent_inbox_items, t:api_audit_log, t:conversations, t:crm_lead_activities +4 | PENDING |
| SB-5074a9 | `lib/ai/handoff/triggers.ts` | adminClient:19,78 db:80 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads | PENDING |
| SB-df2245 | `lib/ai/inbox-destino.ts` | sdkImport:1 db:164 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-2a4b4b | `lib/ai/knowledge/busca.ts` | sdkImport:16 db:130,142,157 rpc:81 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents, t:ai_knowledge_sources, rpc:fn_buscar_trechos_das_fontes | PENDING |
| SB-fd2d36 | `lib/ai/log-invocation.ts` | adminClient:12,75 db:85 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:llm_calls | PENDING |
| SB-df7deb | `lib/ai/memoria-da-org.ts` | sdkImport:14 db:27,39,52 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_memory_pointers, t:org_memory_versions | PENDING |
| SB-167710 | `lib/ai/pontos/padrao-da-organizacao.ts` | adminClient:53,75 db:90,104 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-c27eb7 | `lib/ai/rag/debounce.ts` | redis:31 | REPLACE_REDIS | F5 | BAIXO |  | PENDING |
| SB-b0c97e | `lib/ai/rag/ingest/conversations.ts` | adminClient:33,71,138 db:74,86,159,221,251,285 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_chunks, t:ai_knowledge_sources, t:conversations, t:messages | PENDING |
| SB-f839f5 | `lib/ai/rag/ingest/documento.ts` | adminClient:21,108 storage:109 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-474f53 | `lib/ai/rag/ingest/policy.ts` | adminClient:13,96 storage:99 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-816d1b | `lib/ai/rag/version.ts` | adminClient:17,44,95,118,145 db:47,62,98,121,150,167 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_knowledge_sources, t:ai_knowledge_versions | PENDING |
| SB-416c34 | `lib/ai/replies/delivery.ts` | sdkImport:4 rpc:43,63,73,99 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_reply_delivery_policy, rpc:fn_reply_prepare, rpc:fn_reply_receipt_policy, rpc:fn_reply_record_receipt | PENDING |
| SB-b5ea1c | `lib/ai/runtime/agent.ts` | adminClient:42,232 db:237,262,295,316,371,382 rpc:281 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_runs, t:ai_agent_versions, t:ai_agents, t:conversations +2 | PENDING |
| SB-2e9767 | `lib/ai/runtime/cost.ts` | adminClient:11,31 db:33 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_models | PENDING |
| SB-88a04e | `lib/ai/runtime/finalize.ts` | sdkImport:9 adminClient:14,38 db:59 rpc:72 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_runs, rpc:emit_event | PENDING |
| SB-91abd9 | `lib/ai/runtime/handoff.ts` | adminClient:10,34 db:36 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_links | PENDING |
| SB-17d449 | `lib/ai/runtime/history.ts` | sdkImport:8 db:34 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:messages | PENDING |
| SB-dd2458 | `lib/ai/runtime/mcp_token.ts` | adminClient:18,75,103,132 db:77,105,133 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_tokens, t:user_organizations | PENDING |
| SB-072808 | `lib/ai/runtime/tools.ts` | sdkImport:16 db:90,181,207 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads | PENDING |
| SB-835648 | `lib/ai/skills/db.ts` | env:20 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-3d08d2 | `lib/ai/skills/install.ts` | sdkImport:13 storage:45,50 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-9737f3 | `lib/ai/skills/package.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-ff4bb8 | `lib/api/auth-dual.ts` | sdkImport:27 adminClient:44,123 serverClient:45 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c0b8c2 | `lib/api/client.ts` | adminClient:51 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7b727f | `lib/api/errors.ts` | env:236 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-fed2a9 | `lib/api/idempotency.ts` | sdkImport:82 db:204,231,257,281,296 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:idempotency_keys | PENDING |
| SB-ccc97c | `lib/api/recusa.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-819b5e | `lib/atendimento/origem-automacao.ts` | db:46 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-476cba | `lib/atendimento/origem-mensagem.ts` | sdkImport:1 db:11 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:messages | PENDING |
| SB-638b37 | `lib/atendimento/origem.ts` | sdkImport:2 rpc:17,42,86,107 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_service_begin, rpc:fn_service_boundary, rpc:fn_service_event_origin, rpc:fn_service_observe_command | PENDING |
| SB-885da7 | `lib/atendimento/presenca.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e43f0f | `lib/audit/actions.ts` | adminClient:403 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-053cfc | `lib/audit/index.ts` | serverClient:13 adminClient:14,19,57,63,121 env:19 auth:73 db:63,84,122 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:api_audit_log, t:platform_support_sessions, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-9604ee | `lib/auth/aplicar-convite.ts` | supabaseHelper:4 adminClient:5,55 db:59,103 rpc:68 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:team_invites, rpc:fn_accept_team_invite | PENDING |
| SB-7561d0 | `lib/auth/politica-de-cadastro.ts` | adminClient:56,201,243 db:202,244 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:platform_settings | PENDING |
| SB-bd1080 | `lib/auth/provision.ts` | adminClient:3,50,90,227,356,390 auth:522,576 db:53,108,126,256,288,308 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:user_organizations | PENDING |
| SB-d84b7f | `lib/auth/registration-requests.ts` | adminClient:18,37,54,67 auth:87 db:38,55,70 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:registration_requests | PENDING |
| SB-74d86c | `lib/auth/require-role.ts` | auth:10 serverClient:26 rpc:94 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | rpc:fn_user_role_in_org | PENDING |
| SB-a31821 | `lib/auth/requirePlatformAdmin.ts` | sdkImport:20 serverClient:21 auth:39,57 db:46 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:platform_admins | PENDING |
| SB-16ce15 | `lib/auth/server.ts` | serverClient:15 adminClient:16,350 auth:127,321,390 db:175,181,355,366 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:platform_admins, t:user_organizations | PENDING |
| SB-132e6a | `lib/auth/vinculo-revogado.ts` | serverClient:1 adminClient:33 db:35 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations | PENDING |
| SB-33fc55 | `lib/automation/actions/add-tag.ts` | rpc:40 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:emit_event | PENDING |
| SB-399367 | `lib/automation/actions/assign-owner.ts` | db:24,54 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:user_organizations | PENDING |
| SB-722e34 | `lib/automation/actions/create-or-move-lead.ts` | db:133,165,201,213 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_stages | PENDING |
| SB-74603c | `lib/automation/actions/send-ai-message.ts` | env:98 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-a6ef2b | `lib/automation/actions/send-whatsapp.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4c2fef | `lib/automation/dados-do-formulario.ts` | db:109 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_lead_captures | PENDING |
| SB-b0dbd0 | `lib/automation/desfecho-do-envio.ts` | sdkImport:28 db:180,201 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items | PENDING |
| SB-7b213f | `lib/automation/destinos-internos-autorizados.ts` | adminClient:8,178,228,252 db:179,229,253 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_settings | PENDING |
| SB-d5aad8 | `lib/automation/engine.handler.ts` | adminClient:1,16 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-03cac6 | `lib/automation/engine.ts` | sdkImport:17 db:46,55,65,73,85,97 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rule_runs, t:automation_rules, t:calendar_appointments, t:contacts +1 | PENDING |
| SB-fa542c | `lib/automation/guarda-do-contato.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-5a6376 | `lib/automation/janela-do-canal.ts` | sdkImport:30 db:62,71 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_knobs, t:organizations | PENDING |
| SB-daf255 | `lib/automation/start-conversation.ts` | sdkImport:13 db:26 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-f21c45 | `lib/automation/throttle.ts` | sdkImport:23 db:37,46 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_session_warmup, t:channel_sessions | PENDING |
| SB-e0e5cc | `lib/automation/types.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-239f03 | `lib/branding.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-545929 | `lib/branding/instalacao.ts` | adminClient:67,399,427,502 db:400,430,435,503 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_branding | PENDING |
| SB-083109 | `lib/branding/logo-arquivo.ts` | adminClient:117 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-58598e | `lib/branding/logo.ts` | adminClient:29,91 env:116,137,139,143,161,169 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-ace3a0 | `lib/branding/resolve.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-366280 | `lib/branding/saida.ts` | adminClient:50,147 db:148 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-496c2a | `lib/campanhas/acoes.ts` | sdkImport:17 db:65,121,146,190,218,233 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients, t:campaigns, t:contacts | PENDING |
| SB-2f1009 | `lib/campanhas/consulta-de-audiencia.ts` | sdkImport:14 db:46,66,112,144,155 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients, t:campaigns, t:contacts, t:crm_leads | PENDING |
| SB-45f8d8 | `lib/campanhas/exclusoes.ts` | sdkImport:25 db:69 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_suppressions | PENDING |
| SB-1dbf8e | `lib/campanhas/origem-do-lead.ts` | sdkImport:21 db:45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients | PENDING |
| SB-f9cea2 | `lib/campanhas/pool-de-numeros.ts` | sdkImport:9 db:18,58,73,81 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_channel_sessions, t:channel_sessions | PENDING |
| SB-56981b | `lib/campanhas/preparacao.ts` | sdkImport:34 db:153,179 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients | PENDING |
| SB-756bab | `lib/campanhas/resposta.handler.ts` | adminClient:15,33 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-143c39 | `lib/campanhas/resposta.ts` | sdkImport:33 db:119,127,147,178,186 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_recipients, t:contacts, t:organizations | PENDING |
| SB-cceb18 | `lib/campanhas/rodada.ts` | sdkImport:37 db:103,109,167,204,220,227 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:campaign_channel_sessions, t:campaign_recipients, t:campaign_suppressions, t:campaigns +3 | PENDING |
| SB-2c26de | `lib/catalogo/fotos-no-bucket.ts` | adminClient:5,22 storage:22 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-3ed918 | `lib/catalogo/moeda-da-org.ts` | sdkImport:1 db:35 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-8db1bc | `lib/channels/adapters/datafy.ts` | adminClient:26,67,115,148 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-623ead | `lib/channels/adapters/meta-cloud.ts` | adminClient:23,150,194,274 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f2559b | `lib/channels/adapters/zernio.ts` | adminClient:36,168,258,322,419 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-5ad618 | `lib/channels/arquivo-de-webhook.ts` | sdkImport:32 db:84,131 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_events_log | PENDING |
| SB-85de53 | `lib/channels/conferir-definicao.ts` | sdkImport:36 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-c8d3a4 | `lib/channels/connect-waha.ts` | sdkImport:3 db:124,143 rpc:36,51 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_connection_requests, t:channel_sessions, rpc:fn_finish_channel_connection, rpc:fn_reserve_channel_connection | PENDING |
| SB-acaf02 | `lib/channels/connect.ts` | sdkImport:15 db:180,228,230 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-adbf1a | `lib/channels/contato-por-telefone.ts` | sdkImport:5 db:77,118,130 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-7a9887 | `lib/channels/graph-parceiro/credentials.ts` | sdkImport:30 db:92 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-d160eb | `lib/channels/graph-parceiro/session.ts` | sdkImport:12 db:64,132,152,172 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-18b3d3 | `lib/channels/graph-parceiro/templates.ts` | adminClient:10,36 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-586ee4 | `lib/channels/health.ts` | sdkImport:31 db:182,252,267,286,341,356 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:channel_session_health, t:channel_sessions | PENDING |
| SB-f4d500 | `lib/channels/inbound.ts` | sdkImport:21 db:314,327 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:messages, t:meta_templates | PENDING |
| SB-db1ca6 | `lib/channels/linha-do-espelho.ts` | sdkImport:25 db:44,62 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:meta_templates | PENDING |
| SB-3e6ff1 | `lib/channels/marcar-conversa.ts` | sdkImport:1 rpc:60,68 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:emit_event, rpc:fn_mark_conversation_message | PENDING |
| SB-e055a4 | `lib/channels/meta/app.ts` | adminClient:46,113,146 db:114 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_meta_app | PENDING |
| SB-67b982 | `lib/channels/meta/credentials.ts` | sdkImport:39 db:110 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-72e602 | `lib/channels/meta/ingest.ts` | sdkImport:24 db:99,233,409 rpc:203,224,288,385,400,449 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:messages, rpc:emit_event, rpc:fn_upsert_wa_contact +1 | PENDING |
| SB-c3d63d | `lib/channels/meta/send-template-for-session.ts` | sdkImport:16 adminClient:19,98 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-72eaf3 | `lib/channels/meta/session.ts` | adminClient:14,61,94 db:64,97 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-cd8d32 | `lib/channels/meta/template-sync.ts` | adminClient:16,257 db:260,271,281 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:meta_templates | PENDING |
| SB-70955e | `lib/channels/meta/webhook-da-sessao.ts` | adminClient:29,53 db:66 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-8001a5 | `lib/channels/onboarding-session.ts` | sdkImport:1 db:5 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-413e59 | `lib/channels/pairing-code.ts` | sdkImport:2 db:34 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-8be783 | `lib/channels/pos-entrada.ts` | adminClient:51,58 db:179,188,196,237 rpc:321 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:organizations, rpc:emit_event | PENDING |
| SB-1a2bda | `lib/channels/reactivate.ts` | sdkImport:37 db:90 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-9f8598 | `lib/channels/reprocessar-arquivo-de-webhook.ts` | adminClient:32,44 db:64,76,91,119,150,182 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:channel_sessions, t:webhook_events_log | PENDING |
| SB-0bd3a9 | `lib/channels/retencao-do-arquivo.ts` | sdkImport:43 db:83,102,130 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_events_log | PENDING |
| SB-a956f2 | `lib/channels/selectable.ts` | sdkImport:20 db:96 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-1f8541 | `lib/channels/social/adapter.ts` | adminClient:6,20,56,109 db:22 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-5b43e4 | `lib/channels/social/ingest.ts` | sdkImport:1 db:12,41 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-c616ba | `lib/channels/social/store.ts` | sdkImport:1 db:11,37,49,57,69,111 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_integrations, t:channel_sessions | PENDING |
| SB-8f4c62 | `lib/channels/zernio/avisos.ts` | sdkImport:28 db:193,204,242 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:meta_templates | PENDING |
| SB-1f9b7a | `lib/channels/zernio/credentials.ts` | sdkImport:30 db:111 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-898a6c | `lib/channels/zernio/ingest.ts` | sdkImport:25 db:98,174,190,259,439,497 rpc:412,472,515 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations, t:messages, rpc:emit_event +2 | PENDING |
| SB-f29503 | `lib/channels/zernio/localizacao.ts` | sdkImport:19 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-cad24b | `lib/channels/zernio/templates.ts` | adminClient:37,99 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e7217f | `lib/contacts/cliente-pela-agenda.ts` | sdkImport:1 db:27 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-f11f3d | `lib/contacts/cpf.ts` | sdkImport:10 rpc:34 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:encrypt_cpf | PENDING |
| SB-e6c8b7 | `lib/contacts/proposta-de-dado.ts` | sdkImport:14 db:122,150,212,224,239,249 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:contact_field_proposals, t:contacts | PENDING |
| SB-22d945 | `lib/conversoes/envio.handler.ts` | adminClient:47,66 db:70 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads | PENDING |
| SB-df44e4 | `lib/conversoes/estado-da-conexao.ts` | sdkImport:18 db:46,85,121 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ad_conversion_dispatches, t:ad_platform_connections | PENDING |
| SB-1c3b8b | `lib/conversoes/leitura-da-atribuicao.ts` | sdkImport:14 db:45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-e89e63 | `lib/conversoes/registro-de-envio.ts` | sdkImport:22 db:51,70 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ad_conversion_dispatches | PENDING |
| SB-c27bd6 | `lib/dev/kick-local-pipeline.ts` | sdkImport:11 db:47,72 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_enrollments, t:job_queue | PENDING |
| SB-d85c4c | `lib/email/config.ts` | adminClient:2,32,55,79 db:33,84,96 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_smtp_settings | PENDING |
| SB-214c05 | `lib/email/templates/acesso-gotrue.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-82e71c | `lib/env.ts` | env:69,70,71,136,144,147 adminClient:71 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-c6a284 | `lib/escalacao/atendentes.ts` | sdkImport:15 db:64,78,96 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:attendant_availability, t:conversations, t:user_organizations | PENDING |
| SB-e9bcd3 | `lib/escalacao/atendimento-manual.ts` | sdkImport:75 db:139,172 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-314714 | `lib/escalacao/aviso-ao-lead.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-bdaf86 | `lib/escalacao/aviso-ao-suporte.handler.ts` | adminClient:27,43,102 db:123 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions | PENDING |
| SB-537859 | `lib/escalacao/aviso-ao-suporte.ts` | sdkImport:53 db:650,660,671,686,703,715 rpc:804 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_case_events, t:agent_cases, t:agent_inbox_items, t:channel_sessions +5 | PENDING |
| SB-fe462c | `lib/escalacao/briefing-da-passagem.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e2b350 | `lib/escalacao/chamados.ts` | sdkImport:14 db:85,101,217,233,264,276 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_case_events, t:agent_cases, t:conversations | PENDING |
| SB-405819 | `lib/escalacao/comando-de-canal.ts` | sdkImport:35 db:85,96,106 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents, t:conversations | PENDING |
| SB-53145b | `lib/escalacao/continuidade.ts` | sdkImport:20 db:115,127,140 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_case_events, t:agent_cases, t:conversation_notes | PENDING |
| SB-b9ae79 | `lib/escalacao/disponibilidade.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d6dc0b | `lib/escalacao/numero-interno-de-aviso.ts` | sdkImport:46 db:135,188 rpc:253 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:config_aviso_de_caso, t:contacts, rpc:fn_contar_mensagem_ignorada | PENDING |
| SB-440e37 | `lib/escalacao/passagem.ts` | db:405 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:passagens_de_atendimento | PENDING |
| SB-043177 | `lib/escalacao/retomada.ts` | sdkImport:32 db:97,146,167,294,309,339 rpc:125,206,221 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations, t:crm_leads, t:crm_pipelines +4 | PENDING |
| SB-b0b9ec | `lib/escalacao/tela-do-aviso.ts` | sdkImport:32 db:172,206,212,255,276,306 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_case_events, t:agent_cases, t:ai_agent_versions, t:ai_agents +4 | PENDING |
| SB-fb8996 | `lib/event-log/aviso-do-laco.ts` | sdkImport:1 db:41,51,59,74 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:organizations | PENDING |
| SB-c578e9 | `lib/event-log/drain-loop.ts` | adminClient:36,135,136 sdkImport:44 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-784863 | `lib/event-log/drain.ts` | sdkImport:8 db:80,103,166,213,238,264 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:event_log | PENDING |
| SB-c92183 | `lib/extensions/http.ts` | serverClient:10 db:55 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:platform_admins | PENDING |
| SB-556977 | `lib/extensions/service.ts` | adminClient:10,294,524,609,652,688 serverClient:11 db:296,309,316,324,357,372 rpc:334,652,689,751,781,825 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:extension_artifacts, t:extension_catalogs, t:extension_installations, t:extension_operations +10 | PENDING |
| SB-97a6c3 | `lib/external-db/acesso.ts` | sdkImport:14 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-413769 | `lib/external-db/conexao.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-a67b99 | `lib/external-db/credenciais.ts` | sdkImport:12 db:78 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:external_db_connections | PENDING |
| SB-b0e9ce | `lib/external-db/introspeccao.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-197213 | `lib/external-db/limites.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-5f2087 | `lib/followup/agent-followup-gate.ts` | sdkImport:22 db:165 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions | PENDING |
| SB-a1cd02 | `lib/followup/aplicar-inbound.ts` | sdkImport:6 db:38,68,91,124,165 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_enrollments, t:job_queue, t:messages | PENDING |
| SB-3635b4 | `lib/followup/atendimento.ts` | rpc:1037 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_encerrar_roteiros_vencidos | PENDING |
| SB-052cc3 | `lib/followup/editar.ts` | sdkImport:1 db:21,27 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-781940 | `lib/followup/engine.ts` | sdkImport:18 db:796,808,815,833,846,862 rpc:786,871,879 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:calendar_appointments, t:contacts, t:crm_leads +7 | PENDING |
| SB-05f6fe | `lib/followup/enroll.ts` | sdkImport:10 db:48,77,86,109,128 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:contacts, t:followup_enrollments, t:followup_flow_pointers +1 | PENDING |
| SB-3572a4 | `lib/followup/enviar-texto-fixo.ts` | sdkImport:7 db:32,50,77,91 rpc:24,26,61 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_enrollments, t:job_queue, rpc:fn_followup_claim_current, rpc:fn_followup_inline_settle +1 | PENDING |
| SB-7f514a | `lib/followup/etapas-citadas.ts` | sdkImport:1 db:47 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_stages | PENDING |
| SB-6e0a22 | `lib/followup/gatilho-caso.handler.ts` | adminClient:14,30 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9879f5 | `lib/followup/gatilho-caso.ts` | sdkImport:54 db:316,349,360,373,382,395 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_cases, t:conversations, t:followup_enrollment_events, t:followup_enrollments +2 | PENDING |
| SB-92557b | `lib/followup/gatilho-etapa.handler.ts` | adminClient:8,23 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7f4417 | `lib/followup/gatilho-etapa.ts` | sdkImport:48 db:246,280,291,309,321 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:followup_enrollment_events, t:followup_enrollments, t:followup_flow_pointers +1 | PENDING |
| SB-b5765e | `lib/followup/gatilho-lead.handler.ts` | adminClient:6,21 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e3fba8 | `lib/followup/gatilho-lead.ts` | sdkImport:24 db:180,211,222,239,251 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:followup_enrollment_events, t:followup_enrollments, t:followup_flow_pointers +1 | PENDING |
| SB-3ee27c | `lib/followup/gatilho-presenca.handler.ts` | adminClient:2,8 rpc:8 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:fn_appointment_recover | PENDING |
| SB-5a9db8 | `lib/followup/gatilho-retorno.handler.ts` | adminClient:9,25 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3c3b1a | `lib/followup/gatilho-retorno.ts` | sdkImport:25 db:259,292,310,318,338,351 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations, t:followup_enrollment_events, t:followup_enrollments +3 | PENDING |
| SB-4aca63 | `lib/followup/intervencao.ts` | sdkImport:33 db:245,283,330,476,574 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_enrollment_events, t:followup_enrollments, t:followup_flow_versions | PENDING |
| SB-51c6f0 | `lib/followup/node-handlers.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-8bd040 | `lib/followup/persistir-resposta.ts` | sdkImport:1 db:39,48,63 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:crm_leads | PENDING |
| SB-c56e22 | `lib/followup/publish.ts` | sdkImport:7 rpc:27 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_publish_followup_flow_version | PENDING |
| SB-842b3f | `lib/followup/rascunho.ts` | sdkImport:1 db:45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_versions | PENDING |
| SB-224d09 | `lib/followup/reactivity.handler.ts` | adminClient:10,19 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0872ff | `lib/followup/reactivity.ts` | sdkImport:53 db:450,460,471,481,503,511 rpc:515 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations, t:followup_enrollment_events, t:followup_enrollments +2 | PENDING |
| SB-0f14cb | `lib/followup/retorno-crm.ts` | sdkImport:15 db:79,97,128,191,223,232 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:crm_leads, t:crm_pipelines, t:cron_jobs | PENDING |
| SB-79ea1f | `lib/followup/retorno-pg.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-46e84a | `lib/followup/retorno.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-1d6175 | `lib/followup/silence-sweep.ts` | sdkImport:42 db:199,242,324,346 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, t:followup_enrollments, t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-63bb83 | `lib/followup/turn-bridge.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-ce7370 | `lib/i18n/dicionario.ts` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-668996 | `lib/i18n/traducoes/zh-CN.json` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-713257 | `lib/impersonate/cookie.ts` | db:61 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-41d7c2 | `lib/impersonate/support.ts` | serverClient:2 adminClient:46,47 auth:54,56 rpc:15,47 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | rpc:fn_support_callback_write_allowed, rpc:fn_support_context | PENDING |
| SB-812d1e | `lib/inbox/atividade-de-comando.ts` | sdkImport:31 adminClient:35,103 db:106,111 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, t:crm_pipelines | PENDING |
| SB-9ce7d6 | `lib/inbox/marcador-da-conversa.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d942ed | `lib/instalacao/catalogo.ts` | env:161,172 adminClient:172 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-df9e54 | `lib/instalacao/comportamento-servidor.ts` | adminClient:18,61,88 db:62,89 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_settings | PENDING |
| SB-900d2b | `lib/instalacao/comportamento-sql.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-5735e0 | `lib/instalacao/config.ts` | adminClient:37,130,233,251 db:131,233,251 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_config | PENDING |
| SB-defdd5 | `lib/instalacao/modulos.ts` | adminClient:31 sdkImport:38 db:61,135 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_config | PENDING |
| SB-b669e5 | `lib/instalacao/retrato.ts` | sdkImport:10 db:65,88,101,110 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_models, t:ai_provider_credentials, t:crm_pipelines, t:organizations | PENDING |
| SB-6290eb | `lib/leads/activity-emitter.ts` | sdkImport:1 db:116 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_activities | PENDING |
| SB-df9e7d | `lib/leads/activity-write-failure.ts` | sdkImport:1 rpc:52 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:emit_event | PENDING |
| SB-03bea3 | `lib/leads/agent-activity.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-752397 | `lib/leads/agent-stage-sync.ts` | sdkImport:124 db:213,267,292,299 rpc:380 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_stages, rpc:emit_event | PENDING |
| SB-1522c5 | `lib/leads/appointment-stage-move.ts` | sdkImport:2 db:55,86,103,133,140 rpc:183 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_stages, rpc:emit_event | PENDING |
| SB-8b36bf | `lib/leads/atribuicao-de-anuncio.ts` | sdkImport:21 adminClient:69 rpc:81 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:fn_estampar_atribuicao_de_anuncio | PENDING |
| SB-e62c5a | `lib/leads/encerramento.ts` | sdkImport:21 db:101,126,156,180,201 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_stages | PENDING |
| SB-4e0e24 | `lib/leads/handoff-stage-move.ts` | sdkImport:3 db:54,85,102,132,145 rpc:188 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_leads, t:crm_stages, rpc:emit_event | PENDING |
| SB-b34cf4 | `lib/leads/motivo-da-perda.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-eb0c59 | `lib/leads/nascimento-do-lead.ts` | sdkImport:51 db:143,188,202,235,269,282 rpc:376,453 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-066eaf | `lib/leads/origem-do-site.ts` | adminClient:42,44 db:268 rpc:204 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:messages, rpc:fn_estampar_atribuicao_de_anuncio | PENDING |
| SB-8f5ce6 | `lib/leads/radar-de-risco.ts` | sdkImport:19 db:126,134,161,177,201,209 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:contacts, t:conversations, t:crm_leads +5 | PENDING |
| SB-16c067 | `lib/leads/reactivation.ts` | sdkImport:1 db:66,73,81,133,149,186 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:crm_lead_reactivations, t:crm_leads | PENDING |
| SB-ca88e3 | `lib/leads/risk-seed.ts` | sdkImport:2 db:109,120,136,203,234,244 rpc:211 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:crm_lead_risk_states, t:crm_leads, t:crm_stages +2 | PENDING |
| SB-2bd780 | `lib/leads/risk-worker.ts` | sdkImport:1 db:90,115 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_risk_states | PENDING |
| SB-8fec7b | `lib/leads/stage-operations.ts` | sdkImport:22 db:91,100,250,392,455,487 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages | PENDING |
| SB-3c200e | `lib/leads/timeline-query.ts` | serverClient:1 adminClient:133,134 auth:137 db:107 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:ai_agents | PENDING |
| SB-bfbd7e | `lib/legal/operador.ts` | serverClient:19 db:103 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-adaa81 | `lib/legal/perfil-do-pais.ts` | sdkImport:43 db:257 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-6ff5fd | `lib/lgpd/cascata.ts` | db:152,162,177,190,225,235 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:crm_lead_activities, t:crm_leads, t:followup_enrollments | PENDING |
| SB-4b2681 | `lib/lgpd/export-collector.ts` | adminClient:9,602,634 db:614,644,669,692,703,770 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_case_chat_messages, t:agent_case_events, t:agent_cases, t:agent_inbox_items +24 | PENDING |
| SB-3b8237 | `lib/lgpd/redact-cascade.ts` | adminClient:19,40 db:57,77,100 rpc:106 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:storage_redaction_queue, rpc:fn_lgpd_cascade_redact_contact | PENDING |
| SB-1db5bc | `lib/lgpd/repository.ts` | adminClient:8,37,80,115 db:48,83,119,138 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:lgpd_requests | PENDING |
| SB-9ef857 | `lib/lgpd/sla-alarm.ts` | adminClient:16,196 db:205 rpc:197 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:lgpd_requests, rpc:jsonb_set_last_alarm_at | PENDING |
| SB-7387bf | `lib/lgpd/storage-redaction-queue.ts` | adminClient:10,40 storage:66 db:46,76,91,104 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:storage_redaction_queue | PENDING |
| SB-839c7b | `lib/mcp/auth.ts` | adminClient:22,130 db:132,151 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_tokens | PENDING |
| SB-8dcb03 | `lib/mcp/server.ts` | adminClient:16,53 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a02e3e | `lib/mcp/tools/_users.ts` | sdkImport:10 auth:20 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-ab15c4 | `lib/mcp/tools/agendamento.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-273920 | `lib/mcp/tools/catalog.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d317ba | `lib/mcp/tools/catalogo-servido.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-8243cd | `lib/mcp/tools/catalogo/index.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-042c91 | `lib/mcp/tools/catalogo/tipos.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-9c29df | `lib/mcp/tools/comercio.ts` | db:39,220 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:catalog_products, t:orders | PENDING |
| SB-9463e8 | `lib/mcp/tools/contacts.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a750b4 | `lib/mcp/tools/conversations.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-dd542c | `lib/mcp/tools/dados-externos.ts` | db:96 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-fb9f2d | `lib/mcp/tools/escalacao.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8e6f21 | `lib/mcp/tools/evolucao.ts` | db:115,152,182,213 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_knowledge_sources, t:flywheel_distiller_proposals, t:org_memory_entries | PENDING |
| SB-d107bc | `lib/mcp/tools/ferramentas-do-harness.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-8f4ebb | `lib/mcp/tools/governance.ts` | db:71,113 rpc:99 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, rpc:fn_conversation_assign | PENDING |
| SB-d7dacc | `lib/mcp/tools/handoff.ts` | adminClient:113 db:80,97,175,181 rpc:157,187 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations, t:crm_leads, rpc:fn_channel_routing_claim, rpc:fn_request_channel_routing | PENDING |
| SB-f877d7 | `lib/mcp/tools/leads.ts` | db:51 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_stages | PENDING |
| SB-732866 | `lib/mcp/tools/messages.ts` | adminClient:14,82 db:66,110 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:idempotency_keys | PENDING |
| SB-22c7df | `lib/mcp/tools/operacao.ts` | adminClient:27,328 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6cfc1c | `lib/mcp/tools/pacotes.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-5a31cd | `lib/mcp/tools/pipelines.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-0c4040 | `lib/mcp/tools/privacidade.ts` | db:42 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:lgpd_requests | PENDING |
| SB-7defad | `lib/mcp/tools/retencao.ts` | adminClient:607,611 db:486,519 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, t:crm_stages | PENDING |
| SB-646270 | `lib/mcp/tools/selecao-por-pacote.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-84c342 | `lib/mcp/tools/start-conversation.ts` | adminClient:39,123 db:106,170 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:idempotency_keys | PENDING |
| SB-f452c8 | `lib/mcp/types.ts` | sdkImport:10 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-351efa | `lib/messaging/open-shared-contact-conversation.ts` | sdkImport:5 db:45,89 rpc:63 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:contacts, rpc:fn_upsert_wa_contact | PENDING |
| SB-515e35 | `lib/messaging/presenca.ts` | sdkImport:31 db:71 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-f4a498 | `lib/messaging/ritmo-do-envio-por-token.ts` | sdkImport:32 db:141,158 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:conversations | PENDING |
| SB-4c6e6f | `lib/notifications/push.handler.ts` | adminClient:3,25,75 storage:53,55 db:27,54,77 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:contacts, t:crm_leads | PENDING |
| SB-de98bf | `lib/notifications/web_push.ts` | adminClient:3,34,81 db:28,83 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:push_subscriptions | PENDING |
| SB-b0f6bc | `lib/operacao/entradas-automaticas.ts` | sdkImport:21 db:80,97,127,146,202,254 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines, t:crm_stages, t:webhook_events_log, t:webhook_sources | PENDING |
| SB-a2b49c | `lib/operacao/marcadores-e-time.ts` | db:51,69,120 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, t:organizations, t:user_organizations | PENDING |
| SB-f50d3b | `lib/operacao/modelos-de-mensagem.ts` | db:32,69,113,126 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:crm_leads, t:message_templates | PENDING |
| SB-dc840f | `lib/operacao/regras-automaticas.ts` | db:71,87,107,170 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rule_runs, t:automation_rules | PENDING |
| SB-3c276e | `lib/pipelines/pipeline-editing.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-b1e52d | `lib/plataformas-de-anuncio/captura-de-clique.ts` | sdkImport:15 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-7f4162 | `lib/plataformas-de-anuncio/credenciais-de-leitura.ts` | sdkImport:21 db:47,100 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ad_insights_connections | PENDING |
| SB-b215cb | `lib/plataformas-de-anuncio/credenciais.ts` | sdkImport:20 db:50 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ad_platform_connections | PENDING |
| SB-f62a71 | `lib/plataformas-de-anuncio/google/atribuicao.ts` | sdkImport:18 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-f02c3e | `lib/plataformas-de-anuncio/google/captura-de-clique.ts` | sdkImport:18 db:55 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:google_ads_click_refs | PENDING |
| SB-64e152 | `lib/plataformas-de-anuncio/google/estado-da-conexao.ts` | sdkImport:9 db:24 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ad_platform_connections | PENDING |
| SB-e78b00 | `lib/plataformas-de-anuncio/hierarquia-do-contato.ts` | sdkImport:24 db:83,125 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ad_hierarchy_cache | PENDING |
| SB-076cdb | `lib/plataformas-de-anuncio/landing-config.ts` | sdkImport:11 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-5e7a10 | `lib/plataformas-de-anuncio/meta/captura-de-clique.ts` | sdkImport:15 db:40 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:meta_ads_click_refs | PENDING |
| SB-cfbeaa | `lib/prospecting/agent-setup.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-0bf5dd | `lib/prospecting/guard.ts` | sdkImport:1 db:32,47,53,59 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations, t:prospecting_campaigns, t:prospecting_candidates | PENDING |
| SB-a7e59b | `lib/prospecting/store.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-61d7ec | `lib/prospecting/worker.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-193eaf | `lib/realtime/channels.ts` | browserClient:6 realtime:13 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-7b6c46 | `lib/relogio/executar.ts` | adminClient:20,30,85 sdkImport:21 db:31,48,58 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:followup_enrollments, t:job_queue, t:messages | PENDING |
| SB-060a21 | `lib/routing/channel-policies.ts` | sdkImport:1 db:11,12,13,14 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_routing_policies, t:channel_routing_responsibles, t:channel_sessions, t:user_organizations | PENDING |
| SB-8877c3 | `lib/routing/eligibles.ts` | sdkImport:13 db:35,39,43,51,57,68 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:attendant_availability, t:channel_routing_policies, t:channel_routing_responsibles, t:channel_sessions +3 | PENDING |
| SB-6a4fcf | `lib/routing/queue.ts` | sdkImport:17 db:46,86,119 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-e644bd | `lib/routing/worker.ts` | adminClient:7,16,75,134,251,274 db:82,87,93,145,159,254 rpc:194,318 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations, t:crm_leads, t:event_log, t:organizations +2 | PENDING |
| SB-e7a981 | `lib/schemas/leads.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-706874 | `lib/schemas/messaging.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e1b97f | `lib/settings/apagar-dados-operacionais.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-877cc4 | `lib/supabase/admin.ts` | sdkImport:19 adminClient:24,27 env:27 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-f06b39 | `lib/supabase/browser.ts` | sdkImport:10 browserClient:10,12,141 env:131,133,137 cookie:144 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-0c59a1 | `lib/supabase/em-lotes.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-65a96a | `lib/supabase/server.ts` | sdkImport:8 serverClient:8,38,68 supabaseHelper:9 cookie:27 env:38 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-4865e5 | `lib/tarefas/atividade.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-f1b940 | `lib/team/convites.ts` | sdkImport:19 db:119,158,164,215 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:team_invites | PENDING |
| SB-29ec68 | `lib/tenants/api-key.ts` | adminClient:4,84 db:92,112,151 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_tokens | PENDING |
| SB-0523e7 | `lib/types/messaging.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-0a0cb7 | `lib/users/nome-do-atendente.ts` | adminClient:13,33,43,68 auth:15,72 env:33 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-0ef8f8 | `lib/voice/desparear.ts` | sdkImport:35 db:61,91 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-70be29 | `lib/voice/guarda.ts` | sdkImport:31 db:51 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_voice_calls | PENDING |
| SB-f3c35e | `lib/voice/numero-discavel.ts` | sdkImport:26 db:68 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-137852 | `lib/voip/guardar-trunk.ts` | adminClient:17,28 db:42,83 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:voip_trunk_settings | PENDING |
| SB-160023 | `lib/voip/resolve-caller.ts` | sdkImport:15 db:38 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-e276f4 | `lib/wacalls/calls.ts` | sdkImport:7 db:48 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:voice_calls | PENDING |
| SB-2cfeb6 | `lib/wacalls/session.ts` | sdkImport:7 db:20 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-4b7e3e | `lib/waha/client.ts` | realtime:50 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-377ca4 | `lib/waha/desfecho-do-webhook.ts` | sdkImport:25 db:48 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_events_log | PENDING |
| SB-76f0d4 | `lib/waha/ingest.ts` | sdkImport:15 adminClient:34,44 db:93,593,672,918,954,1110 rpc:275,503,531,796,1079 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:messages, rpc:emit_event, rpc:fn_upsert_wa_contact +1 | PENDING |
| SB-52ec0d | `lib/webhooks/captacao.ts` | sdkImport:14 db:147 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_lead_captures | PENDING |
| SB-ab0628 | `lib/webhooks/respondi.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-89273c | `lib/webhooks/retencao-da-captacao.ts` | sdkImport:42 db:87 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:webhook_lead_captures | PENDING |
| SB-51a949 | `lib/webhooks/secrets.ts` | adminClient:6 sdkImport:12 rpc:20,36 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:fn_decrypt_oauth, rpc:fn_encrypt_oauth | PENDING |
| SB-41271c | `proxy.ts` | sdkImport:1 serverClient:1,50 supabaseHelper:2 cookie:11 env:51,52 auth:78 rpc:129 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | rpc:fn_is_platform_admin, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-5dd200 | `types/public-env.d.ts` | env:10,11 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-733698 | `workers/agent-worker/main.ts` | env:262,646,647 adminClient:647 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-3c35c3 | `workers/ai-handoff-from-sentiment.handler.ts` | adminClient:15,42 db:57 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads | PENDING |
| SB-949a50 | `workers/ai-response-worker.ts` | adminClient:56,103,114,402,403,418 env:403 db:430,546,561,585,615,709 rpc:932,943,1109,1134 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:ai_agents, t:ai_knowledge_sources, t:conversations +6 | PENDING |
| SB-046e21 | `workers/ai-sentiment-worker.ts` | adminClient:40,111,586,652 db:117,131,187,200,209,440 rpc:454 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:ai_agent_versions, t:ai_agents, t:conversations +3 | PENDING |
| SB-704924 | `workers/lgpd-export-worker.ts` | adminClient:57,93 storage:187,197,211,213 db:132,155,230,284,325,352 rpc:363,377 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:lgpd_requests, rpc:emit_event | PENDING |
| SB-5031fd | `workers/lgpd-redact-worker.ts` | adminClient:32,94 db:144,166,188,221,252,320 rpc:269,413,483 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:lgpd_requests, t:organizations, rpc:emit_event | PENDING |
| SB-6d7dcd | `workers/media-derive-worker.ts` | adminClient:22,56,309,347,586 env:34,38 storage:124 db:58,73,86,118,124,248 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:agent_inbox_items, t:ai_agent_versions, t:ai_models, t:ai_purpose_bindings +2 | PENDING |
| SB-69bb4e | `workers/media-persist-worker.ts` | adminClient:24,50 storage:123 db:52,70,90,124 rpc:145 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO | t:channel_sessions, t:messages, rpc:emit_event | PENDING |
| SB-2b4422 | `workers/rag-indexer.ts` | adminClient:56,107,127,153,191,287 db:109,129,155,164,193,290 rpc:303 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:ai_chunks, t:ai_faq_items, t:ai_knowledge_sources +3 | PENDING |
| SB-76df48 | `workers/voice-agent/index.ts` | adminClient:52,58 db:102,167,219,232,295,366 rpc:181 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:phone_numbers, t:voice_calls, rpc:fn_resolve_inbound_number | PENDING |
