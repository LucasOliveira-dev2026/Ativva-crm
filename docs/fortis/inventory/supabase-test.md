# Supabase — TEST (851 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-a69d23 | `app/actions/auth/recoverOrganization.test.ts` | serverClient:28,43 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-460971 | `app/actions/auth/signInWithPassword.test.ts` | serverClient:12,15 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-88f346 | `app/actions/auth/signUp.test.ts` | cookie:13 serverClient:29,38 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-d7647d | `app/actions/registration/decide.test.ts` | adminClient:14,22,40 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ce84f6 | `app/actions/settings/updateModuloDaInstalacao.test.ts` | adminClient:14,15 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-506b59 | `app/api/v1/admin/incidents/[id]/route.test.ts` | adminClient:5,19,78 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9de16d | `app/api/v1/admin/platform-admins/route.test.ts` | adminClient:5,20,109,135,152 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-78b300 | `app/api/v1/admin/tenants/[id]/agents/route.test.ts` | adminClient:22,28,121,122,133,141 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a65aa3 | `app/api/v1/admin/tenants/[id]/health/route.test.ts` | adminClient:5,32,88 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-251ee1 | `app/api/v1/admin/tenants/[id]/route.test.ts` | adminClient:5,21,107 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-564e59 | `app/api/v1/admin/usage/route.test.ts` | adminClient:21,27,94,95,111,115 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e16356 | `app/api/v1/admin/users/route.test.ts` | adminClient:5,20,131,163,186,221 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9efa18 | `app/api/v1/agenda/agendamentos/route.test.ts` | serverClient:16,26 adminClient:17,27,81,293 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-580cfa | `app/api/v1/agenda/enderecos/route.test.ts` | serverClient:14 adminClient:15 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a3ad5a | `app/api/v1/agenda/excecoes/route.test.ts` | adminClient:8,28 serverClient:27 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0e19f1 | `app/api/v1/agenda/tipos/route.test.ts` | adminClient:39,44,134,139 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-428086 | `app/api/v1/ai/agents/[id]/versions/[vid]/patch.route.test.ts` | adminClient:6,13,86 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-4ec8dd | `app/api/v1/ai/agents/[id]/versions/[vid]/test/route.test.ts` | adminClient:12,19,105 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-71e306 | `app/api/v1/ai/evolution/route.test.ts` | serverClient:7 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-85cd20 | `app/api/v1/ai/followup-flows/[id]/route.test.ts` | serverClient:14 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b5cf97 | `app/api/v1/ai/followup-flows/from-model/route.test.ts` | serverClient:29 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-3fb046 | `app/api/v1/ai/followup-flows/route.test.ts` | serverClient:21 adminClient:22 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-da3c8e | `app/api/v1/ai/followups/enrollments/[id]/cancel/route.test.ts` | serverClient:14 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-103ac2 | `app/api/v1/ai/jev/route.test.ts` | adminClient:22,30,163,164 serverClient:23,29 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-47fa5a | `app/api/v1/ai/knowledge/reindex-all/route.test.ts` | adminClient:6,22,59 serverClient:7,21 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-68fa30 | `app/api/v1/ai/knowledge/sources/route.test.ts` | serverClient:5,22 adminClient:23 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-eee32d | `app/api/v1/ai/memory/entries/[id]/route.test.ts` | adminClient:6,18,90 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6d0b02 | `app/api/v1/ai/memory/entries/route.test.ts` | adminClient:6,17,80 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-86cf35 | `app/api/v1/ai/memory/route.test.ts` | adminClient:6,19,191,210 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-85f5d1 | `app/api/v1/ai/memory/versions/[id]/route.test.ts` | adminClient:5,15,81,99 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ebf6d8 | `app/api/v1/ai/providers/route.test.ts` | adminClient:6,32,40,165,166 serverClient:7,39 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2e162d | `app/api/v1/ai/routers/[id]/route.test.ts` | adminClient:5,16,54,59 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a7b381 | `app/api/v1/ai/routers/[id]/test/route.test.ts` | adminClient:5,20,117,155,165,191 db:156 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_router_decisions | PENDING |
| SB-9dcba8 | `app/api/v1/ai/routers/route.test.ts` | adminClient:6,20,176,192,205,229 db:220 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_routers | PENDING |
| SB-cd47c6 | `app/api/v1/ai/runs/route.test.ts` | serverClient:16,21 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-502608 | `app/api/v1/ai/skills/[name]/install/route.test.ts` | adminClient:6,17,86,107 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ac32ed | `app/api/v1/ai/skills/[name]/restore/route.test.ts` | adminClient:6,11,92,103 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e49070 | `app/api/v1/ai/skills/[name]/route.test.ts` | adminClient:6,16,90,108,162,178 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-911837 | `app/api/v1/ai/skills/[name]/versions/route.test.ts` | adminClient:5,10,80 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a85463 | `app/api/v1/ai/skills/import/route.test.ts` | adminClient:28 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a0a226 | `app/api/v1/ai/skills/route.test.ts` | adminClient:5,18,110,150 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1e7b51 | `app/api/v1/channel-sessions/[id]/ai-access/route.test.ts` | adminClient:5,12,35,44,54 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c7741b | `app/api/v1/channel-sessions/[id]/pairing-code/route.test.ts` | serverClient:13 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-2441d5 | `app/api/v1/channel-sessions/[id]/route.test.ts` | serverClient:21,33 adminClient:22,34,210 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2be1e4 | `app/api/v1/channels/graph-partner/route.test.ts` | adminClient:18 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fd539b | `app/api/v1/channels/social/route.test.ts` | adminClient:17 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ce6e38 | `app/api/v1/contacts/[id]/roteiros/route.test.ts` | serverClient:10 adminClient:11 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1b0de4 | `app/api/v1/contacts/[id]/unblock/route.test.ts` | adminClient:8,14,62,64,77,89 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9ad91a | `app/api/v1/contacts/import/route.test.ts` | serverClient:11,17 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7b9b54 | `app/api/v1/contacts/route.test.ts` | serverClient:21,26 adminClient:22,27,72 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-bafdcc | `app/api/v1/cron/agenda-expira-pendentes/route.test.ts` | adminClient:19,22,88,111,130,146 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-529add | `app/api/v1/cron/agenda-reminder/route.test.ts` | db:160,161,166,167 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:contacts | PENDING |
| SB-5ee224 | `app/api/v1/cron/canal-mudo-watcher/route.test.ts` | adminClient:18,21,106,127,139,159 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b1d92b | `app/api/v1/cron/case-stale-watcher/route.test.ts` | adminClient:15,18,111,136,151,170 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7c2338 | `app/api/v1/cron/followup-sem-agente/route.test.ts` | adminClient:19,22,137,168,181,193 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c22d39 | `app/api/v1/health/health-pergunta-pelo-schema-do-app.test.ts` | env:44,45,46 adminClient:46 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-455c21 | `app/api/v1/health/route.test.ts` | env:46,47 adminClient:47 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-d550cd | `app/api/v1/leads/[id]/clone/route.test.ts` | serverClient:6,9 adminClient:11,12 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9106fe | `app/api/v1/leads/[id]/lose/route.test.ts` | serverClient:5,8 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ab2892 | `app/api/v1/leads/[id]/move/route.test.ts` | serverClient:6,9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6c2de5 | `app/api/v1/leads/[id]/route.test.ts` | serverClient:23,29 adminClient:24,30,82 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-330eae | `app/api/v1/marca/logo/route.test.ts` | adminClient:6,38,46,145,171,192 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-88a6b4 | `app/api/v1/message-templates/route.test.ts` | serverClient:35 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-c55237 | `app/api/v1/messages/[id]/hide/route.test.ts` | serverClient:18 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-250b7a | `app/api/v1/messages/[id]/route.test.ts` | serverClient:28 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-c7fc46 | `app/api/v1/messages/route.test.ts` | adminClient:12 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-59eb02 | `app/api/v1/pipelines/[id]/agent-mapping/route.test.ts` | serverClient:7,24 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ebaedb | `app/api/v1/pipelines/[id]/route.test.ts` | serverClient:9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-070c59 | `app/api/v1/pipelines/[id]/stages/[stageId]/route.test.ts` | serverClient:9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-9be6fc | `app/api/v1/pipelines/[id]/stages/route.test.ts` | serverClient:9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-83a1d4 | `app/api/v1/pipelines/route.test.ts` | serverClient:9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e2b950 | `app/api/v1/products/import/route.test.ts` | serverClient:11,14 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4233d5 | `app/api/v1/products/route.test.ts` | serverClient:5,8 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-608275 | `app/api/v1/settings/routing/channels/route.test.ts` | serverClient:5,10 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-bbedb3 | `app/api/v1/system/agent/route.test.ts` | adminClient:4,6,62 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0b2a74 | `app/api/v1/system/update/route.test.ts` | adminClient:11,12 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-47fa80 | `app/api/v1/system/version/route.test.ts` | adminClient:5,12,67 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-97b9c3 | `app/api/v1/team/[user_id]/interface/route.test.ts` | serverClient:11 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-56c87e | `app/api/v1/team/[user_id]/reactivate/route.test.ts` | serverClient:5,23 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-336784 | `app/api/v1/team/[user_id]/revoke/route.test.ts` | serverClient:5,10 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-1eb14a | `app/app/ai/page-modulo.test.tsx` | adminClient:17 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2d77a7 | `app/app/ai/page.test.tsx` | adminClient:15 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-aea622 | `app/app/settings/tenant/agenda/tres-estados-da-lista.test.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-95f472 | `app/auth/callback/route.test.ts` | serverClient:10,23 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-be73a7 | `app/auth/confirm/route.test.ts` | serverClient:8,30 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-ebe1b0 | `components/admin/tenants/TenantOverview.test.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-45a1a8 | `hooks/auth/InterfaceRefresh.test.tsx` | realtime:6 | REPLACE_KEYCLOAK + REPLACE_REALTIME | F2/F4 | ALTO |  | PENDING |
| SB-a13969 | `lib/agenda/lembretes.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-af5c1b | `lib/agent-engine/agent/media-parts.test.ts` | storage:15 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-bc86d4 | `lib/agent-engine/edge/crm/move-lead-stage.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-bcb382 | `lib/agent-engine/env.test.ts` | env:12,13,14,31,32,37 adminClient:14 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-0ef171 | `lib/ai/agents/duplicate.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-56be76 | `lib/ai/apply-proposal.test.ts` | serverClient:3 adminClient:4 sdkImport:7 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-69c88f | `lib/ai/decisao/ponto.test.ts` | adminClient:28,29 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-4647d2 | `lib/ai/dispatcher/rate-limit-misconf.test.ts` | redis:52,103 | REPLACE_REDIS | F5 | BAIXO |  | PENDING |
| SB-f96ad6 | `lib/ai/elegibilidade/consulta-pre-go-live.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-92fd64 | `lib/ai/elegibilidade/consulta-supabase.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-abb630 | `lib/ai/inbox-destino.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-14c4f7 | `lib/ai/skills/install.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-93acdb | `lib/api/auth-dual.test.ts` | serverClient:28 adminClient:29 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-efeb7e | `lib/api/idempotency.test.ts` | db:475 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-5f3d80 | `lib/audit/service-role-configured.test.ts` | adminClient:7,25,26,31,37,42 env:7,25,26,31,37,42 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-62fbd0 | `lib/auth/aplicar-convite.test.ts` | adminClient:47,79,80,123,126 supabaseHelper:48 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-ab6aaa | `lib/auth/politica-de-cadastro.test.ts` | adminClient:4,20,41,128,186,193 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-89e697 | `lib/auth/provision-externo.test.ts` | adminClient:36,37 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-254d3f | `lib/auth/require-role.test.ts` | serverClient:14,24 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-de2893 | `lib/auth/vinculo-ativo.test.ts` | adminClient:19,20 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-caac08 | `lib/auth/vinculo-revogado.test.ts` | serverClient:7,27 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-e5fb5f | `lib/automation/actions/create-or-move-lead.test.ts` | adminClient:4 serverClient:14 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c0ae85 | `lib/automation/actions/send-ai-message.test.ts` | env:58 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-ab8f48 | `lib/automation/destinos-internos-autorizados.test.ts` | adminClient:42,43 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-660811 | `lib/campanhas/reserva.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d05666 | `lib/campanhas/teto-diario-no-fuso-do-cliente.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-27d9ba | `lib/catalogo/moeda-da-org.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-0a4c17 | `lib/channels/connect-waha.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-2a967d | `lib/channels/pairing-code.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-f5e2c1 | `lib/channels/social/ingest.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-aa3055 | `lib/contacts/proposta-de-dado.test.ts` | sdkImport:28 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-fd87c2 | `lib/dev/kick-local-pipeline.test.ts` | sdkImport:4 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-ac0806 | `lib/escalacao/atendimento-manual.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d352f3 | `lib/extensions/context-routes.test.ts` | serverClient:18 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-9089a7 | `lib/extensions/download-rebinding.test.ts` | db:71 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d47cf7 | `lib/extensions/erros-do-banco.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-67d9de | `lib/extensions/http.test.ts` | serverClient:16 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-099e34 | `lib/extensions/service.test.ts` | adminClient:81 serverClient:82 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-65b84c | `lib/external-db/credenciais.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-8c5fcf | `lib/followup/enviar-texto-fixo.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-5efc84 | `lib/followup/silence-sweep-pre-go-live.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-efa215 | `lib/followup/silence-sweep-roteiro.test.ts` | sdkImport:9 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-04f3e4 | `lib/instalacao/modulos.test.ts` | sdkImport:6 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-5034c8 | `lib/instalacao/retrato.test.ts` | env:84 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-3158fc | `lib/leads/activity-emitter.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a0fc98 | `lib/mcp/auth-resolve-api-token.test.ts` | adminClient:38,40,123,165,382,383 env:383 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-21e5ed | `lib/mcp/auth-teto-de-token.test.ts` | adminClient:27,30,65 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-35e6db | `lib/mcp/tools/agendamento-aguarda-confirmacao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-65b022 | `lib/mcp/tools/comercio.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-99022f | `lib/mcp/tools/dados-externos.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-997460 | `lib/mcp/tools/messages.test.ts` | adminClient:8 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3a80eb | `lib/mcp/tools/start-conversation.test.ts` | adminClient:18 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c6cf4a | `lib/messaging/ritmo-do-envio-por-token.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-dc5344 | `lib/pipelines/pipeline-editing.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e430ee | `lib/routing/eligibles.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-cbfbed | `lib/tenants/api-key.test.ts` | adminClient:32,33 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-72fbd5 | `lib/voip/resolve-caller.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-55bb79 | `lib/wacalls/events-bridge-auth.test.ts` | env:14,15,16 adminClient:16 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-72109e | `lib/waha/client.test.ts` | realtime:294 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-06c299 | `lib/waha/ingest-celular.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-0475c3 | `playwright.config.ts` | env:31,48,49 adminClient:49 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-f48148 | `scripts/vigia-colisao-de-migration.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ea2088 | `tests/api/agenda-cancelar-agenda-do-colega.test.ts` | sdkImport:11 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-bfe7c7 | `tests/api/agenda-configuracao.test.ts` | serverClient:5 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-638c86 | `tests/api/agenda-criacao-com-o-responsavel-do-corpo.test.ts` | sdkImport:35 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-639299 | `tests/api/emitir-token-respeita-o-teto-da-organizacao.test.ts` | serverClient:30 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-0ba1e0 | `tests/api/followup-cron-worker.test.ts` | adminClient:13,19,65,99 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-db081f | `tests/api/followup-enrollments.test.ts` | adminClient:16,24,168 serverClient:17,23 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-eea552 | `tests/api/followup-flows.test.ts` | serverClient:14,21 adminClient:15,22,266 db:295,550,608,766,832,1022 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-c77167 | `tests/api/followup-queue.test.ts` | serverClient:11 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-85e15e | `tests/ataque-sonda-ambiguo.ts` | env:45 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-71c408 | `tests/capture-cenario-23-ciclo.ts` | sdkImport:26 adminClient:35 env:35 db:95,102,111,153,199,228 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_activities, t:crm_lead_reactivations, t:crm_lead_risk_states +5 | PENDING |
| SB-238266 | `tests/capture-lgpd-ensaio-tenant-b.ts` | sdkImport:24 adminClient:34 env:34 db:54,60,66,81 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_activities, t:event_log, t:lgpd_requests +2 | PENDING |
| SB-9d857b | `tests/capture-lgpd-redact.ts` | sdkImport:21 adminClient:28 env:28 db:49,55,60,64 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_activities, t:lgpd_requests, t:messages +2 | PENDING |
| SB-00ae04 | `tests/capture-wave-1.ts` | sdkImport:20 adminClient:42 env:42 db:46,61 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-b216bd | `tests/capture-wave-3-cenarios.ts` | sdkImport:22 adminClient:36 env:36,1007 realtime:377 db:160,163,479,593,602,709 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-c14e07 | `tests/capture-wave-4-cenarios.ts` | sdkImport:28 adminClient:49 env:49,52 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-a10095 | `tests/capture-wave-5-cenarios.ts` | env:51 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-000e55 | `tests/capture-wave-5-tela.ts` | sdkImport:38 adminClient:47 env:47,50 db:96,130 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-7cd65e | `tests/capture-wave-6-cenarios.ts` | sdkImport:41 adminClient:61 env:61 realtime:350,440,502,505,1152,1249 auth:1115 db:125,147,178,199,214,237 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:ai_agents, t:contacts, t:crm_lead_activities, t:crm_leads +2 | PENDING |
| SB-ed507c | `tests/capture-wave-7-cenarios.ts` | sdkImport:38 adminClient:57 env:57 db:101,130,136,137,197,211 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-a45c6f | `tests/e2e/acervo-de-conhecimento.spec.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-3c9c53 | `tests/e2e/admin-credencial-google.spec.ts` | sdkImport:47 db:75 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:platform_google_oauth | PENDING |
| SB-79ae30 | `tests/e2e/agenda-busca-cliente-pelo-nome-do-perfil.spec.ts` | sdkImport:6 env:62,63 adminClient:63 db:94,104,111 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-dc8c69 | `tests/e2e/agenda-google-meet.spec.ts` | sdkImport:5 auth:35,394 db:82,105,157,343,390,437 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:agent_inbox_items, t:attendant_availability, t:calendar_appointments, t:channel_knobs +3 | PENDING |
| SB-cf3ff3 | `tests/e2e/agenda-google-sync.spec.ts` | sdkImport:4 auth:27,227 db:99,200,226,331,427,444 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:attendant_availability, t:calendar_appointments, t:calendar_external_events, t:contacts +1 | PENDING |
| SB-f4c9e4 | `tests/e2e/agenda-ocupacao-do-google-na-grade.spec.ts` | sdkImport:5 db:129,137,183,188,267,272 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:calendar_connections, t:calendar_external_events | PENDING |
| SB-0362ab | `tests/e2e/agenda-ocupacao-do-google-no-historico.spec.ts` | sdkImport:4 db:99,109,122,127,195 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:calendar_connections, t:calendar_external_events | PENDING |
| SB-447807 | `tests/e2e/agenda-presenca-recuperacao.spec.ts` | sdkImport:10 auth:36,273,974 db:70,181,191,263,269,307 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:agent_inbox_items, t:appointment_recovery_receipts, t:attendant_availability, t:calendar_appointments +9 | PENDING |
| SB-221806 | `tests/e2e/agenda-primeira-pintura-no-fuso.spec.ts` | sdkImport:37 auth:67,119 db:118 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations | PENDING |
| SB-ed2725 | `tests/e2e/agente-papeis-operador.spec.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-393275 | `tests/e2e/autonomia-assistida.spec.ts` | sdkImport:5 auth:31,248 db:58,244 rpc:148 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:channel_knobs, t:organizations, rpc:fn_mark_conversation_message | PENDING |
| SB-ec70bc | `tests/e2e/aviso-de-caso-chega-no-whatsapp.spec.ts` | sdkImport:51 adminClient:72 env:72 db:136,137,236,242,351,382 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_cases, t:channel_sessions, t:config_aviso_de_caso, t:entregas_de_aviso_de_caso +2 | PENDING |
| SB-760abd | `tests/e2e/aviso-de-caso-no-whatsapp.spec.ts` | sdkImport:49 adminClient:71 env:71 db:148,149,313,343,350,355 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_cases, t:channel_sessions, t:config_aviso_de_caso, t:entregas_de_aviso_de_caso +2 | PENDING |
| SB-3c43f6 | `tests/e2e/cadastro-sem-confirmacao-de-email.spec.ts` | cookie:16 sdkImport:52 env:54,55,68 adminClient:55 auth:87,91 db:82,83,84,85,125,149 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:crm_pipelines, t:crm_stages, t:organizations, t:user_organizations +3 | PENDING |
| SB-367a5e | `tests/e2e/canal-mudo-avisa-na-central.spec.ts` | sdkImport:3 auth:72 db:85,107,150 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:channel_sessions, t:organizations, t:user_organizations | PENDING |
| SB-09a122 | `tests/e2e/central-avisos-destino.spec.ts` | sdkImport:3 auth:47,84,133 db:55,83,127 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:user_organizations | PENDING |
| SB-33ab74 | `tests/e2e/central-avisos-resolver-em-lote.spec.ts` | sdkImport:14 auth:58,107,150 db:75,104,134,146 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:agent_inbox_items, t:organizations, t:user_organizations | PENDING |
| SB-021394 | `tests/e2e/cliente-pela-agenda.spec.ts` | sdkImport:3 auth:49,137 db:76,133,168,239,244 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:attendant_availability, t:calendar_appointments, t:contacts, t:organizations | PENDING |
| SB-a1562e | `tests/e2e/confirmar-dado-do-contato.spec.ts` | sdkImport:59 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-cdaef7 | `tests/e2e/conversa-do-caso.spec.ts` | sdkImport:52 adminClient:77 env:77 db:168,177,208,215,457,464 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_case_chat_messages, t:agent_cases, t:channel_sessions, t:contacts +5 | PENDING |
| SB-998840 | `tests/e2e/degradacao-silenciosa.spec.ts` | sdkImport:72 realtime:110,129 adminClient:137 env:137 db:166,176,184,187 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_leads, t:crm_pipelines, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-db9441 | `tests/e2e/encerramento-atendimento.spec.ts` | sdkImport:5 auth:71,269,289 db:81,142,149,190,195,198 rpc:130,139,300 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:conversations, t:demanda_conversas, t:demandas, t:messages +4 | PENDING |
| SB-b982eb | `tests/e2e/escalacao-ciclo.spec.ts` | sdkImport:35 adminClient:68 env:68,99 db:203,215,247,252,279 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_cases, t:contacts, t:conversation_notes, t:conversations +4 | PENDING |
| SB-13f160 | `tests/e2e/extensoes-declarativas.spec.ts` | db:177,335,363,371,426,535 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:api_audit_log, t:crm_tasks, t:extension_artifacts, t:extension_catalogs +4 | PENDING |
| SB-9f70a2 | `tests/e2e/extensoes-portas-novas.spec.ts` | db:145,216 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:extension_catalogs, t:extension_installations | PENDING |
| SB-433efe | `tests/e2e/extensoes-recuperacao.spec.ts` | db:86,143,209,301 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:extension_catalogs, t:extension_installations, t:extension_operations | PENDING |
| SB-92d5d4 | `tests/e2e/extensoes-versao.spec.ts` | db:119,130,328,404,416,422 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:api_audit_log, t:extension_installations, t:extension_operations, t:organization_extensions +1 | PENDING |
| SB-69e72c | `tests/e2e/filtro-por-marcador-pela-tela.spec.ts` | db:125,126,127,128 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:contacts, t:conversations, t:crm_pipelines | PENDING |
| SB-306e46 | `tests/e2e/fixtures/catalogo-extensoes.ts` | sdkImport:8 env:80,81,82,83 adminClient:82 auth:143,227,236 db:171,205,222,225,234,331 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:extension_catalogs, t:organizations, t:platform_admins, t:user_organizations +4 | PENDING |
| SB-7cf359 | `tests/e2e/fluxo-de-atendimento.spec.ts` | sdkImport:28 db:75,148,264,271,286 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:followup_flow_pointers, t:followup_flow_versions, t:messages +1 | PENDING |
| SB-aa0481 | `tests/e2e/followup-publicado-abre-no-construtor.spec.ts` | sdkImport:4 db:91,97,111,122,129 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:followup_flow_pointers, t:followup_flow_versions | PENDING |
| SB-95b0b3 | `tests/e2e/funil-arquivado-volta-pela-tela.spec.ts` | sdkImport:52 adminClient:68 env:68 db:186,201,209,210,211,212 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-2417d8 | `tests/e2e/helpers/auth.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-b2dbab | `tests/e2e/helpers/jev.ts` | sdkImport:12 db:47,53,58 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_provider_credentials, t:organizations | PENDING |
| SB-ba4f03 | `tests/e2e/helpers/login-admin.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d2fc89 | `tests/e2e/i18n-espanhol-na-tela.spec.ts` | sdkImport:44 auth:270,273 db:239,252,253 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts, t:organizations | PENDING |
| SB-43cfdc | `tests/e2e/importar-leads-planilha.spec.ts` | sdkImport:28 adminClient:62 env:62 db:116 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-7f45ed | `tests/e2e/inbox-abas-espelham-o-comando.spec.ts` | sdkImport:29 env:37,38 adminClient:38 db:50,56,60,65,82,91 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:channel_sessions, t:contacts, t:conversations +2 | PENDING |
| SB-b7c33c | `tests/e2e/inbox-busca-e-filtros-dizem-a-verdade.spec.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-519890 | `tests/e2e/inbox-quem-manda.spec.ts` | sdkImport:26 adminClient:40 env:40 db:65,86,94,119,130,138 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, t:ai_agents, t:channel_sessions, t:contacts +5 | PENDING |
| SB-d64e0e | `tests/e2e/inbox-responder-citando.spec.ts` | sdkImport:5 db:154,174,175,176 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:contacts, t:conversations, t:user_organizations | PENDING |
| SB-2dd506 | `tests/e2e/inbox-rotulo-de-origem.spec.ts` | sdkImport:46 adminClient:60 env:60 db:92,98,99,100,114,122 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:conversations, t:messages +2 | PENDING |
| SB-3b6532 | `tests/e2e/inbox-scope.spec.ts` | sdkImport:13 db:88 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-b6389c | `tests/e2e/inbox-tempo-real.spec.ts` | cookie:31 realtime:48,178,455,465,506,532 | REPLACE_KEYCLOAK + REPLACE_REALTIME | F2/F4 | ALTO |  | PENDING |
| SB-2d83c2 | `tests/e2e/interface-por-vinculo.spec.ts` | sdkImport:3 auth:49,190 db:59,72,164,189 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:user_organizations | PENDING |
| SB-edde9a | `tests/e2e/invite-lifecycle.spec.ts` | sdkImport:26 env:60,61 adminClient:61 cookie:200,503 auth:411,541 db:67,77,87,455,485,538 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:team_invites, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-154360 | `tests/e2e/juntar-contatos-duplicados.spec.ts` | sdkImport:44 adminClient:59 env:59 db:141,157,169,197,204,207 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:conversations, t:messages +2 | PENDING |
| SB-f8f4b0 | `tests/e2e/kanban-owner-filter.spec.ts` | sdkImport:15 adminClient:98 env:98 db:110,116,117,118,119,125 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-1c7036 | `tests/e2e/lote-no-quadro-do-funil.spec.ts` | sdkImport:35 adminClient:53 env:53 db:127,137,143,144,145,146 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-226f5c | `tests/e2e/mfa-opcional.spec.ts` | sdkImport:18 env:21,22 adminClient:22 auth:33,72 db:42,57,66,68,69,70 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:crm_pipelines, t:crm_stages, t:organizations, t:user_organizations +2 | PENDING |
| SB-0e1dc5 | `tests/e2e/motivos-de-perda-do-funil.spec.ts` | sdkImport:38 adminClient:53 env:53 db:90,96,97,98,99,113 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-03baac | `tests/e2e/organizacoes-criacao-convite-e-cache.spec.ts` | sdkImport:3 auth:42,197 db:49,69,114,132,191,196 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:idempotency_keys, t:organizations, t:platform_admins, t:user_organizations | PENDING |
| SB-af1142 | `tests/e2e/painel-de-configuracao-da-instalacao.spec.ts` | env:183 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-4c6a05 | `tests/e2e/passagem-com-contexto.spec.ts` | sdkImport:48 adminClient:72 env:72 db:122,126,133,344 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:conversations, t:passagens_de_atendimento, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-d48249 | `tests/e2e/password-recovery.spec.ts` | sdkImport:11 env:26,28,29 adminClient:28 auth:35 db:44,56 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY +1 | PENDING |
| SB-eb8bd6 | `tests/e2e/pre-go-live-whatsapp.spec.ts` | sdkImport:4 env:11,13 adminClient:13 db:22,26,27,45 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-f20b4b | `tests/e2e/primeiro-acesso-sem-organizacao.spec.ts` | sdkImport:42 env:45,46 adminClient:46 auth:64,74,113 db:83,97,107,108,109,110 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:crm_pipelines, t:crm_stages, t:organizations, t:user_organizations +2 | PENDING |
| SB-03ea3f | `tests/e2e/protecao-de-envio-nao-congela-o-padrao.spec.ts` | sdkImport:31 env:38,39 adminClient:39 db:47,49,67,118,124,154 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_knobs, t:channel_sessions, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-55a2d6 | `tests/e2e/qa-equipe-pinta-na-hora.spec.ts` | sdkImport:29 db:53 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-060520 | `tests/e2e/qa-l12-agenda-contatos.spec.ts` | db:114,170,171,172,274,300 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_connection_calendars, t:calendar_connections, t:calendar_external_events, t:contacts | PENDING |
| SB-8634c4 | `tests/e2e/qa-l12-agente-ia.spec.ts` | db:69 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents | PENDING |
| SB-b0602e | `tests/e2e/qa-l12-comum.ts` | sdkImport:7 adminClient:21 env:21 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-335c8d | `tests/e2e/qa-l12-funil.spec.ts` | db:35,41,42,43,44,55 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages | PENDING |
| SB-0ae203 | `tests/e2e/qa-l12-inbox.spec.ts` | db:177,178,179,180,182,226 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:contacts, t:conversations, t:crm_lead_activities +3 | PENDING |
| SB-ca7452 | `tests/e2e/qa-l12-tags-radar.spec.ts` | db:54,71,72,123,125,160 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rules, t:contacts, t:crm_lead_activities, t:crm_leads +2 | PENDING |
| SB-0b334d | `tests/e2e/qa-l12-troca-de-funil.spec.ts` | db:104,105,106,107,170,178 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages | PENDING |
| SB-0272e9 | `tests/e2e/qa-selo-no-funil-usado.spec.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-01ab07 | `tests/e2e/qa-sugestao-rejeitada-e-motivo.spec.ts` | sdkImport:26 auth:57,198 db:83,194 rpc:173 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:channel_knobs, t:organizations, rpc:fn_mark_conversation_message | PENDING |
| SB-c2b70b | `tests/e2e/queue-assign.spec.ts` | sdkImport:16 adminClient:41 env:41 db:78 rpc:102 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations, rpc:fn_conversation_assign, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-67e2e8 | `tests/e2e/relatorio-de-atividades.spec.ts` | sdkImport:48 adminClient:63 env:63 db:136,180,186,192,193,194 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-6b8788 | `tests/e2e/relogio-http-cron-externo.spec.ts` | sdkImport:50 env:64,65 adminClient:65 db:141,233,234,235,294 rpc:200 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:followup_enrollments, t:followup_flow_pointers, rpc:fn_service_begin +2 | PENDING |
| SB-15819a | `tests/e2e/reset-password-mfa.spec.ts` | sdkImport:14 adminClient:31 env:31 auth:41,47,53 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-1c008f | `tests/e2e/roteamento-por-canal.spec.ts` | sdkImport:5 auth:95,365 db:52,84,158,289,297,339 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:attendant_availability, t:conversations, t:event_log, t:organizations | PENDING |
| SB-ff5afd | `tests/e2e/signup-journey.spec.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-6ce394 | `tests/e2e/suporte-temporario.spec.ts` | sdkImport:4 realtime:63,109,180 auth:68,246 db:114,128,131,132,140,149 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:api_audit_log, t:contacts, t:conversations, t:organizations +3 | PENDING |
| SB-978f1d | `tests/e2e/utils/precondicao.ts` | sdkImport:65 auth:90 db:114,160,181 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:platform_admins | PENDING |
| SB-5f316b | `tests/e2e/utils/totp.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-19d3d0 | `tests/e2e/voz-primeiro-pareamento.spec.ts` | sdkImport:21 env:27,29 adminClient:29 auth:107,204 db:97,115,187,203 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:channel_sessions, t:organizations, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-09d205 | `tests/e2e/vps-fresh-onboarding.spec.ts` | sdkImport:19 env:31,32 adminClient:32 auth:62,117,120,122 db:74,83,111,114,115,253 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:ai_agent_versions, t:ai_agents, t:channel_sessions, t:crm_pipelines +5 | PENDING |
| SB-06cf20 | `tests/e2e/vps-webhook-outbound-ssrf.spec.ts` | sdkImport:216 env:218,219 adminClient:219 db:223,224 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:automation_rules, t:webhook_sources, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-ecaddd | `tests/e2e/webhooks.spec.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-51761e | `tests/e2e/whatsapp-pareamento-por-codigo.spec.ts` | sdkImport:22 auth:91,176 db:159,172,173,174 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:api_audit_log, t:channel_sessions, t:organizations, t:user_organizations | PENDING |
| SB-5d7005 | `tests/e2e/wizard-do-funcionario.spec.ts` | sdkImport:20 env:23,24 adminClient:24 auth:39,81 db:48,62,72,73,74,75 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:ai_agent_runs, t:ai_agent_versions, t:ai_agents, t:crm_pipelines +7 | PENDING |
| SB-52127a | `tests/e2e/zona-de-perigo-apaga-dados-de-teste.spec.ts` | sdkImport:34 env:72,73,76 adminClient:73,76 db:224 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_audit_log, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-32921e | `tests/fixtures/escrita-em-organizations/verde/cliente.ts` | adminClient:12,16,18,21 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9b848a | `tests/fixtures/escrita-em-organizations/vermelha/cliente.ts` | serverClient:15 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-69c3b0 | `tests/helpers/baseline-check.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-0888fe | `tests/helpers/duble-do-handler.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-b3a9ef | `tests/helpers/stages-db-double.ts` | serverClient:16 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f3190e | `tests/invariants/README.md` | adminClient:21 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-03ec54 | `tests/invariants/agenda-esta-na-publicacao.test.ts` | realtime:8 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-ac58f5 | `tests/invariants/agenda-google-reconciliacao.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-998a8c | `tests/invariants/agenda-google-recovery.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-2de417 | `tests/invariants/agenda-mcp-nao-alcanca-contato-alheio.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-516cdf | `tests/invariants/agenda-meet-export.test.ts` | adminClient:6,10,137 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-59929b | `tests/invariants/agenda-meet.test.ts` | sdkImport:1 adminClient:3,4,643,920,1226 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a24f99 | `tests/invariants/agenda-ocupacao-google-do-dono.test.ts` | adminClient:30,59,74,76,185,186 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b2d243 | `tests/invariants/agenda-presenca-acl.test.ts` | adminClient:19,82,95,239,287,297 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-90ca12 | `tests/invariants/agenda-presenca-recuperacao.test.ts` | adminClient:211 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-cd7453 | `tests/invariants/agenda-rbac.test.ts` | adminClient:67,202 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-70b162 | `tests/invariants/agenda-sem-duplicata.test.ts` | adminClient:48 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ef9f94 | `tests/invariants/agent-no-credential.test.ts` | env:24,25,26,106,107 adminClient:26,107 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-052e1f | `tests/invariants/agent-send-template-turn.test.ts` | env:41,42,43 adminClient:43 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-cbbfb5 | `tests/invariants/ai-purpose-bindings.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7111cf | `tests/invariants/app-da-meta-e-server-side.test.ts` | adminClient:112,118 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-302ba8 | `tests/invariants/atribuicao-do-anuncio-nao-atravessa-organizacao.test.ts` | adminClient:8,18,22,37,40,80 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b33dfb | `tests/invariants/atrito-metrics.test.ts` | rpc:11 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_nome_que_nao_existe_xyz | PENDING |
| SB-224bd7 | `tests/invariants/atualizacao-nao-reduplica-demanda.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-86c283 | `tests/invariants/atualizar-nao-desliga-o-lembrete.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f0febe | `tests/invariants/audit-log-sob-o-default-acl-do-supabase.test.ts` | adminClient:15,37,63,65,87,96 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1b87ff | `tests/invariants/automation-actions-crud.test.ts` | sdkImport:1 adminClient:4,6,20,246 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e24014 | `tests/invariants/automation-engine.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-2033c2 | `tests/invariants/automation-send-whatsapp.test.ts` | sdkImport:1 adminClient:4,6,23,314 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-14aa17 | `tests/invariants/automation-start-message-flow.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-7d3684 | `tests/invariants/autonomia-delivery-http.test.ts` | adminClient:3,4,212 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-81aad7 | `tests/invariants/autonomia-preview-core.test.ts` | sdkImport:3 env:34,35,36 adminClient:36 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-2f9810 | `tests/invariants/aviso-de-janela-fecha-no-banco.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-3aab05 | `tests/invariants/backfill-de-marcador-nao-apaga-nem-atravessa-organizacao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8174bc | `tests/invariants/baseline-reaplica-sobre-acervo-real.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-161a03 | `tests/invariants/canal-identificador-unico-entre-ativos.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-0c803d | `tests/invariants/capacidades-ausentes.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-a6240a | `tests/invariants/captura-de-clique-e-server-side.test.ts` | adminClient:28,108,109 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ce7703 | `tests/invariants/cascata-lgpd-nao-encolhe.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6c49a7 | `tests/invariants/case-reply-turn.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-b6b719 | `tests/invariants/caso-so-nasce-do-motor.test.ts` | adminClient:372,382 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f6ccd0 | `tests/invariants/central-avisos-destinos-rls.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-34e23f | `tests/invariants/chamada-de-api-tem-prazo-de-trava.test.ts` | adminClient:104,108,110 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-68690c | `tests/invariants/channel-provider-schema.test.ts` | adminClient:39 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-07d467 | `tests/invariants/channel-routing.test.ts` | adminClient:3,6,172 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ece442 | `tests/invariants/cliente-nasce-do-agendamento.test.ts` | adminClient:124,125,145,146,953,960 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-89d4df | `tests/invariants/configuracao-de-smtp-e-server-side.test.ts` | adminClient:98,103 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-77f344 | `tests/invariants/contato-consent-e-auditoria.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-3b27df | `tests/invariants/credencial-de-anuncios-e-server-side.test.ts` | adminClient:153,156 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-95e9c1 | `tests/invariants/credencial-do-google-e-server-side.test.ts` | adminClient:31,118,124 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7fe5db | `tests/invariants/cura-da-demanda-poupa-a-referenciada.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-51a37c | `tests/invariants/definer-nova-nasce-exposta.test.ts` | adminClient:74,142,148,169,170 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-213428 | `tests/invariants/definer-valida-membership.test.ts` | adminClient:141,145 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-92d8ea | `tests/invariants/eco-do-proprio-envio-nao-cria-segunda-mensagem.test.ts` | adminClient:49 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7e873e | `tests/invariants/entrega-sem-meet-sai-sem-link.test.ts` | adminClient:31,32,141 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ceff56 | `tests/invariants/envio-nao-alcanca-conversa-de-outro-tenant.test.ts` | adminClient:23 db:153 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations | PENDING |
| SB-f668fe | `tests/invariants/event-log-drain.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-f4f185 | `tests/invariants/extensoes-declarativas.test.ts` | adminClient:19,34,116,124,184,744 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-703d42 | `tests/invariants/fila-espera-nao-recomeca.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7aa00f | `tests/invariants/followup-engine.test.ts` | env:19 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-cee556 | `tests/invariants/followup-gatilho-etapa.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-5c4884 | `tests/invariants/followup-reactivity.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-46f6fc | `tests/invariants/followup-reenrollment-apos-conclusao.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-91f52b | `tests/invariants/followup-silence-sweep.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-4857e8 | `tests/invariants/fotos-do-catalogo.test.ts` | adminClient:28 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-938167 | `tests/invariants/gate-ativacao.test.ts` | adminClient:232 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-672147 | `tests/invariants/gov-5-visibility-scope.test.ts` | realtime:25 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-ca0605 | `tests/invariants/gov-5e-lead-children-scope.test.ts` | adminClient:114 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d7db48 | `tests/invariants/gov-6-assignee-kind.test.ts` | adminClient:153,155,169,173 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e4e346 | `tests/invariants/gov-hardening-anon-definer.test.ts` | adminClient:14,77,80 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fa0708 | `tests/invariants/gov-helpers.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-8602a1 | `tests/invariants/guarda-contra-replay-do-gateway.test.ts` | cookie:15,76,80,86,93,94 adminClient:67 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO |  | PENDING |
| SB-7d58ef | `tests/invariants/handoff-avisa-o-lead.test.ts` | env:51,52,53 adminClient:53 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-b0b085 | `tests/invariants/hardening-definer-varredura.test.ts` | adminClient:121,362,375,378 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-bdce5d | `tests/invariants/idempotencia-reserva-antes-do-efeito.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-49f13f | `tests/invariants/indices-redundantes-saem.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-aa826d | `tests/invariants/janela-usa-o-relogio-injetado.test.ts` | env:67,68,69 adminClient:69 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-ea4a03 | `tests/invariants/lead-activities-barramento.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-06169a | `tests/invariants/lead-so-liga-a-propria-empresa.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d8975f | `tests/invariants/lgpd-agenda-lock-order.test.ts` | adminClient:23,24 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-50c7b9 | `tests/invariants/lgpd-avatar-anonimizacao.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-4d97b5 | `tests/invariants/lgpd-cura-da-0391-poupa-quem-voltou.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ad18f9 | `tests/invariants/limite-de-envios-por-turno.test.ts` | env:28,29,30 adminClient:30 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-10a1e1 | `tests/invariants/marca-da-instalacao.test.ts` | adminClient:100,106 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7419e6 | `tests/invariants/marca-da-organizacao.test.ts` | adminClient:489,493 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-188440 | `tests/invariants/marca-logo.test.ts` | adminClient:24,223,413,416 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a85736 | `tests/invariants/mcp-nao-alcanca-outro-tenant.test.ts` | adminClient:19 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-08fd87 | `tests/invariants/messages-list-paginacao.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-6b4339 | `tests/invariants/meta-templates-rls.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-ce90f9 | `tests/invariants/modulo-instalado.test.ts` | adminClient:10,61,64,69,103,108 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-20b2ed | `tests/invariants/modulo-suspenso-o-kit-reporta.test.ts` | adminClient:63 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-943a8d | `tests/invariants/molde-de-provisionadora.ts` | adminClient:20,86,211,217,221,227 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3b3d08 | `tests/invariants/nascimento-do-lead.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-546336 | `tests/invariants/o-turno-diz-ao-modelo-que-dia-e-hoje.test.ts` | env:71,72,73 adminClient:73 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-eb1018 | `tests/invariants/on-conflict-aponta-para-constraint-real.test.ts` | db:44,68 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-5e4e67 | `tests/invariants/operador-le-o-turno-certo.test.ts` | sdkImport:32 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-1cdabc | `tests/invariants/operador-nao-pisa-no-humano.test.ts` | sdkImport:37 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-326a98 | `tests/invariants/orcamento-apos-backfill.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-aa5478 | `tests/invariants/orcamento-nasce-desarmado.test.ts` | adminClient:325 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-79cf2b | `tests/invariants/passagem-retencao.test.ts` | adminClient:162 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7ae915 | `tests/invariants/pg-como-supabase.test.ts` | db:59,73,91,104,118,131 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_pipelines | PENDING |
| SB-65fe58 | `tests/invariants/pre-go-live-canal.test.ts` | adminClient:47,51 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6e0cbc | `tests/invariants/proposta-de-dado-do-contato.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8d7c53 | `tests/invariants/prospecting-agent-setup.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-a0287a | `tests/invariants/provisionadora-de-modulo.test.ts` | adminClient:16,84,158,219,222,224 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-05e2fb | `tests/invariants/queue-cap-global-do-claim.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-130735 | `tests/invariants/rascunho-envio-vetado-reescreve.test.ts` | sdkImport:20 env:47,48,49 adminClient:49 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-7c2c98 | `tests/invariants/rbac-config-ia-canais.test.ts` | adminClient:161,163,176 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-26a02c | `tests/invariants/reactivation-schema.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-03fc2a | `tests/invariants/remarcacao-chega-dizendo-que-mudou.test.ts` | adminClient:32,33,142 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b746af | `tests/invariants/remarcar-corrige-o-envio.test.ts` | env:22 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-420e90 | `tests/invariants/retencao-da-conversa-do-caso.test.ts` | adminClient:152 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-525c76 | `tests/invariants/retencao-poda-e-expurgo.test.ts` | adminClient:208,216,232,247,268,273 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e20bca | `tests/invariants/retencao-prospeccao-expurgo.test.ts` | adminClient:204,219 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7ff3d8 | `tests/invariants/risk-state-schema.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-cd41c0 | `tests/invariants/rls-completude-varredura.test.ts` | adminClient:89,121 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1d1068 | `tests/invariants/rls-isolation.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e2a74c | `tests/invariants/roteiro-de-atendimento-humano-opt-out-prazo.test.ts` | adminClient:17 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3aa4a0 | `tests/invariants/roteiro-de-atendimento-superficie-e-fusao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-068943 | `tests/invariants/score-escritor-real-satisfaz-a-constraint.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d2bd6b | `tests/invariants/service-event-origin.test.ts` | adminClient:238,263 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-64befd | `tests/invariants/suporte-auditoria.test.ts` | adminClient:7,11 serverClient:8 env:11 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-331262 | `tests/invariants/suporte-temporario.test.ts` | adminClient:76 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-634954 | `tests/invariants/telefone-do-lid-colisao.test.ts` | rpc:141,152 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_upsert_wa_contact | PENDING |
| SB-e722e1 | `tests/invariants/telefone-do-lid.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-428bfe | `tests/invariants/titulo-do-evento-pessoal-fora-do-alcance.test.ts` | adminClient:23,101,126,127,136,246 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b6d8ef | `tests/invariants/tres-mensagens-um-negocio.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-41b3b6 | `tests/invariants/triagem194-camada-da-ferramenta.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d81224 | `tests/invariants/triagem194-defeitos-alegados.test.ts` | serverClient:55 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-bd2adf | `tests/invariants/turno-nao-responde-duas-vezes.test.ts` | env:31,32,33 adminClient:33 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-12fec4 | `tests/invariants/update-nao-reabre-permissao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-850b7c | `tests/invariants/veto-de-escopo-aparece.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-614652 | `tests/invariants/vocabulario-banco-x-typescript.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-9edb5d | `tests/invariants/webhooks-bulk-events.test.ts` | sdkImport:3 serverClient:6,32 adminClient:53 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f705fc | `tests/invariants/webhooks-inbound.test.ts` | sdkImport:5 adminClient:8,10,20,21,251 rpc:25 | REPLACE_DB_LAYER | F1–F8 | ALTO | rpc:emit_event | PENDING |
| SB-1e45e3 | `tests/invariants/webhooks-rls.test.ts` | adminClient:23,102,104,105 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0d572a | `tests/invariants/webhooks-secret-encryption.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-012826 | `tests/invariants/webhooks-trigger-events.test.ts` | sdkImport:2 adminClient:32 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fedd5a | `tests/journeys/canais-baseline.spec.ts` | sdkImport:22 adminClient:62 env:62 db:66 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-f6e306 | `tests/pg-como-supabase.ts` | env:7 sdkImport:33 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-ce37f5 | `tests/prova-assinado-vs-nao.ts` | sdkImport:30 adminClient:37,51 env:37,51 realtime:56,57 db:67,79,92,99,111,199 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:crm_stages +2 | PENDING |
| SB-9a3c3c | `tests/prova-caminho-de-leads.ts` | sdkImport:22 adminClient:29,37 env:29,37,46 auth:49 realtime:56,57,61,62,66,67 db:82,88,103,104,117 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-ea7d5b | `tests/prova-canal-agent-runs.ts` | sdkImport:19 adminClient:26 env:26 realtime:97 db:54,122,135 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:ai_agent_runs, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-61d3b2 | `tests/prova-canal-board.ts` | realtime:17,57,107,115 sdkImport:30 adminClient:36 env:36 db:169,182,193,212 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-f77819 | `tests/prova-canal-timeline.ts` | sdkImport:17 adminClient:23 env:23,91 realtime:43,45,82,104,106,138 auth:94 db:31,63,78,122,134 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-557c02 | `tests/prova-ciclo-funil.ts` | sdkImport:27 adminClient:33 env:33 db:58,126,130,148,175,196 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_activities, t:crm_leads, t:crm_stages +2 | PENDING |
| SB-e723e8 | `tests/prova-discriminador.ts` | sdkImport:17 adminClient:23,35 env:23,35 realtime:39,41 db:50 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-386ffb | `tests/prova-dois-leads-um-canal.ts` | sdkImport:20 adminClient:27,76 env:27,76 realtime:80,82 db:41,53,97,120,144,145 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-07fcb2 | `tests/prova-inbox-costura.ts` | sdkImport:29 adminClient:92 env:92 db:125,237,258 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-a560f0 | `tests/prova-largura-do-lote.ts` | sdkImport:27 adminClient:34,50 env:34,50 realtime:55,57 db:67,89,100,102 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-2b8278 | `tests/prova-lead-novo-vs-antigo.ts` | sdkImport:17 adminClient:24 env:24 realtime:72,73 db:39,52,105,139,140 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-177f8f | `tests/prova-lote-ou-assinatura.ts` | sdkImport:29 adminClient:36,45 env:36,45 realtime:50,52 db:62,87,94,96 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-89adb7 | `tests/prova-org-fresca-clinica.ts` | sdkImport:42 adminClient:48 env:48 auth:180,407 db:116,143,157,188,219,273 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts, t:crm_lead_activities, t:crm_leads, t:crm_pipelines +5 | PENDING |
| SB-ec2bca | `tests/prova-predicados-de-quadro.ts` | realtime:5,6,39,40,43,50 sdkImport:25 adminClient:32 env:32 db:61,80,82 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-085224 | `tests/prova-quantos-canais.ts` | realtime:4,57,58,68,69 sdkImport:20 adminClient:27,48 env:27,47,48 db:76,89,100 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-62fbeb | `tests/prova-raio-do-silencio.ts` | realtime:4,15,65,71,108,188 sdkImport:35 adminClient:42 env:42 db:196,203,221,228,241,255 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:conversations, t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-a9bc52 | `tests/prova-taxa-de-entrega.ts` | sdkImport:18 adminClient:25,44 env:25,44 realtime:49,50 db:70,83,99,116,118 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-42611d | `tests/prova-vazamento-assinatura.ts` | realtime:54 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-05fef4 | `tests/qa-helpers.ts` | sdkImport:10 db:565,571,577,580,722 rpc:740 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:crm_lead_activities, t:crm_leads, t:messages, rpc:fn_mark_conversation_message | PENDING |
| SB-d53d3a | `tests/setup/vitest.setup.ts` | env:65,66,67 adminClient:67 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-910e3a | `tests/shell/atualizacao-de-fora-nao-pula-o-backup.test.sh` | env:123 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-d41d2e | `tests/shell/atualizacao-para-quem-fala-com-o-banco.test.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d6b870 | `tests/shell/baseline-reaplica-apos-disputa.test.sh` | env:87 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-02c110 | `tests/shell/colisao-de-migration.test.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b78c61 | `tests/shell/deskcomm-contribuir.test.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6c5762 | `tests/shell/e2e-build-recusa-sem-next.test.sh` | env:47 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-8c6412 | `tests/shell/env-e2e-porta-do-stack.test.sh` | env:7,18,94,95,97,123 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-ddd8ab | `tests/shell/extensao-nao-instala.test.sh` | adminClient:27 env:27 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-ec2eb8 | `tests/shell/owner-id-por-email.test.sh` | env:82,83,158,159 adminClient:83,159 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-5a868b | `tests/shell/single-server-installer.test.sh` | env:26,28,31,32,47 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_INTERNAL_URL, SUPABASE_REF, SUPABASE_SETUP_SHA | PENDING |
| SB-3598ef | `tests/shell/single-server-operacao.test.sh` | env:89,90,113,114,230,235 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_REF | PENDING |
| SB-9a819d | `tests/shell/stack-local.test.sh` | env:120,129 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-b63d9d | `tests/shell/ubuntu-production-installer.test.sh` | env:39 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-5ba44d | `tests/shell/update-guard.test.sh` | env:220,383,392,436 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL | PENDING |
| SB-71002d | `tests/shell/waha-backup-volume.test.sh` | env:120 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-15379f | `tests/sonda-agente-move-card.ts` | sdkImport:7 adminClient:14 env:14 db:24,31,41,45,53,56 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_activities, t:crm_leads, t:crm_stages +2 | PENDING |
| SB-5c01f2 | `tests/sonda-ambiguo-na-caixa.ts` | env:45 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-2b725b | `tests/sonda-capacidade-radar-tela.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-522d79 | `tests/sonda-card-reativacao.ts` | sdkImport:11 adminClient:18 env:18 db:26,28,31,66,71 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_reactivations, t:crm_leads, t:crm_stages +2 | PENDING |
| SB-a17048 | `tests/sonda-decisao-chega-no-agente.ts` | env:27 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-6a11f4 | `tests/sonda-decisao-reativacao.ts` | sdkImport:11 adminClient:18 env:18 db:25,31,36,62,71,75 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_lead_activities, t:crm_lead_reactivations, t:crm_leads +3 | PENDING |
| SB-10d0ae | `tests/sonda-dossie-d20-d21.ts` | env:20 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-2fffa3 | `tests/sonda-inbox-cabe-na-tela.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-bf8ab9 | `tests/sonda-inbox-demandas-tela.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-eaefda | `tests/sonda-inbox-redundancia.ts` | sdkImport:15 adminClient:21 env:21 db:28 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-b6a9e6 | `tests/sonda-janela-do-worker.ts` | sdkImport:16 adminClient:22 env:22 db:31,33,37,84 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-547113 | `tests/sonda-linha-envenenada.ts` | sdkImport:14 adminClient:19 env:19,28 auth:31 realtime:42,43 db:57,68 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-3c76bb | `tests/sonda-owner-kind-lote.ts` | sdkImport:17 adminClient:22 env:22,29 auth:32 realtime:43,44 db:54,71 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-cc2806 | `tests/sonda-papel-em-aberto.ts` | sdkImport:25 env:35 auth:38 realtime:53,54,69,70 | REPLACE_KEYCLOAK + REPLACE_REALTIME | F2/F4 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-4e9e1f | `tests/sonda-proxima-acao.ts` | sdkImport:17 adminClient:37 env:37 db:52,60,66,80,104,110 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_pipelines, t:lead_state +2 | PENDING |
| SB-31ddcf | `tests/sonda-pulso-12c.ts` | sdkImport:25 adminClient:31 env:31 db:51,62,121,144 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-03ad82 | `tests/sonda-pulso-visivel.ts` | sdkImport:23 adminClient:29 env:29 db:37,77 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-e021ee | `tests/sonda-radar-isolamento-orgs.ts` | sdkImport:28 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-e2b3c0 | `tests/sonda-rascunho-respeita-recusa.ts` | env:31 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-0a546e | `tests/sonda-reativacao.ts` | sdkImport:11 adminClient:18 env:18 db:26,34,46,56,74,90 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:agent_inbox_items, t:crm_lead_activities, t:crm_lead_reactivations, t:crm_leads +2 | PENDING |
| SB-dd76b1 | `tests/sonda-rede-de-seguranca.ts` | sdkImport:15 adminClient:21 env:21 db:75,78 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-4ebd34 | `tests/sonda-rede-dossie.ts` | sdkImport:11 adminClient:17 env:17 db:34,37,43,106 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-300fc6 | `tests/sonda-replica-identity.ts` | sdkImport:16 adminClient:20 env:20 db:45,50,58 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-264d38 | `tests/sonda-ri-controlada.ts` | sdkImport:14 adminClient:21,45 env:21,37,45 auth:47 realtime:65,66,69,81 db:94,102,112,122 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME | F1–F8/F2/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-b74ee0 | `tests/sonda-score-no-card.ts` | env:33 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-a44dcd | `tests/sonda-split-na-tela.ts` | sdkImport:14 adminClient:20 env:20 db:62 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_versions, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-2a19c1 | `tests/sonda-tailwind-4-antes-depois.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-c89830 | `tests/sonda-tailwind-4.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-1a6f42 | `tests/sonda-tela-agente-move.ts` | sdkImport:12 adminClient:19 env:19 db:38,44,46,80,81 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:crm_leads, t:crm_stages, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-7321fa | `tests/sonda-tick-cron.ts` | env:22 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-ef7501 | `tests/sonda-timeline-ao-vivo.ts` | env:30,60,61 realtime:89,91 | REPLACE_REALTIME | F4 | MÉDIO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL | PENDING |
| SB-696acf | `tests/sonda-veto-na-tela.ts` | env:43 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-0ea9b6 | `tests/sonda-worker-travessia.ts` | sdkImport:15 adminClient:22 env:22 db:30,43,52,64,72,89 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_lead_activities, t:crm_lead_risk_states, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-e3567f | `tests/support/meet-pg-supabase.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-afb6c2 | `tests/support/routing-pg-supabase.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-69eb73 | `tests/unit/a-ferramenta-que-consulta-e-marca.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-7b50e5 | `tests/unit/a-ia-sabe-o-que-a-clinica-atende.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-1245e9 | `tests/unit/activity-write-failure.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ba1076 | `tests/unit/admin-client-exige-filtro-de-tenant.test.ts` | adminClient:25,251 db:75 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:conversations | PENDING |
| SB-535cbb | `tests/unit/agenda-alvo-nao-e-lead-devolve-422.test.ts` | serverClient:44,48 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8cbcb9 | `tests/unit/agenda-emite-atividade.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-0b1ab3 | `tests/unit/agenda-excecao-de-data-no-fuso-da-regra.test.ts` | sdkImport:3 db:203,210 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_availability_exceptions | PENDING |
| SB-25b924 | `tests/unit/agenda-gatilho-leva-o-tipo-real.test.ts` | sdkImport:50 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-21b8d4 | `tests/unit/agenda-google-calendar-fairness.test.ts` | adminClient:4,8,96 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d75ce7 | `tests/unit/agenda-google-callback-route.test.ts` | adminClient:17,25,112,143 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b8e52a | `tests/unit/agenda-google-config.test.ts` | adminClient:26,27 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-810009 | `tests/unit/agenda-google-connect-route.test.ts` | adminClient:22,23 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ca7746 | `tests/unit/agenda-google-credencial-do-banco.test.ts` | adminClient:46,47 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-785c1f | `tests/unit/agenda-google-desconectar-route.test.ts` | adminClient:28,35,69 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8532ec | `tests/unit/agenda-google-push-worker.test.ts` | adminClient:4,13,36,85 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-92b987 | `tests/unit/agenda-google-refresh-worker.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4c0b27 | `tests/unit/agenda-google-selection-routes.test.ts` | serverClient:4,10 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4074c3 | `tests/unit/agenda-meet-routes.test.ts` | serverClient:6,12 adminClient:98,100,139 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-78c36a | `tests/unit/agenda-nao-mente-sobre-id-de-contato.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7bb202 | `tests/unit/agenda-ocupacao-do-google-do-dono.test.ts` | sdkImport:3 adminClient:28 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2d50a1 | `tests/unit/agenda-paginacao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8ba7c0 | `tests/unit/agenda-reativar-tipo.test.ts` | adminClient:10,61,108 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f47b6e | `tests/unit/agenda-recorte-do-google-atravessa-o-limite.test.ts` | sdkImport:58 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-8a74ae | `tests/unit/agenda-travessia-api-hook.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-40ff94 | `tests/unit/agenda-vinculos-contatos.test.tsx` | serverClient:9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-37d824 | `tests/unit/agent-stage-sync.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-5d8c0f | `tests/unit/agente-pausado-nao-atende.test.ts` | adminClient:48,54,221 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-da2732 | `tests/unit/ai-cases-routes.test.ts` | adminClient:18,26,157,158,184,185 serverClient:19,30 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d8a81f | `tests/unit/ai-invocation-sem-agente.test.ts` | adminClient:33,34 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-65815d | `tests/unit/ai-knowledge-sources-post.test.ts` | serverClient:28,37 adminClient:29,38,93 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-92bb0e | `tests/unit/ai-response-bot-veto.test.ts` | adminClient:15,18,98,113,135 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e162c8 | `tests/unit/ai-response-worker-elegibilidade.test.ts` | adminClient:32,44,124,135,148,158 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d5cf81 | `tests/unit/ai-response-worker-model-routing.test.ts` | adminClient:45,51,226 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-98e2aa | `tests/unit/ai-response-worker-sent-via.test.ts` | adminClient:50,56,243,244 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-907c49 | `tests/unit/aniversario-oferece-condicao-que-funciona.test.ts` | sdkImport:49 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-2ca0c4 | `tests/unit/apendice-do-baseline-nao-diverge-da-cadeia.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-17bacd | `tests/unit/api-central-avisos-destino.test.ts` | adminClient:6,10,32,54 serverClient:7,11 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3dfe45 | `tests/unit/api-orcamento-de-ia.test.ts` | adminClient:30,34,156,157,176,177 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-4a766f | `tests/unit/app-da-meta-credencial-do-banco.test.ts` | adminClient:57,58 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6d21e4 | `tests/unit/app-da-meta-save-exige-o-segredo.test.ts` | adminClient:50,51 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d158c9 | `tests/unit/app-da-meta-so-quem-administra-a-instalacao.test.ts` | serverClient:20,40 adminClient:62,63 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7fc712 | `tests/unit/app-da-meta-tela-nao-devolve-segredo.test.tsx` | adminClient:42,44 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-45c56e | `tests/unit/aritmetica-de-timestamp-infinito.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e023fb | `tests/unit/arquivar-agente-arquiva-mesmo.test.ts` | adminClient:29,31,76,99,110 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-94e79d | `tests/unit/arquivar-conversa.test.ts` | adminClient:32,39,132 serverClient:33,38 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-be19e6 | `tests/unit/arrastar-le-o-updated-at-do-cache.test.tsx` | realtime:52,53 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-2a0cba | `tests/unit/assinatura-recusada-deixa-rastro.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-6e800f | `tests/unit/attendant-presence-route.test.ts` | serverClient:38,93 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-eceb8c | `tests/unit/attendants-availability-route.test.ts` | adminClient:20,24,127,128,164,165 serverClient:29,230 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e5217a | `tests/unit/atualizacao-confere-regras-de-isolamento.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b3402a | `tests/unit/atualizacao-conta-a-disputa.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a7b066 | `tests/unit/atualizar-nao-desliga-o-lembrete.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e425e8 | `tests/unit/audit-financeiro-nao-guarda-texto-livre.test.ts` | adminClient:8 serverClient:34,57 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-911535 | `tests/unit/auth-confirm-recusa-nomeia-a-causa.test.ts` | serverClient:31,33 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-028e00 | `tests/unit/auth-falha-alto.test.ts` | serverClient:34 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a63bf3 | `tests/unit/auth-getuser-erro-mudo.test.ts` | serverClient:58 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-3ec1a3 | `tests/unit/automacao-carimbo-de-origem.test.ts` | adminClient:43,44 storage:44 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-6ec619 | `tests/unit/automacao-e-agenda-chamam-o-contato-pelo-nome-escolhido.test.ts` | sdkImport:1 adminClient:4,5 serverClient:12 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3397d4 | `tests/unit/automacao-troca-de-funil-transfere-o-negocio.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e272a2 | `tests/unit/automacoes-de-demonstracao-sao-coerentes.test.ts` | sdkImport:20 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-82c317 | `tests/unit/autonomia-first-publication.test.ts` | adminClient:7 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e75592 | `tests/unit/autonomia-receipt-persistence.test.ts` | sdkImport:2 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-8142ab | `tests/unit/aviso-de-caso-rota-de-configuracao.test.ts` | serverClient:25,30 adminClient:31 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3b5a93 | `tests/unit/aviso-de-caso-seletor-de-conexao.test.ts` | sdkImport:20 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-8300ff | `tests/unit/aviso-de-compromisso-checa-anonimizacao.test.ts` | db:27,120,189,210,212,232 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:agent_inbox_items, t:contacts | PENDING |
| SB-3e7b74 | `tests/unit/aviso-de-mensagem-tem-nome.test.tsx` | realtime:51,52 browserClient:61 db:8 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | MÉDIO | t:contacts | PENDING |
| SB-6a8b50 | `tests/unit/aviso-de-retencao-diz-o-estado-de-agora.test.ts` | adminClient:17 serverClient:18,25 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7c8167 | `tests/unit/badge-espelha-o-filtro.test.ts` | db:171 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-823f6d | `tests/unit/baseline-constraint-reconstruida.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-274792 | `tests/unit/baseline-nao-constroi-o-que-derruba.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-fd9ef0 | `tests/unit/baseline-nao-reconcede-o-que-revoga.test.ts` | adminClient:136,160 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a50e90 | `tests/unit/baseline-no-piso-do-postgres.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-08c3e4 | `tests/unit/baseline-reaplicavel.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-09202b | `tests/unit/branding-fallback-alcancavel.test.ts` | adminClient:191,192,193 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-362703 | `tests/unit/branding-instalacao.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-e49f3c | `tests/unit/branding-logo-arquivo.test.ts` | adminClient:32,125 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9a72d3 | `tests/unit/branding-memo-da-instalacao.test.ts` | adminClient:67,68 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f3ad24 | `tests/unit/branding-saida.test.ts` | adminClient:17,30,33,34 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3be3a8 | `tests/unit/branding.test.ts` | cookie:178,277,282,547 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-849133 | `tests/unit/budget-status-medicao.test.ts` | adminClient:19,26,97,98 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-358a6c | `tests/unit/busca-do-inbox-nao-estoura-a-url.test.ts` | sdkImport:4 db:75 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-a8c72d | `tests/unit/busca-do-inbox-nao-quebra-a-sintaxe.test.ts` | sdkImport:1 db:58 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-7c739a | `tests/unit/busca-social-ignora-ficha-mesclada.test.ts` | db:61,116,117,128,134,141 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-de6893 | `tests/unit/busca-vazia-nao-e-sucesso.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-feaab7 | `tests/unit/campanha-escreve-como-servidor.test.ts` | adminClient:74,84,96 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-562566 | `tests/unit/canais-selecionaveis.test.ts` | sdkImport:18 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-89c7a4 | `tests/unit/canal-arquivado-caminho-de-volta.test.ts` | adminClient:35,48,269 serverClient:36,47 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-5a1b65 | `tests/unit/canal-consulta-por-organizacao.test.ts` | db:83,96 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-1bc1e3 | `tests/unit/canal-datafy-vocabulario.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-1d7b12 | `tests/unit/canal-oficial-atribuicao-de-anuncio.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-88a4b4 | `tests/unit/canal-oficial-token-de-verificacao-vem-da-instalacao.test.ts` | adminClient:46,64 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fab2aa | `tests/unit/canal-zernio-vocabulario.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a4f601 | `tests/unit/captura-de-utm-na-tela.test.ts` | adminClient:44,45 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f485db | `tests/unit/carimbo-da-conversa-falha-nos-tres-canais.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-7c8714 | `tests/unit/caso-tem-tipo-da-rota-ate-a-tela.test.tsx` | sdkImport:36 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-ab06af | `tests/unit/catalogo-nao-corta-cego.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a892c0 | `tests/unit/central-avisos-resolver-em-lote.test.ts` | adminClient:33,36,99,100,161,174 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-86e4c0 | `tests/unit/chamada-de-voz-desligada-por-padrao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-39c0fe | `tests/unit/chamados-visibilidade.test.ts` | adminClient:9 sdkImport:39 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-5f1dda | `tests/unit/channel-adapter-datafy.test.ts` | adminClient:5 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-4f1f38 | `tests/unit/channel-adapter-meta.test.ts` | adminClient:65,66 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-80d17d | `tests/unit/channel-adapter-zernio.test.ts` | adminClient:23 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-cafcf7 | `tests/unit/channel-templates-datafy.test.ts` | adminClient:3 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-46b8d4 | `tests/unit/channel-templates-zernio.test.ts` | adminClient:22 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2d60e0 | `tests/unit/check-do-baseline-nao-diverge-da-cadeia.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-cfa4dc | `tests/unit/clima-da-conversa-no-worker.test.ts` | adminClient:37,51,230,231 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-71efaa | `tests/unit/cobrador-de-passagem-nao-reconhecida.test.ts` | adminClient:60,61 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-79981b | `tests/unit/colisao-de-migration-roda-no-ci.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-56a0b7 | `tests/unit/comanda-invariantes-no-schema.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-84749a | `tests/unit/comando-da-conversa-sem-reavaliar-rls.test.ts` | adminClient:86,87 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b56638 | `tests/unit/comportamento-da-instalacao.test.ts` | env:65,66,67 adminClient:67 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-ae51c4 | `tests/unit/conexao-caida-banner-papel.test.tsx` | browserClient:9 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8999f0 | `tests/unit/consulta-de-membro-que-falha-nao-vira-user-not-in-org.test.ts` | sdkImport:25 db:121 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-fb3083 | `tests/unit/contato-audit-from-to.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-efc759 | `tests/unit/contato-avatar-cache.test.ts` | storage:8,32,71,86,116,118 adminClient:68,69 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-191252 | `tests/unit/contato-duplicado-409.test.ts` | serverClient:20,33 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a1756d | `tests/unit/contatos-busca-por-nome-visivel.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e63a8d | `tests/unit/contatos-duplicados-deteccao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b8ad25 | `tests/unit/contatos-lista-ordenacao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f457fc | `tests/unit/contrato-do-webhook-meta.test.ts` | adminClient:34,35 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9e9866 | `tests/unit/contrato-do-webhook-waha.test.ts` | adminClient:29,30 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-17e81c | `tests/unit/contrato-do-webhook-zernio.test.ts` | adminClient:33 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a881e0 | `tests/unit/conversa-do-caso-rota.test.ts` | serverClient:21,32 adminClient:33 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b74b80 | `tests/unit/conversation-assignment.test.ts` | serverClient:19,24 adminClient:20,25,92 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8e576c | `tests/unit/conversoes-de-anuncio.test.ts` | adminClient:14,16,109,128,146,164 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-47a3de | `tests/unit/convite-revogado-nao-da-acesso.test.ts` | serverClient:61,97,168 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f47d84 | `tests/unit/credenciais-aceita-a-chave-do-jev.test.ts` | serverClient:21 adminClient:22,23 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-15fd53 | `tests/unit/credenciais-aviso-so-decisao.test.tsx` | serverClient:44 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7c8ddc | `tests/unit/credenciais-ia-delete-desliga-o-jev.test.ts` | adminClient:15,18,133,134 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-82f8b5 | `tests/unit/credenciais-ia-delete-ensina-a-saida-do-historico.test.ts` | adminClient:24,28,102,106 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a06707 | `tests/unit/credenciais-ia-delete-instrui-a-reapontar.test.ts` | adminClient:18,22,105,112,136,146 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e17cc1 | `tests/unit/credenciais-ia-rotacao.test.ts` | adminClient:20,25,125,162,180,196 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-933161 | `tests/unit/credencial-de-enfeite-nao-derruba-a-leitura.test.ts` | adminClient:153,155 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-4692c1 | `tests/unit/cron-audita-so-quando-ha-efeito.test.ts` | adminClient:181,182 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b7e161 | `tests/unit/cron-contact-avatars-chatid.test.ts` | adminClient:42,43 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6053a5 | `tests/unit/cron-contact-avatars-corrida.test.ts` | adminClient:37,38 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-dd2b9e | `tests/unit/cron-contact-phones.test.ts` | adminClient:67,68 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fddc45 | `tests/unit/cron-handoff-devolucao.test.ts` | adminClient:122,123 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fc5b1d | `tests/unit/data-do-funil-avisa-a-regra-certa.test.ts` | sdkImport:50 adminClient:63,64 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b1901a | `tests/unit/deep-link-nao-espera-a-lista.test.tsx` | browserClient:89 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-44fa86 | `tests/unit/definir-cliente-pela-agenda.test.ts` | serverClient:39 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-3ff7ef | `tests/unit/desfecho-de-agenda-e-sobre-o-passado.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-58392a | `tests/unit/dispatcher-external-mode.test.ts` | adminClient:14,16,95,116 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a1a443 | `tests/unit/documentacao-aponta-para-o-que-existe.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8c53ba | `tests/unit/documento-ingest-repassa-erro-do-pdf.test.ts` | adminClient:35,36 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-552c3b | `tests/unit/dreno-nao-perde-evento.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-f8406b | `tests/unit/duble-do-handler-compartilhado.test.ts` | db:10,31 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts, t:conversations | PENDING |
| SB-27943e | `tests/unit/e2e-avisa-antes-do-teto.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-95e724 | `tests/unit/e2e-nao-escolhe-a-primeira-linha.test.ts` | db:8,104,160,161,162,163 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agents, t:contacts, t:organizations | PENDING |
| SB-2b307c | `tests/unit/e2e-sessoes-de-canal-sao-limpas.test.ts` | db:32 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations | PENDING |
| SB-4bfa19 | `tests/unit/e2e-supabase-start-tenta-de-novo.test.ts` | cookie:50 env:63 | REPLACE_KEYCLOAK | F2 | ALTO | SUPABASE_INTERNAL_IMAGE_REGISTRY | PENDING |
| SB-2d0c01 | `tests/unit/e2e-workflow-honra-o-env.test.ts` | env:119 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-79aea5 | `tests/unit/editor-de-agente-salva-o-cadastro.test.tsx` | adminClient:69,82,334 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-55fe6f | `tests/unit/entrada-com-google-verificador-viaja.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-32eee0 | `tests/unit/env-aviso-chave-ia.test.ts` | env:23,24,25 adminClient:25 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-90e24b | `tests/unit/env-ddl-fora-do-app.test.ts` | env:9,10,15,40,54 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL | PENDING |
| SB-cf274c | `tests/unit/env-de-teste-dburl.test.ts` | env:52,53,54,56,101,102 adminClient:53,102,116,131,140 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-30d9d8 | `tests/unit/escalacao-retomada.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ec4f4d | `tests/unit/escrita-em-organizations-usa-cliente-admin.test.ts` | adminClient:40,43,182,217,224,231 serverClient:183 db:132,184,187,232,240,247 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-31efee | `tests/unit/etapa-de-perda-do-agente.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6277ad | `tests/unit/etapa-de-perda-no-arrasto.test.ts` | serverClient:24,32 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-27a494 | `tests/unit/etapa-de-perda-no-lote.test.ts` | serverClient:21,27 adminClient:22,28,163 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-08a10c | `tests/unit/event-log-drain-loop.test.ts` | adminClient:18,22,42,81,89 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-17e2a4 | `tests/unit/event-log-loop-avisa-central.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-224756 | `tests/unit/event-log-loop-falha-visivel.test.ts` | adminClient:14,15 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f50adf | `tests/unit/evento-de-fato-nao-fica-pendente.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a28876 | `tests/unit/evento-de-publicacao-tem-dono.test.ts` | db:37 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:event_log | PENDING |
| SB-ead890 | `tests/unit/faixa-de-conexao-caida-vem-do-seam.test.tsx` | adminClient:43 db:76 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-34adda | `tests/unit/fila-nao-empurra-quem-insiste.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-91c677 | `tests/unit/fila-ordena-por-tempo-de-espera.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6c0038 | `tests/unit/fila-tem-uma-definicao-so.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-2a3119 | `tests/unit/followup-aviso-nao-nasce-para-anonimizado.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-77bc84 | `tests/unit/followup-stale-nao-e-retry.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-eabf23 | `tests/unit/followups-de-demonstracao-sao-possiveis.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-c22df7 | `tests/unit/formato-do-token-de-servidor-bate-com-a-spec.test.ts` | adminClient:31,33,66 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b9c9e4 | `tests/unit/fronteira-exige-procedencia-e-o-backfill-cobre-o-legado.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ffc558 | `tests/unit/funil-arquivado-caminho-de-volta.test.ts` | serverClient:29,35 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-488c21 | `tests/unit/fusao-de-contato-herda-a-identidade-social.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a2d162 | `tests/unit/gate-de-publicacao-do-laco-de-event-log.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-2683b8 | `tests/unit/gate-volta-a-autorizacao-por-origem.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e2d3c5 | `tests/unit/gateway-binding.test.ts` | adminClient:20,21,151,152,226,227 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-657ba7 | `tests/unit/gatilho-dos-jobs-de-entrega.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e6d8ca | `tests/unit/gerar-env-e2e-extensoes.test.ts` | env:48 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-61e6d1 | `tests/unit/graph-partner-templates-route.test.ts` | adminClient:30,31 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9a2fab | `tests/unit/handler-de-edicao-devolve-o-updated-at-final.test.ts` | adminClient:36,37 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-08b0c6 | `tests/unit/handler-de-move-devolve-o-updated-at-final.test.ts` | adminClient:43,44 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0a7910 | `tests/unit/handoff-avisa-o-lead.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-b0c9db | `tests/unit/handoff-do-clima-diz-quem-mediu.test.ts` | adminClient:12,13 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-08f67b | `tests/unit/handoff-orchestrator-elegibilidade.test.ts` | adminClient:24,25 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1cbd83 | `tests/unit/health-separa-env-errado-de-servico-caido.test.ts` | env:38,39 adminClient:39 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-9f472a | `tests/unit/helpers/cliente-admin.ts` | adminClient:10,13,20,49,110,121 db:791,988 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:organizations | PENDING |
| SB-92346f | `tests/unit/hierarquia-do-contato.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-cb3df8 | `tests/unit/import-puro-sem-env.test.ts` | adminClient:13,150 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-cfab67 | `tests/unit/inbox-aba-minhas-encanamento.test.tsx` | browserClient:23 serverClient:74 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-bbb651 | `tests/unit/inbox-aba-minhas-sem-fechadas.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d291ed | `tests/unit/inbox-busca-acha-pelo-contato.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-cd7b17 | `tests/unit/inbox-enrichment-route.test.ts` | serverClient:14 adminClient:31,32 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-dc3c2b | `tests/unit/inbox-filtro-de-tag-le-as-duas-caixas.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6ca654 | `tests/unit/inbox-filtro-de-tag.test.ts` | serverClient:42 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-792c67 | `tests/unit/inbox-leads-recentes-com-funil.test.tsx` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-2d3369 | `tests/unit/inbox-leads-recentes-funil-arquivado.test.ts` | serverClient:4,26 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ad0a6d | `tests/unit/inbox-refetch-de-seguranca-chave-estavel.test.tsx` | realtime:21,22 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-a152a8 | `tests/unit/inbox-unread-send.test.ts` | adminClient:18,19 storage:19 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-785389 | `tests/unit/indice-de-contato-ignora-ficha-mesclada.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6200a7 | `tests/unit/ingest-dedup-deixa-rastro.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-eee6ea | `tests/unit/ingestao-do-canal-oficial-por-organizacao.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-6e38cf | `tests/unit/janela-de-atendimento.test.tsx` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-88c89f | `tests/unit/janela-no-fuso-da-organizacao.rotas.test.ts` | adminClient:14,18,64,79 serverClient:15,19 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1656d3 | `tests/unit/kanban-atalho-conversa.test.tsx` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4e8a3f | `tests/unit/kind-check-migration-x-baseline.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-044efa | `tests/unit/kit-e-guia-de-instalacao.test.ts` | env:41 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_ACCESS_TOKEN | PENDING |
| SB-202a7b | `tests/unit/lead-id-do-contato-do-turno.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-1c978c | `tests/unit/lead-nasce-na-moeda-da-organizacao.test.ts` | adminClient:31,32 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2488cb | `tests/unit/lead-so-liga-contato-e-responsavel-da-mesma-empresa.test.ts` | adminClient:109 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1a4a09 | `tests/unit/leads-bulk-assign.test.ts` | serverClient:19,25 adminClient:20,26,129 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-fbfa2d | `tests/unit/leads-import-route.test.ts` | serverClient:38,41 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-36386b | `tests/unit/lgpd-anonimizacao-retoma.test.ts` | serverClient:54,57 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-5e482c | `tests/unit/lgpd-export-prospecting.test.ts` | adminClient:4 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-97c1b7 | `tests/unit/lgpd-exporta-o-que-redige.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e1a3fb | `tests/unit/lgpd-redact-avatar.test.ts` | adminClient:54,55 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c9f4a1 | `tests/unit/lgpd-varredura-completa-a-cascata.test.ts` | adminClient:56,57 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8be061 | `tests/unit/limiar-de-sentimento-vem-do-agente-da-conversa.test.ts` | adminClient:49,58,262,263 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-7609e3 | `tests/unit/link-de-email-tem-uma-query-so.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4490b4 | `tests/unit/log-invocation-grava-o-jev.test.ts` | adminClient:12,13 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-ed328a | `tests/unit/logo-por-tema-rota.test.ts` | adminClient:30,31 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-caef36 | `tests/unit/main-sem-migration-duplicada.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-089429 | `tests/unit/manifest-cita-caminho-que-existe.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-c2f8da | `tests/unit/manifest-x-migrations.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-918ef9 | `tests/unit/marca-logo-spec-ancora-a-rota.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d61d71 | `tests/unit/marca-logo-spec-cada-caso-monta-a-precondicao.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-82689d | `tests/unit/marca-na-fachada-de-acesso.test.tsx` | serverClient:36 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-6676d6 | `tests/unit/marca-nao-pode-assar-o-dominio.test.ts` | env:13,18,51,68,77,78 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-a566ab | `tests/unit/material-em-cp1252-nao-entra-corrompido.test.ts` | adminClient:47,50,67,69 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9c059b | `tests/unit/mcp-agendamento-tools.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-f7a69f | `tests/unit/mcp-escalacao-tools.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7ca738 | `tests/unit/mcp-governance-tools.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f32cb1 | `tests/unit/mcp-handoff-assignment.test.ts` | adminClient:225 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d50795 | `tests/unit/mcp-read-governance.test.ts` | serverClient:18 adminClient:19 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-36b692 | `tests/unit/mcp-retencao-tools.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b5d09c | `tests/unit/mcp-servidor-busca-vazia-nao-e-sucesso.test.ts` | adminClient:13 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8c4cd7 | `tests/unit/media-derive-worker.test.ts` | adminClient:42,43 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-79c903 | `tests/unit/media-persist-worker.test.ts` | adminClient:16,17 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-37e9b6 | `tests/unit/memoria-da-org-origem-cabe-no-check.test.ts` | db:12 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:org_memory_entries | PENDING |
| SB-8ebbd8 | `tests/unit/mensagem-escrita-pela-ia-segue-ia.test.ts` | sdkImport:32 adminClient:85,86 storage:86 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-79b0e2 | `tests/unit/messages-handler-canal-intermediado.test.ts` | sdkImport:50 adminClient:86,87 storage:90 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-32b209 | `tests/unit/messages-handler-desfechos.test.ts` | sdkImport:16 adminClient:36,37 storage:37 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-c006e5 | `tests/unit/messages-handler-eco-duplicado.test.ts` | sdkImport:1 adminClient:8,9 storage:9 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-d44324 | `tests/unit/messages-handler-silencio-ia-apos-humano.test.ts` | sdkImport:16 adminClient:36,37 storage:37 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-7d2a61 | `tests/unit/messaging-presenca-digitando.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-08e4e4 | `tests/unit/meta-ads-captura-de-utm.test.ts` | adminClient:28,29 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-195c60 | `tests/unit/meta-coexistencia-eco-do-app.test.ts` | sdkImport:3 adminClient:300 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-99e212 | `tests/unit/meta-ingest-media.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-708f01 | `tests/unit/mfa-nao-some-em-funcao-recriada.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-910dc8 | `tests/unit/midia-base-url-do-binding.test.ts` | adminClient:72,73 db:282,295,326,351,373,387 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-5563bc | `tests/unit/midia-nao-lida.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-bffd7c | `tests/unit/migracao-nao-arma-ninguem.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-086e2a | `tests/unit/migrations-nao-encolhem-vocabulario.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-5a2ece | `tests/unit/modelo-do-canal-oficial-acha-a-definicao.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d1502f | `tests/unit/modelo-e-sincronizacao-usam-a-credencial-da-sessao.test.ts` | sdkImport:36 adminClient:106,107 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-45f6c5 | `tests/unit/moeda-da-organizacao-se-escolhe-na-tela.test.ts` | adminClient:31,34,92 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-94a0e9 | `tests/unit/nao-lidos-filtra-no-banco.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-08779c | `tests/unit/nome-da-sessao-do-waha.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-2a108e | `tests/unit/numero-interno-de-aviso.test.ts` | sdkImport:31 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-3ab6e2 | `tests/unit/o-fluxo-publicado-nao-abre-vazio.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-0a20c8 | `tests/unit/o-que-o-banco-guarda-fica-canonico.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-c7692e | `tests/unit/o-seam-higieniza-o-uuid-do-modelo.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-c20f17 | `tests/unit/ocupacao-do-google-vem-de-um-lugar-so.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-7395d5 | `tests/unit/onboarding-agente-nao-publicado.test.ts` | adminClient:63 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c17a71 | `tests/unit/onboarding-chave-da-ia-vale-para-a-empresa.test.ts` | adminClient:63 serverClient:74 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9f67b2 | `tests/unit/openrouter-base-url-em-todo-caminho.test.ts` | adminClient:26,27 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-16bf0a | `tests/unit/operacao-do-agente.test.ts` | serverClient:23 sdkImport:26 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-25bf6f | `tests/unit/operador-metrica-e-do-agente-da-tela.test.ts` | serverClient:34,44 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4b00ca | `tests/unit/orcamento-caminho-legado.test.ts` | adminClient:34,58,250 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2b8825 | `tests/unit/orcamento-chave-de-emergencia.test.ts` | env:47,48,49 adminClient:49 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-3c5268 | `tests/unit/orcamento-uma-regua-de-gasto.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-38c253 | `tests/unit/organizacao-ativa-e-deterministica.test.ts` | db:36 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:user_organizations | PENDING |
| SB-ae8ad1 | `tests/unit/organizacoes-cache-por-contexto.test.tsx` | browserClient:8 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-ebafd5 | `tests/unit/organizacoes-criacao-e-troca.test.ts` | adminClient:9 serverClient:10 supabaseHelper:13 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-540242 | `tests/unit/origem-do-site.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-1d67ff | `tests/unit/painel-de-provedores-conta-so-quem-conversa.test.ts` | adminClient:18 serverClient:19 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-863b0c | `tests/unit/painel-nao-promete-o-que-nao-cumpre.test.ts` | adminClient:55 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-19c848 | `tests/unit/papel-do-agente-publicado.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-7863aa | `tests/unit/partner-templates-route.test.ts` | adminClient:30,31 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-aeeb1d | `tests/unit/passagem-registro-e-dedup.test.ts` | adminClient:56,57 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-2af5d6 | `tests/unit/passagens-da-conversa-rota.test.ts` | adminClient:5,37,136,165,181 serverClient:6,36 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-af3ce1 | `tests/unit/patch-de-config-grava-so-o-que-veio.test.ts` | adminClient:16,20,86 serverClient:19 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-090cb8 | `tests/unit/pdf-sem-texto-nao-vira-falha-de-infraestrutura.test.ts` | adminClient:23,27,39,41 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8da68f | `tests/unit/pessoa-marca-fora-da-grade.test.ts` | sdkImport:46 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-32dba7 | `tests/unit/placeholder-do-supabase-recusa-sem-dns.test.ts` | env:41 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-b9eca1 | `tests/unit/playbook-cita-a-ferramenta.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-fda31a | `tests/unit/poda-de-nonces-aceita-os-nomes-das-irmas.test.ts` | adminClient:166 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-f9e3a6 | `tests/unit/ponte-nao-monta-apenas-humano.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-aca020 | `tests/unit/portao-do-webhook-le-a-instalacao-no-processo-frio.test.ts` | adminClient:53,54 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e074f6 | `tests/unit/postgrest-nao-compara-coluna-com-coluna.test.ts` | db:109 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d1ef6c | `tests/unit/pr-alcanca-o-e2e.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-11e715 | `tests/unit/pr-mexe-na-imagem.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-09abf6 | `tests/unit/pr-mexe-no-piso-do-postgres.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a157e4 | `tests/unit/pre-go-live-novos-canais.test.ts` | db:46,47 rpc:28 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, rpc:fn_reserve_channel_connection | PENDING |
| SB-fcc584 | `tests/unit/preco-openai-codigo-e-tabela-concordam.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-4a5bf4 | `tests/unit/prompt-editado-e-o-que-o-motor-executa.test.ts` | adminClient:47,51,120 serverClient:50 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-8c0df2 | `tests/unit/prospecting-agent-setup.test.ts` | sdkImport:3 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-11d2cf | `tests/unit/prospecting-router-compatibility.test.ts` | sdkImport:2 adminClient:14 env:79,90 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_DB_URL | PENDING |
| SB-d53f2b | `tests/unit/prospecting-worker.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-51c646 | `tests/unit/protecao-de-envio-aceita-data-em-branco.test.ts` | adminClient:51,54,160,268 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-053d31 | `tests/unit/provedores-de-decisao-catraca.test.ts` | adminClient:48,49 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e30cdc | `tests/unit/provedores-x-registry.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b5ff66 | `tests/unit/radar-chama-o-contato-pelo-nome-escolhido.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-c47b7a | `tests/unit/radar-ignora-funil-arquivado.test.ts` | sdkImport:1 | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-a70629 | `tests/unit/rag-indexer-grava-a-causa-da-extracao.test.ts` | adminClient:3,29,77 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-6a9968 | `tests/unit/rag-indexer-pula-o-que-nao-mudou.test.ts` | adminClient:3,23,91 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-c0e84a | `tests/unit/rag-nao-ativa-versao-incompleta.test.ts` | adminClient:3,28,75 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e963bf | `tests/unit/rascunho-superado-nao-e-regravado.test.ts` | adminClient:65,78,238 db:466 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents | PENDING |
| SB-a5cfab | `tests/unit/rbac-matrix.test.ts` | serverClient:18,28 adminClient:29,201 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-645c4d | `tests/unit/realtime-assinatura-tem-publicacao.test.ts` | realtime:7,25,121,123 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-73cdda | `tests/unit/realtime-bootstrap.test.tsx` | browserClient:4 realtime:5,10,16,21,27 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-9f3c4c | `tests/unit/realtime-reconecta.test.ts` | realtime:34,129 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-b911e0 | `tests/unit/realtime-retomada-sem-timer-orfao.test.tsx` | realtime:9,32,63 browserClient:27 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-815fcf | `tests/unit/realtime-token-do-socket.test.ts` | realtime:72 browserClient:86,89,102,106,196 sdkImport:88 env:104,105 | REPLACE_REALTIME | F4 | MÉDIO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-ad8990 | `tests/unit/reconstruir-constraint-derruba-antes.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f35086 | `tests/unit/recusa-do-webhook-waha-deixa-rastro.test.ts` | adminClient:43,44 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-0aada6 | `tests/unit/redact-unificado-os-dois-caminhos-chamam-a-mesma-funcao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-9c83cc | `tests/unit/require-role-mfa.test.ts` | serverClient:19,25 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-8f8554 | `tests/unit/resposta-humana-assume-conversa-livre.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-0e686c | `tests/unit/retencao-do-arquivo-de-webhook.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-d6aa8a | `tests/unit/retencao-poda-em-lotes.test.ts` | adminClient:50,51 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-57a85a | `tests/unit/retencao-todo-piso-tem-dono.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-96abea | `tests/unit/revalidacao-que-falha-zera-o-catalogo.test.ts` | adminClient:28,32,113,171 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-3de411 | `tests/unit/risco-uma-gravacao-ruim-custa-uma-linha.test.ts` | adminClient:87 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-435c2a | `tests/unit/roteador-grava-o-roteiro.test.ts` | adminClient:20 env:63,138 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_DB_URL | PENDING |
| SB-d63685 | `tests/unit/roteiro-guardas-do-baseline.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e5fe98 | `tests/unit/rotulo-de-origem-tem-emissor.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-f768ef | `tests/unit/rpc-do-codigo-nasce-no-schema.test.ts` | rpc:2,40,55,70,72,134 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:nome | PENDING |
| SB-12f84d | `tests/unit/saude-dos-canais-oficiais.test.ts` | adminClient:39 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-1c8fb2 | `tests/unit/security-ajustes-de-estilo-org.test.ts` | adminClient:36 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-cbc5a8 | `tests/unit/seed-de-demonstracao-recusa-destino-remoto.test.ts` | env:40,41 adminClient:41 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-a9dd20 | `tests/unit/seed-nao-le-env-local-do-disco.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-392ad0 | `tests/unit/seed-nao-promove-o-admin-compartilhado.test.ts` | rpc:45 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | rpc:fn_que_concede | PENDING |
| SB-43ce02 | `tests/unit/seeds-nao-disputam-organizacao.test.ts` | db:40 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:organizations | PENDING |
| SB-f33bd6 | `tests/unit/sem-marcador-de-conflito.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-309126 | `tests/unit/send-message-handler-nao-ganha-novo-duble.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-a982cc | `tests/unit/send-template-transporte-do-parceiro.test.ts` | sdkImport:1 adminClient:4 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9faec6 | `tests/unit/sonda-do-baseline-ancora-na-ultima-definicao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-2bbb5a | `tests/unit/spec-de-envio-declara-a-janela.test.ts` | db:128 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions | PENDING |
| SB-8ada13 | `tests/unit/suporte-nuvemshop-audit.test.ts` | adminClient:11 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-5046c6 | `tests/unit/suspensao-nao-dispara-campanha.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-516ffb | `tests/unit/sweep-nao-cobra-conversa-encerrada.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-836505 | `tests/unit/tag-de-cliente.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b32059 | `tests/unit/tags-do-contato-rota.test.ts` | serverClient:5,18 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-1b4738 | `tests/unit/tags-vocabulario-sem-atalho-de-platform-admin.test.ts` | serverClient:50 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b9cd06 | `tests/unit/tags-vocabulario.test.ts` | adminClient:75,88 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d2ba17 | `tests/unit/tailwind-tokens.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-20ab2e | `tests/unit/tarefas-rota-nao-tem-porta-dos-fundos.test.ts` | serverClient:35,38 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e1d92f | `tests/unit/team-list-roster.test.ts` | serverClient:16,26 adminClient:29 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-987f9f | `tests/unit/team-role-change.test.ts` | serverClient:16,26 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e0ff84 | `tests/unit/telas-filtram-a-organizacao-ativa.test.ts` | db:149 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:contacts | PENDING |
| SB-427b81 | `tests/unit/telemetria-diz-o-modelo-do-painel.test.ts` | adminClient:37,47,191,192 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-288cf8 | `tests/unit/telemetria-tem-um-leitor-so.test.ts` | db:47,92 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_invocations, t:llm_calls | PENDING |
| SB-389037 | `tests/unit/templates-do-parceiro.test.ts` | storage:341 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-ddc0b2 | `tests/unit/teste-do-agente-usa-status-que-a-coluna-aceita.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-07ca67 | `tests/unit/teto-de-tokens-ativos-da-organizacao.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-2841de | `tests/unit/tool-read-nao-muta.test.ts` | db:97,98,99,100 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-96850d | `tests/unit/tooltip-longo-tem-largura-maxima.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-c4e9ad | `tests/unit/upload-templates-media-security.test.ts` | adminClient:6,11,79,86 storage:83 | REPLACE_DB_LAYER + REPLACE_STORAGE | F1–F8/F3 | ALTO |  | PENDING |
| SB-6d30fc | `tests/unit/usage-nao-conta-em-dobro.test.ts` | db:29,37,55,62 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_invocations, t:llm_calls | PENDING |
| SB-851296 | `tests/unit/valor-de-filtro-nao-vai-ao-audit.test.ts` | adminClient:50 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-466856 | `tests/unit/varredura-anon-e-o-ultimo-bloco.test.ts` | adminClient:17 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-97a9b3 | `tests/unit/vazamento-interno-detector.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-9e1bce | `tests/unit/view-de-ocupacao-nao-tipa-o-titulo.test.ts` | adminClient:39 db:12 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-d30e3a | `tests/unit/voice-transcode.test.ts` | db:36,80 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-e45c40 | `tests/unit/voz-a-midia-abriu-de-verdade.test.tsx` | realtime:30,31 browserClient:40 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-ab2a6e | `tests/unit/voz-audio-em-uma-aba-so.test.tsx` | realtime:30,31 browserClient:40 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-7f3d8c | `tests/unit/voz-consentimento-e-portao-de-verdade.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-b3f24a | `tests/unit/voz-nao-derruba-a-vigilancia-de-canal.test.ts` | adminClient:63,64 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e1dd34 | `tests/unit/voz-numero-discavel.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-44c6d8 | `tests/unit/voz-painel-nao-some-no-chamar.test.tsx` | realtime:27,28 browserClient:37 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-b9242c | `tests/unit/voz-pareamento-api.test.ts` | serverClient:46 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-559a08 | `tests/unit/voz-rotas-de-chamada.test.ts` | serverClient:21,27 | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-79cf19 | `tests/unit/voz-so-sonda-quem-pode-atender.test.tsx` | realtime:30,31 browserClient:42 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-d71d0e | `tests/unit/waha-ignora-o-que-nao-atende.test.ts` | realtime:57 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-1dc8e2 | `tests/unit/waha-ingest-media.test.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-c3537b | `tests/unit/webhook-do-numero-ao-conectar.test.ts` | adminClient:22,31,177 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-e5df5c | `tests/unit/webhook-meta-le-do-banco.test.ts` | adminClient:47,48 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a94a50 | `tests/unit/webhook-waha-pede-reentrega.test.ts` | adminClient:70,71,116,191 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-5997d1 | `tests/unit/worker-responde-com-a-chave-da-instalacao.test.ts` | adminClient:49,50 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-b0685a | `tests/unit/workflows-pinam-o-supabase-cli.test.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-b17288 | `tests/unit/zona-de-perigo-apaga-so-a-propria-org.test.ts` | adminClient:69 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-9ab76a | `tests/vigia-entrega-realtime.ts` | sdkImport:27 adminClient:36,61 env:36,61 realtime:66,68 db:87,93,113,117,127,129 | REPLACE_DB_LAYER + REPLACE_REALTIME | F1–F8/F4 | ALTO | t:crm_lead_activities, t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-4809c5 | `vitest.cercas.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-30f876 | `vitest.db.config.ts` | env:35,36,37 adminClient:37 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
