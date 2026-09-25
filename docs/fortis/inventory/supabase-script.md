# Supabase — SCRIPT (71 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-a3b558 | `scripts/ativar-gate-elegibilidade-ia.ts` | env:44,82,84 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-66b23c | `scripts/backup-db.sh` | env:12,16,17,22 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL | PENDING |
| SB-c0a556 | `scripts/bootstrap-owner.ts` | sdkImport:19 env:41,42,66,67,84 adminClient:42,67 auth:89,92,96 db:112,121,167,188,206,213 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:platform_admins, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL +2 | PENDING |
| SB-453acb | `scripts/checar-colisao-de-migration.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-524c76 | `scripts/check-roles.ts` | sdkImport:1 env:5,6 adminClient:6 db:12 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:user_organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-5377bd | `scripts/check-user.ts` | sdkImport:1 adminClient:6 env:6 auth:8 db:12,15,17 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:platform_admins, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-b8d446 | `scripts/cleanup-e2e-channel-sessions.ts` | sdkImport:1 db:28,37,43,48 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_session_health, t:channel_sessions, t:conversations | PENDING |
| SB-ee8d00 | `scripts/create-test-user.ts` | sdkImport:5 adminClient:14 env:14 auth:44,47,50 db:20,26,62,69,75 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-634f78 | `scripts/dev-crons.ts` | env:30 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-a94eea | `scripts/e2e-build.sh` | env:54,65,78 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-4f7f84 | `scripts/e2e-chega-mensagem.ts` | sdkImport:17 db:38,51,66 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:conversations, t:messages | PENDING |
| SB-350a7c | `scripts/e2e-elegibilidade-helpers.ts` | env:15,25,44,45 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-c3431e | `scripts/e2e-followup-journey-helpers.ts` | env:23,48,49 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-fa900b | `scripts/e2e-retorno-visao-do-agente.ts` | sdkImport:17 adminClient:25 env:25 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-8b8653 | `scripts/flywheel-judge-live.ts` | env:18 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-f40570 | `scripts/gerar-env-e2e.sh` | env:127,128,129,133 adminClient:129 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-73b9a5 | `scripts/inspect-source-schema.ts` | sdkImport:1 env:5,6 adminClient:6 db:11,19,26,30,37 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_knowledge_sources, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-97d893 | `scripts/lib/automacoes-de-demonstracao.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-acf25e | `scripts/lib/env-de-teste.ts` | env:76,77,82,89,95,96 adminClient:77,96,99 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-30a3e1 | `scripts/lib/gate-ativacao.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-008172 | `scripts/lint-channels.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-bf0059 | `scripts/local-env.sh` | adminClient:41,64,67,69,107 env:41,42,105,106,107,108 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-b9ea98 | `scripts/local-stack.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-190848 | `scripts/local-supabase.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-d92e9a | `scripts/observar-escalacao-turno-real.ts` | sdkImport:23 adminClient:31 env:31,34 db:74,85,111,120,140,148 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:ai_provider_credentials, t:channel_sessions, NEXT_PUBLIC_SUPABASE_URL +2 | PENDING |
| SB-40c4e7 | `scripts/pr-mexe-no-piso-do-postgres.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-dae2b4 | `scripts/probe-redirect.ts` | sdkImport:6 env:14,25 auth:17 cookie:26 | REPLACE_KEYCLOAK | F2 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-3b0dd0 | `scripts/prova-modelo-escolhe-retorno.ts` | sdkImport:23 adminClient:29 env:29 db:87,125,135,147,167 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_runs, t:ai_agent_versions, t:ai_agents, NEXT_PUBLIC_SUPABASE_URL +1 | PENDING |
| SB-56f428 | `scripts/provoke-agent-turn.ts` | sdkImport:24 adminClient:31 env:31 db:59,70,95,112,121,167 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials, t:channel_sessions, t:event_log, t:organizations +2 | PENDING |
| SB-dbfbed | `scripts/qa-wave-08.ts` | sdkImport:7 env:28,29,237,357 adminClient:29 cookie:61 db:359 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:ai_agents, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-65e205 | `scripts/qa-wave-09.ts` | sdkImport:7 env:28,29,62 adminClient:29 db:69,82,95,115,125,138 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_knowledge_sources, t:event_log, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY +1 | PENDING |
| SB-7e8780 | `scripts/qa-wave-10.ts` | sdkImport:7 env:28,29,69 adminClient:29 db:73,78,108,120,126,148 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_invocations, t:contacts, t:conversations, t:event_log +4 | PENDING |
| SB-af9997 | `scripts/qa-wave-11.ts` | sdkImport:7 env:31,32,99 adminClient:32 db:82,90,110,129,196,457 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_budgets, t:event_log, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY +1 | PENDING |
| SB-d9bcbf | `scripts/qa-wave-12.ts` | sdkImport:7 env:26,27,246 adminClient:27 db:64,73,102,115,139,221 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:conversations, t:messages +3 | PENDING |
| SB-1ab0f2 | `scripts/repro-automacao-nao-envia.ts` | env:17,18,25 adminClient:18 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-425e23 | `scripts/reset-user-onboarding.ts` | sdkImport:5 adminClient:14 env:14 auth:19 db:25,31,47,56,62 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:organizations, t:user_organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-41fba4 | `scripts/revoke-sessions.ts` | sdkImport:5 adminClient:10 env:10 auth:15,18 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-be565a | `scripts/seed-automacoes-e-followups.ts` | sdkImport:56 db:126,138,165,182,195,207 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:automation_rule_runs, t:automation_rules, t:contacts, t:followup_enrollment_events +3 | PENDING |
| SB-f2b182 | `scripts/seed-crm-vivo.ts` | sdkImport:25 env:32,33,34,35,38 adminClient:33,35 db:221,248,256,293,300,305 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:contacts, t:crm_leads, t:crm_pipelines +5 | PENDING |
| SB-074ca9 | `scripts/seed-e2e-acervo.ts` | sdkImport:17 db:54,63,87,107,133,140 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_agent_versions, t:ai_agents, t:ai_knowledge_sources | PENDING |
| SB-d64475 | `scripts/seed-e2e-agenda.ts` | sdkImport:29 env:36,37,38 adminClient:37 db:71,79,106,116,124 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:attendant_availability, t:calendar_event_types, t:contacts, NEXT_PUBLIC_SUPABASE_ANON_KEY +2 | PENDING |
| SB-4efbde | `scripts/seed-e2e-agente-mcp.ts` | sdkImport:29 env:40,41,42,44,47,48 adminClient:41,48,50 db:62,73,94,106 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:api_tokens, t:organizations, t:user_organizations, NEXT_PUBLIC_SUPABASE_ANON_KEY +4 | PENDING |
| SB-938862 | `scripts/seed-e2e-capacidades-ausentes.ts` | env:33,34,35,37,40 adminClient:34 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-b39100 | `scripts/seed-e2e-capacidades.ts` | sdkImport:23 env:34,37 adminClient:223 db:77,86,102,156,177,192 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agent_runs, t:ai_agent_versions, t:ai_agents, t:api_audit_log +1 | PENDING |
| SB-0646e1 | `scripts/seed-e2e-catalogo-openrouter.ts` | sdkImport:28 db:90,98 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_models | PENDING |
| SB-93d40c | `scripts/seed-e2e-credentials.ts` | sdkImport:36 env:52,57,295,352 auth:150,155,158,277,290,298 db:89,119,131,171,178,185 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:ai_agents, t:organizations, t:user_organizations, SUPABASE_URL | PENDING |
| SB-ea7384 | `scripts/seed-e2e-duas-organizacoes.ts` | sdkImport:32 db:81,98,107,124,132,139 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_event_types, t:organizations, t:user_organizations | PENDING |
| SB-30c5e6 | `scripts/seed-e2e-elegibilidade.ts` | sdkImport:32 db:64,86,98,108,127,134 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:ai_provider_credentials, t:channel_sessions, t:crm_pipelines, t:webhook_sources | PENDING |
| SB-a19129 | `scripts/seed-e2e-escalacao.ts` | sdkImport:19 env:35,36,37,39,42,45 adminClient:36,42 db:79,88,100,109,122,131 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:conversations, t:crm_leads +6 | PENDING |
| SB-2a3f7d | `scripts/seed-e2e-followup-agent.ts` | sdkImport:18 env:31,32,33,35,38,39 adminClient:32,39,41 db:59,67,86,94 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_provider_credentials, t:channel_sessions, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +3 | PENDING |
| SB-70e4e8 | `scripts/seed-e2e-followup-promise.ts` | sdkImport:18 env:31,32,33,35,38,39 adminClient:32,39,41 db:58,65,81,96 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:contacts, t:cron_jobs, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL +3 | PENDING |
| SB-e42601 | `scripts/seed-e2e-funis.ts` | sdkImport:19 env:32,33,34,36,39,40 adminClient:33,40,42 db:63,92,101,128,144 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_pipelines, t:organizations, t:user_organizations, NEXT_PUBLIC_SUPABASE_ANON_KEY +4 | PENDING |
| SB-b224e3 | `scripts/seed-e2e-invite.ts` | sdkImport:18 adminClient:28 env:28 auth:64,98,101 db:42,85,112 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:user_organizations, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-c0ad2a | `scripts/seed-e2e-kanban.ts` | sdkImport:13 env:26,27,28,30,33,34 adminClient:27,34,36 db:60,78,88,112,121 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, t:crm_pipelines, t:crm_stages, NEXT_PUBLIC_SUPABASE_ANON_KEY +4 | PENDING |
| SB-aaaba4 | `scripts/seed-e2e-lgpd.ts` | sdkImport:21 env:34,35,36,38,41 adminClient:35,41 db:106 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-5753a3 | `scripts/seed-e2e-nascimento-do-lead.ts` | sdkImport:18 db:50,59,66,81 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_sessions, t:crm_pipelines | PENDING |
| SB-36dadf | `scripts/seed-e2e-numero-conectado.ts` | sdkImport:30 db:57,68,71,143,163 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:channel_knobs, t:channel_sessions | PENDING |
| SB-8d8abc | `scripts/seed-e2e-queue.ts` | sdkImport:14 env:27,28,29,31,34,35 adminClient:28,35,37 db:56,63,78,85,113,124 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:conversations, NEXT_PUBLIC_SUPABASE_ANON_KEY +4 | PENDING |
| SB-3dfa1b | `scripts/seed-e2e-radar.ts` | sdkImport:14 env:27,28,29,31,34,35 adminClient:28,35,37 db:56,63,78,85,103,111 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:contacts, t:conversations, t:crm_leads +7 | PENDING |
| SB-d449f1 | `scripts/seed-e2e-retorno.ts` | sdkImport:24 env:37,38,39,41,45,46 adminClient:38,46,48 db:68,75,89,96,110,121 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:ai_agents, t:contacts, t:crm_lead_activities, t:crm_leads +8 | PENDING |
| SB-b4ca76 | `scripts/seed-e2e-system-update.ts` | sdkImport:39 env:52,53,54,56,59,60 adminClient:53,60,62 db:77,87,93,117,133,145 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:platform_admins, t:system_update_runs, t:system_version, NEXT_PUBLIC_SUPABASE_ANON_KEY +4 | PENDING |
| SB-817b99 | `scripts/seed-e2e-tenant-b.ts` | sdkImport:17 env:31,32,33,35,38,87 adminClient:32,38 auth:74,83,90,92,98,100 db:113,121,158,166,173,187 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK | F1–F8/F2 | ALTO | t:contacts, t:crm_lead_activities, t:crm_leads, t:crm_pipelines +8 | PENDING |
| SB-ce7b61 | `scripts/seed-e2e-zona-de-perigo.ts` | sdkImport:32 db:76,85,92,109,117,124 | REPLACE_DB_LAYER | F1–F8 | MÉDIO | t:calendar_appointments, t:channel_sessions, t:contacts, t:conversations +7 | PENDING |
| SB-0a8544 | `scripts/seed-risk-states.ts` | sdkImport:16 adminClient:29 env:29 db:36 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:crm_leads, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-9566f4 | `scripts/smoke-llm.sh` | env:59,60,61 adminClient:61 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-2ed340 | `scripts/sonda-do-laco-de-event-log.ts` |  | KEEP_DOMAIN_LOGIC | F8 | BAIXO |  | PENDING |
| SB-f067fe | `scripts/spike-send-template-real.ts` | adminClient:9,18 db:21 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:meta_templates | PENDING |
| SB-0bd20b | `scripts/spike-sync-templates.ts` | adminClient:7,12 db:15,34 | REPLACE_DB_LAYER | F1–F8 | ALTO | t:channel_sessions, t:meta_templates | PENDING |
| SB-c1ed8d | `scripts/test-db.sh` | adminClient:207,208,246,253,259,266 | REPLACE_DB_LAYER | F1–F8 | ALTO |  | PENDING |
| SB-a31830 | `scripts/test-update-com-dados.sh` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
| SB-503e48 | `scripts/vigia-colisao-de-migration.ts` |  | REPLACE_DB_LAYER | F1–F8 | MÉDIO |  | PENDING |
