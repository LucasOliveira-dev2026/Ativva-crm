# Supabase — SQL (217 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-b63198 | `evidence/triagem-15set-l10/883-preparo-google-do-dono.sql` | identity:15 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-f00369 | `evidence/triagem-15set-l11/897-preparo-google-do-dono.sql` | identity:22 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-95b167 | `scripts/selfhost-prelude.sql` | identity:9,59,60,75 supabaseRoles:17,18,20,21,23,24 storage:40,42,50,52 rlsAuthUid:66,68,71 | REPLACE_KEYCLOAK + REPLACE_RLS + REPLACE_STORAGE | F2/F1/F3 | ALTO |  | PENDING |
| SB-f2f06f | `supabase/baseline.sql` | rlsAuthUid:82,127,318,793,822,4770 helper:675,788,797,800,804,814 supabaseRoles:4032,4339,4340,4341,4346,4350 storage:4754,4764,4765,4776,4777,4788 realtime:4848,4849,4862,4864,8311,8459 identity:5075,5076,5077,5844,5908,7195 | REPLACE_KEYCLOAK + REPLACE_REALTIME + REPLACE_RLS + REPLACE_STORAGE | F2/F4/F1/F3 | ALTO |  | PENDING |
| SB-5ecc21 | `supabase/migrations/00001_initial_schema.sql` | identity:15 helper:18 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-51a6ae | `supabase/migrations/20260428195354_0001_platform_base.sql` | helper:6 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-3aa359 | `supabase/migrations/20260428195513_0002_event_log_and_compat.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-02a41c | `supabase/migrations/20260428195708_0003_customer_360.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-169fc5 | `supabase/migrations/20260428200016_0004_whatsapp_waha.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-1bf1d0 | `supabase/migrations/20260428200128_0005_ai_rag.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-4079b6 | `supabase/migrations/20260428200211_0006_nuvemshop_lgpd.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-3525e5 | `supabase/migrations/20260428200331_0007_security_hardening.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-0d290a | `supabase/migrations/20260429013958_0008_tenant_onboarding_state.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-4c0621 | `supabase/migrations/20260429021857_0009_expand_messaging_constraints.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-a29402 | `supabase/migrations/20260429032132_0010_ai_rag_handoff_columns_and_rpcs.sql` | supabaseRoles:78,122 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-53e846 | `supabase/migrations/20260429060000_0012_kb_version_lifecycle_columns.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-ad2c7a | `supabase/migrations/20260429070000_0013_ai_faq_items.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-d47898 | `supabase/migrations/20260429080000_0014_storage_policies_ai_policy.sql` | storage:5,16,28,40 rlsAuthUid:21,33,45 | REPLACE_RLS + REPLACE_STORAGE | F1/F3 | ALTO |  | PENDING |
| SB-3e916a | `supabase/migrations/20260429090000_0015_conversations_rag_optin.sql` | identity:8 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-4495b6 | `supabase/migrations/20260429100000_0017_storage_policies_lgpd_exports.sql` | storage:5,19 rlsAuthUid:24 | REPLACE_RLS + REPLACE_STORAGE | F1/F3 | ALTO |  | PENDING |
| SB-ce6360 | `supabase/migrations/20260429110000_0018_lgpd_redaction_queue.sql` | helper:32,33 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-637a99 | `supabase/migrations/20260429110001_0019_lgpd_cascade_redact_rpc.sql` | supabaseRoles:202 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-5cf518 | `supabase/migrations/20260429120000_0020_organization_suspend_reason.sql` | identity:3,7 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-d1a362 | `supabase/migrations/20260429130000_0021_incidents.sql` | identity:12,14 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-7f593f | `supabase/migrations/20260505140000_0023_ai_agents_module.sql` | rlsAuthUid:39 identity:107,195 helper:123,128,129,208,209,294 supabaseRoles:144 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-31d1bc | `supabase/migrations/20260506000000_0024_ai_agent_publish_fn.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-84a511 | `supabase/migrations/20260506100000_0025_fix_publish_fn_and_realtime_publication.sql` | realtime:14,162,166,171,175,180 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-251aaa | `supabase/migrations/20260706210000_0027_whatsapp_conversation_unification.sql` | supabaseRoles:262,263,264 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-b5dfc4 | `supabase/migrations/20260716120000_0030_config_rls_role_policies.sql` | helper:22,29,34,45,52,57 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-8c4e64 | `supabase/migrations/20260717120000_0031_conversation_assignment_events.sql` | rlsAuthUid:9,98 identity:20,21,22 helper:33,38,45,53 supabaseRoles:106 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-dc6269 | `supabase/migrations/20260717150000_0032_conversation_assignee_kind.sql` | helper:14 rlsAuthUid:18,21,66,80,83,95 supabaseRoles:93,99,164 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-94075a | `supabase/migrations/20260717190000_0034_hardening_revoke_anon_definer.sql` | supabaseRoles:8,37,41,45 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-80d079 | `supabase/migrations/20260717190001_0038_webhooks_automation.sql` | helper:72,79,84,93,100,105 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-19692e | `supabase/migrations/20260717200000_0035_visibility_mode_conversation_rls.sql` | rlsAuthUid:11,37,137,154,196 helper:34,35,69,75,79,85 supabaseRoles:51,205 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-88c4f1 | `supabase/migrations/20260717210000_0036_visibility_mode_lead_rls.sql` | rlsAuthUid:13,44 helper:41,42,80,88,94,102 supabaseRoles:58 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-9fef88 | `supabase/migrations/20260718120000_0037_attendant_metrics.sql` | supabaseRoles:144 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-c33270 | `supabase/migrations/20260718130000_0039_attendant_availability.sql` | helper:10,49,57,66,71,80 rlsAuthUid:12,58,67,72,81 identity:27 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-335783 | `supabase/migrations/20260718150000_0041_webhook_secret_encryption.sql` | supabaseRoles:68,69 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-f74297 | `supabase/migrations/20260718160000_0042_lead_children_visibility_rls.sql` | helper:52,74,79,82,87 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-02fcec | `supabase/migrations/20260718170000_0044_user_orgs_select_manager.sql` | helper:8 rlsAuthUid:22 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-d181d2 | `supabase/migrations/20260719000000_0050_agent_harness.sql` | helper:623,654,655 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-02ef64 | `supabase/migrations/20260721120000_0054_followup_flows.sql` | identity:7 helper:79,87,88,92,93,97 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-eda2e3 | `supabase/migrations/20260721120001_0055_whatsapp_media_bucket.sql` | storage:4,5 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-1e1ba7 | `supabase/migrations/20260722140000_0060_message_templates.sql` | identity:7,11 helper:19,25,34,41 rlsAuthUid:26,36,43 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-289168 | `supabase/migrations/20260722160000_0062_conversation_snooze.sql` | identity:5 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-c53ef1 | `supabase/migrations/20260723120000_0063_conversation_notes.sql` | identity:8 helper:20,26,29 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-8197f2 | `supabase/migrations/20260724000000_0066_human_cases.sql` | identity:33 helper:48,51,54 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-012231 | `supabase/migrations/20260724010000_0067_org_memory.sql` | helper:56,57 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-f030fb | `supabase/migrations/20260724120000_0068_skills_marketplace.sql` | helper:32,33 supabaseRoles:44,47 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-31aafa | `supabase/migrations/20260725010000_0071_crm_lead_activities_barramento.sql` | realtime:191,192,200,202 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-a0fc5b | `supabase/migrations/20260725050000_0075_score_sai_do_lead_para_tabela_propria.sql` | realtime:53,172,176 helper:160,161 | REPLACE_REALTIME + REPLACE_RLS | F4/F1 | ALTO |  | PENDING |
| SB-be15a6 | `supabase/migrations/20260725080000_0078_estado_de_risco_do_negocio.sql` | realtime:57,95,99 helper:83,84 | REPLACE_REALTIME + REPLACE_RLS | F4/F1 | ALTO |  | PENDING |
| SB-da7bac | `supabase/migrations/20260725120000_0082_proposta_de_reativacao_com_prazo.sql` | identity:45 helper:93,94 realtime:123,127 | REPLACE_KEYCLOAK + REPLACE_REALTIME + REPLACE_RLS | F2/F4/F1 | ALTO |  | PENDING |
| SB-dd9bb5 | `supabase/migrations/20260725150000_0113_ai_pricing_backfill.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-e7686f | `supabase/migrations/20260726000000_0085_intent_router.sql` | helper:97,98 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-fb03d3 | `supabase/migrations/20260727000000_0086_knowledge_searches.sql` | helper:38,39,42 rlsAuthUid:42 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-330b4b | `supabase/migrations/20260728120000_0088_meta_templates.sql` | helper:97,98 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-b27a01 | `supabase/migrations/20260728130000_0089_system_self_update.sql` | identity:17,33 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-978709 | `supabase/migrations/20260804220000_0103_uso_de_capacidades_do_agente.sql` | supabaseRoles:101 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-267a38 | `supabase/migrations/20260805180000_0108_revoke_definer_exposto.sql` | supabaseRoles:14,68,69,70,71,72 helper:48,49,50,78,79,80 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-57634f | `supabase/migrations/20260806180000_0115_deletar_org_e_agente.sql` | rlsAuthUid:74 supabaseRoles:113 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-134041 | `supabase/migrations/20260806190000_0133_fn_atrito_metrics.sql` | helper:11 supabaseRoles:190 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-91b4d1 | `supabase/migrations/20260806210000_0134_atrito_abandono.sql` | supabaseRoles:188 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-8975ce | `supabase/migrations/20260806230000_0135_atrito_repeticao_espera.sql` | supabaseRoles:83,307 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-4f73d8 | `supabase/migrations/20260807010000_0136_demandas.sql` | identity:54 helper:124,125,130,131 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-4b3a6a | `supabase/migrations/20260807030000_0137_atrito_denominador_demanda.sql` | supabaseRoles:245 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-25e7e8 | `supabase/migrations/20260807070000_0123_fila_de_confirmacao_de_dado.sql` | identity:64 helper:130,131 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-5f1637 | `supabase/migrations/20260807120000_0126_ai_purpose_bindings.sql` | helper:76,77 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-89c865 | `supabase/migrations/20260807160000_0116_definer_nova_nasce_exposta.sql` | supabaseRoles:13,26,80,91,92,93 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-9e6001 | `supabase/migrations/20260808040000_0139_kind_check_completo.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-be1fdc | `supabase/migrations/20260809100000_0142_camadas_de_seguranca_por_org.sql` | helper:61,62 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-76d468 | `supabase/migrations/20260810150000_0143_guardrail_layers_escrita_de_admin.sql` | supabaseRoles:9 helper:47,54,59 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-80cd69 | `supabase/migrations/20260810160000_0147_relogio_do_banco.sql` | supabaseRoles:94,103 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-5c7638 | `supabase/migrations/20260811090000_0148_caso_anuncia_no_barramento.sql` | supabaseRoles:83 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-61e9f7 | `supabase/migrations/20260811100000_0149_definer_valida_membership.sql` | rlsAuthUid:15,28,31,33,65,73 supabaseRoles:145,150,153 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-274244 | `supabase/migrations/20260811110000_0150_rbac_na_config_de_ia_e_canais.sql` | helper:5,42,48,52,63,69 supabaseRoles:208,209 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-7aea3f | `supabase/migrations/20260813090000_0155_marca_da_instalacao_no_banco.sql` | supabaseRoles:97,98,170 identity:127 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-3a3b94 | `supabase/migrations/20260813120000_0156_quadro_do_onboarding.sql` | supabaseRoles:133,134,148 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-5f693f | `supabase/migrations/20260814090000_0157_marca_por_organizacao.sql` | helper:38 rlsAuthUid:42 supabaseRoles:152,165 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-8c80ad | `supabase/migrations/20260814140000_0158_logo_no_storage.sql` | storage:24,81,88 supabaseRoles:60,305,314,319 | REPLACE_RLS + REPLACE_STORAGE | F1/F3 | ALTO |  | PENDING |
| SB-517bef | `supabase/migrations/20260814210000_0159_o_teto_que_vincula.sql` | supabaseRoles:90,115 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-ea3b49 | `supabase/migrations/20260815120000_0160_ai_budgets_so_escreve_pela_rota.sql` | supabaseRoles:11 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-572bdb | `supabase/migrations/20260820010000_0163_o_arquivo_do_webhook_pode_perder_o_corpo.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-1f5e47 | `supabase/migrations/20260820030000_0164_atribuicao_de_anuncio.sql` | supabaseRoles:42 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-f28839 | `supabase/migrations/20260820160000_0165_identificador_de_canal_unico_entre_ativos.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-9c0528 | `supabase/migrations/20260820170000_0167_poda_da_fila_e_expurgo_do_audit.sql` | supabaseRoles:200,206,210 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-ccb609 | `supabase/migrations/20260824120000_0173_quem_manda_na_conversa.sql` | rlsAuthUid:70,132 supabaseRoles:146 helper:159 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-6b9b83 | `supabase/migrations/20260825120000_0174_historico_de_leads_captados.sql` | helper:152 supabaseRoles:203 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-99fe57 | `supabase/migrations/20260826140000_0181_o_acervo_e_da_organizacao.sql` | supabaseRoles:76,472,476,510 rlsAuthUid:407,433 helper:527,533,537,547,552,555 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-e05a6c | `supabase/migrations/20260826190000_0177_agenda_o_compromisso_marcado.sql` | identity:146,219,249,346,404,536 supabaseRoles:580 helper:656,662,667,678,684,689 rlsAuthUid:707,712,727,751 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-763c6b | `supabase/migrations/20260826210000_0183_a_grade_da_agenda_nao_se_move_sozinha.sql` | realtime:4,64,66,71,75,80 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-271085 | `supabase/migrations/20260826220000_0184_anonimizar_um_contato_deixava_a_agenda_legivel.sql` | supabaseRoles:76 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-2af506 | `supabase/migrations/20260826230000_0185_instalacao_fresca_nao_dava_para_marcar_nada.sql` | supabaseRoles:108,109 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-b78726 | `supabase/migrations/20260827010000_0187_o_espelho_do_google_e_cache_com_prazo.sql` | supabaseRoles:74 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-31feee | `supabase/migrations/20260827040000_0190_o_mesmo_state_do_google_valia_duas_vezes.sql` | identity:30 supabaseRoles:84 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-6ebc77 | `supabase/migrations/20260827060000_0192_a_poda_de_nonces_esqueceu_authenticated.sql` | supabaseRoles:13,38 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-e0fceb | `supabase/migrations/20260827100000_0195_tipo_semeado_nascia_sem_dono.sql` | supabaseRoles:53 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-d168cc | `supabase/migrations/20260827181000_0197_push_subscriptions.sql` | identity:10 helper:27,31 rlsAuthUid:28,32 supabaseRoles:36 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-64c6d3 | `supabase/migrations/20260827183000_0199_push_subscriptions_rbac.sql` | rlsAuthUid:3,16,21 helper:15,20 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-003d7f | `supabase/migrations/20260827190000_0200_o_que_ainda_nao_foi_ao_google.sql` | supabaseRoles:98 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-eddcff | `supabase/migrations/20260827200000_0201_credencial_do_google_pela_tela.sql` | supabaseRoles:60 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-cd3b92 | `supabase/migrations/20260828000000_0202_o_nome_do_atendente_custava_uma_chamada_http.sql` | identity:27,33,52,58,110,114 rlsAuthUid:77,137 supabaseRoles:149 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-784052 | `supabase/migrations/20260831000000_0203_comando_da_conversa.sql` | supabaseRoles:103,104 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-3fb824 | `supabase/migrations/20260901120000_0204_catalogo_de_produtos_da_loja.sql` | helper:119,126,131 supabaseRoles:135,139,140 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-27efb3 | `supabase/migrations/20260903143000_0210_tarefas_do_crm.sql` | identity:60,61 helper:89,96,101 supabaseRoles:105,109,110,166 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-e73a88 | `supabase/migrations/20260903210000_0207_credenciais_de_ia_voltam_a_ser_lidas_por_manager.sql` | helper:28 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-06e1c9 | `supabase/migrations/20260903230000_0211_contact_custom_fields.sql` | supabaseRoles:67 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-d5377b | `supabase/migrations/20260904011000_0209_mover_em_lote_sem_colidir_posicao.sql` | supabaseRoles:107 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-021df0 | `supabase/migrations/20260904051000_0213_conversoes_de_anuncio.sql` | supabaseRoles:83,152 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-813e36 | `supabase/migrations/20260904052000_0214_leitura_de_anuncios.sql` | supabaseRoles:105 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-20e3de | `supabase/migrations/20260904190000_0215_juntar_contatos_duplicados.sql` | rlsAuthUid:75,78,299 supabaseRoles:316,319 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a37cd1 | `supabase/migrations/20260904220000_0217_relatorio_de_atividades.sql` | identity:40 supabaseRoles:158,164 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-d6668f | `supabase/migrations/20260905120000_0231_organizacao_e_acesso_atomicos.sql` | supabaseRoles:39,77 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-65474d | `supabase/migrations/20260905150000_0219_recibo_de_criacao_confiavel.sql` | supabaseRoles:8,56 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-7727fd | `supabase/migrations/20260905160000_0218_configuracao_pre_go_live_atomica.sql` | supabaseRoles:57 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a9067e | `supabase/migrations/20260905210000_0220_suporte_temporario_por_sessao.sql` | identity:6,15,34,40,76,79 supabaseRoles:21,46,55,100,112,119 rlsAuthUid:35,41,42,59,66,141 helper:57,62 storage:527,528,529,530,531,532 | REPLACE_KEYCLOAK + REPLACE_RLS + REPLACE_STORAGE | F2/F1/F3 | ALTO |  | PENDING |
| SB-654b6e | `supabase/migrations/20260906010000_0221_interface_por_vinculo.sql` | realtime:12,13,14 supabaseRoles:53,62,108 identity:97 | REPLACE_KEYCLOAK + REPLACE_REALTIME + REPLACE_RLS | F2/F4/F1 | ALTO |  | PENDING |
| SB-f62c21 | `supabase/migrations/20260906020000_0222_fronteira_do_atendimento.sql` | identity:10 supabaseRoles:30,84,122,147,246,284 rlsAuthUid:376,379,619 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-f1468e | `supabase/migrations/20260906030000_0223_origem_imutavel_do_evento.sql` | supabaseRoles:14,88,187 rlsAuthUid:28,32,40,47 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-b03f37 | `supabase/migrations/20260906120000_0224_presenca_e_recuperacao.sql` | identity:8,88 supabaseRoles:32,138,214,240,309,327 rlsAuthUid:54,68,104,149,314,348 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-5846e8 | `supabase/migrations/20260907010000_0225_google_reconciliacao.sql` | rlsAuthUid:62,69,71,75,76,79 supabaseRoles:146,263,331,362,383,401 helper:397,457 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-9ef003 | `supabase/migrations/20260907020000_0226_meet_e_entrega_transacional.sql` | supabaseRoles:30,38,207,236,250,308 rlsAuthUid:372,373,381,386,417 identity:373 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-339adb | `supabase/migrations/20260907030000_0227_autonomia_e_respostas_revisadas.sql` | identity:65,155,161 supabaseRoles:71,72,74,100,113,142 helper:75 rlsAuthUid:119,127,135 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-c45f81 | `supabase/migrations/20260907040000_0228_roteamento_por_canal_e_reservas.sql` | supabaseRoles:29,31,34,61,84,119 helper:32,35 rlsAuthUid:90,196,255,321 identity:229,234 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-fd6916 | `supabase/migrations/20260907050000_0229_mfa_e_lgpd_agenda.sql` | rlsAuthUid:8,9,10,49,65,87 supabaseRoles:110,112,114,200,222,263 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-16f2ac | `supabase/migrations/20260907060000_0230_reserva_pre_go_live.sql` | rlsAuthUid:9 supabaseRoles:59 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-c5a532 | `supabase/migrations/20260907120000_0233_chamada_de_voz_wacalls.sql` | identity:55 helper:79,80 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-9dba0f | `supabase/migrations/20260907130000_0234_voice_calls_no_realtime.sql` | realtime:2,15,19 | REPLACE_REALTIME | F4 | MÉDIO |  | PENDING |
| SB-4a3f37 | `supabase/migrations/20260908140000_0235_voz_isolamento_lgpd_e_dono.sql` | identity:34,37 helper:59,63,67 supabaseRoles:303,476 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-b6ded2 | `supabase/migrations/20260909190000_0232_nome_de_sessao_waha_cabe_no_teto_do_waha.sql` | rlsAuthUid:58 supabaseRoles:108 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-36756d | `supabase/migrations/20260911120000_0236_opt_in_de_chamada_de_voz.sql` | supabaseRoles:43 identity:64 helper:75,82,87 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-a42d8e | `supabase/migrations/20260911170000_0238_convites_de_time_persistidos.sql` | identity:46,59,62,125 helper:90,101,106 supabaseRoles:110,114,115 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-af4e95 | `supabase/migrations/20260912010000_0237_criador_provisorio_sai_na_entrega.sql` | identity:99 supabaseRoles:120,186,200 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-de1665 | `supabase/migrations/20260912200000_0239_registro_nao_fica_pendente.sql` | supabaseRoles:144,163 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-4550f2 | `supabase/migrations/20260912210000_0247_indices_fks_mensagens_e_runs.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-36a689 | `supabase/migrations/20260912220000_0240_credencial_de_enfeite_nao_derruba_a_leitura.sql` | supabaseRoles:127 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-c5aaaf | `supabase/migrations/20260914170000_0243_chamada_de_api_tem_prazo_de_trava.sql` | supabaseRoles:55 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-87e72b | `supabase/migrations/20260914180000_0244_tags_de_conversa_em_uso.sql` | helper:27 supabaseRoles:59,66 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-07b41c | `supabase/migrations/20260914190000_0249_agenda_prazo_de_expiracao_do_pendente.sql` | rlsAuthUid:34 supabaseRoles:86,89 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-9be3a5 | `supabase/migrations/20260914195200_0245_followup_stale_nao_e_retry.sql` | supabaseRoles:56 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-bc6149 | `supabase/migrations/20260914200000_0250_guarda_contra_replay_do_gateway.sql` | supabaseRoles:102 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-c10839 | `supabase/migrations/20260914210000_0251_acesso_da_ia_volta_a_trilha_do_operador.sql` | supabaseRoles:91 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-8f0e16 | `supabase/migrations/20260914230000_0253_politica_de_cadastro.sql` | supabaseRoles:60 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-932fa4 | `supabase/migrations/20260915000000_0254_lembrete_em_degraus.sql` | supabaseRoles:66 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-6008ae | `supabase/migrations/20260915020000_0256_lead_do_ingest_nao_duplica.sql` | supabaseRoles:88 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-0d26c4 | `supabase/migrations/20260915120000_0257_app_da_meta_da_instalacao.sql` | supabaseRoles:28,73 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-b38ef2 | `supabase/migrations/20260915140000_0258_audit_log_so_recebe_linha.sql` | identity:61 | REPLACE_KEYCLOAK | F2 | ALTO |  | PENDING |
| SB-c8199d | `supabase/migrations/20260915160000_0260_ocupacao_do_google_do_dono.sql` | helper:30,86,111 rlsAuthUid:37,55,85,110 supabaseRoles:118,123,125 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-56c1e4 | `supabase/migrations/20260915170000_0261_titulo_do_evento_pessoal_sai_do_alcance.sql` | supabaseRoles:21,213,230 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-4fbbff | `supabase/migrations/20260915180000_0262_cliente_pela_agenda.sql` | rlsAuthUid:78,303,378,393,403,557 helper:358 supabaseRoles:360,685,995 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-de2257 | `supabase/migrations/20260915193743_0263_etapa_de_perda_grava_o_motivo.sql` | supabaseRoles:120 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-57dc9c | `supabase/migrations/20260915213849_0264_vocabulario_de_tags.sql` | rlsAuthUid:52 supabaseRoles:523,530,533,541 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-032f90 | `supabase/migrations/20260916120000_0266_transferencia_entre_funis_nao_e_perda.sql` | supabaseRoles:276,412 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-0d6e54 | `supabase/migrations/20260916202500_0267_espera_da_fila_nao_recomeca.sql` | supabaseRoles:124,160 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-be0ea5 | `supabase/migrations/20260917120000_0271_extensoes_declarativas.sql` | identity:14,32,49,57,85,130 supabaseRoles:108,109,116,698,699,700 helper:111,117 rlsAuthUid:120 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-269500 | `supabase/migrations/20260917150000_0274_travas_de_suporte_cobrem_toda_tabela.sql` | supabaseRoles:44,51,53,55 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a135c2 | `supabase/migrations/20260918011500_0282_extensoes_perfil_v2.sql` | supabaseRoles:49,311,314,317 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-bd4d78 | `supabase/migrations/20260918100000_0279_caso_so_nasce_do_motor.sql` | supabaseRoles:15,51 helper:52 rlsAuthUid:74,94,101,109,116 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a7e165 | `supabase/migrations/20260918101000_0280_anonimizar_alcanca_o_caso.sql` | supabaseRoles:373 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-5f550c | `supabase/migrations/20260918102000_0281_conversa_do_caso.sql` | identity:73 supabaseRoles:143,148,149,160,204,209 helper:162 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-0592f1 | `supabase/migrations/20260918110000_0291_passagem_para_humano_tem_registro.sql` | identity:157 supabaseRoles:249,259,260,276,324,328 helper:264,278 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-b23e07 | `supabase/migrations/20260918120000_0310_csv_como_material_de_conhecimento.sql` | storage:16 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-37ed94 | `supabase/migrations/20260918121000_0292_aviso_de_caso_no_whatsapp.sql` | identity:108,109 supabaseRoles:261,262,263,264,271,283 helper:273,285 rlsAuthUid:308,310,381,387 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-d6d868 | `supabase/migrations/20260918130000_0293_a_passagem_se_reconhece_sozinha.sql` | supabaseRoles:99,161 rlsAuthUid:134 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-1a135f | `supabase/migrations/20260918140000_0294_o_cliente_repetiu_depois_da_passagem.sql` | supabaseRoles:364 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a6243f | `supabase/migrations/20260918210000_0306_google_ads_captura_de_clique.sql` | supabaseRoles:86,136 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-ca9235 | `supabase/migrations/20260918220000_0308_espera_longa_dorme.sql` | supabaseRoles:160 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a2b220 | `supabase/migrations/20260919103000_0322_automacao_tem_numero_proprio.sql` | supabaseRoles:265 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a0c635 | `supabase/migrations/20260919120000_0321_recibo_de_idempotencia_em_curso.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-40a83c | `supabase/migrations/20260919130000_0323_marcadores_do_contato_na_conversa.sql` | supabaseRoles:47 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-fe8d5e | `supabase/migrations/20260919150500_0326_reconciliacao_das_branches_represadas.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-14c85d | `supabase/migrations/20260919151100_0329_mensagem_por_lembrete.sql` | supabaseRoles:38,59 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-7a27fe | `supabase/migrations/20260919151200_0330_enderecos_salvos_da_agenda.sql` | identity:20 helper:39,46 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-3f838f | `supabase/migrations/20260919153000_0325_protecao_de_tabela_de_organizacao_sai_do_laco.sql` | supabaseRoles:75 helper:108,109 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-7d1379 | `supabase/migrations/20260919154000_0333_transporte_smtp_da_instalacao.sql` | supabaseRoles:64 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-f29914 | `supabase/migrations/20260919160431_0343_agenda_dos_colegas.sql` | rlsAuthUid:52,61,112,113,114,123 supabaseRoles:91,162,202 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-c64853 | `supabase/migrations/20260919190000_0336_cor_das_etiquetas.sql` | supabaseRoles:477 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-672d12 | `supabase/migrations/20260919220000_0339_canal_mudo_sem_numero.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-2ae411 | `supabase/migrations/20260919235000_0340_modulo_instalado.sql` | identity:23 supabaseRoles:103 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-4b19f3 | `supabase/migrations/20260920000000_0341_configuracao_da_instalacao_pela_tela.sql` | supabaseRoles:109,114 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-08d133 | `supabase/migrations/20260920000500_0344_atribuicao_de_anuncio_exige_organizacao.sql` | supabaseRoles:48 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-c358bd | `supabase/migrations/20260920001000_0347_modulo_voip.sql` | helper:14,58,59 identity:43 supabaseRoles:90 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-972488 | `supabase/migrations/20260920001100_0348_voice_calls_sip.sql` | supabaseRoles:545 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-40f754 | `supabase/migrations/20260920001200_0349_voip_trunk_settings.sql` | identity:31 helper:43,49,53 supabaseRoles:57,79 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-bcdf9f | `supabase/migrations/20260920002000_0350_catalogo_financeiro.sql` | helper:113,116 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-d67427 | `supabase/migrations/20260920002100_0351_comanda_e_financeiro.sql` | identity:38,61,93,120,146,190 supabaseRoles:275,400,467 rlsAuthUid:293,365,375,410,440,457 helper:480,483 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-d3f0bb | `supabase/migrations/20260920002300_0353_relatorio_financeiro.sql` | supabaseRoles:116 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-9c59fe | `supabase/migrations/20260920002500_0355_saldo_de_fidelidade.sql` | supabaseRoles:35 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-61f179 | `supabase/migrations/20260920002600_0356_relatorio_por_servico_e_cliente.sql` | supabaseRoles:128 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-22232f | `supabase/migrations/20260920002700_0357_lancamento_recorrente.sql` | identity:53 helper:76,79 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-fb7054 | `supabase/migrations/20260920003000_0359_cascata_lgpd_alcanca_a_comanda.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-5843fb | `supabase/migrations/20260920020000_0363_recusa_permanente_da_agenda_nao_pede_repeticao.sql` | rlsAuthUid:46,51,82 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-afecd8 | `supabase/migrations/20260920120000_0364_a_poda_de_nonces_aceita_os_nomes_das_irmas.sql` | supabaseRoles:105 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-9ec817 | `supabase/migrations/20260920130000_0365_reenviar_o_link_e_acao_propria.sql` | rlsAuthUid:39,44,82 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-dcdc0e | `supabase/migrations/20260920140000_0366_o_compromisso_chega_sem_meet.sql` | supabaseRoles:68 rlsAuthUid:74,79,117 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-0b03b0 | `supabase/migrations/20260921030000_0368_redes_sociais_nativas.sql` | supabaseRoles:12 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-492664 | `supabase/migrations/20260921030100_0369_prospeccao_nativa.sql` | supabaseRoles:57 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-148d0f | `supabase/migrations/20260921030200_0370_prospeccao_anonimizacao.sql` | supabaseRoles:26,71,558 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-dba3c7 | `supabase/migrations/20260921040000_0372_banco_externo_do_agente.sql` | identity:71 helper:100,112,116 supabaseRoles:134 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-fc2520 | `supabase/migrations/20260921040100_0373_limites_configuraveis_do_banco_externo.sql` | supabaseRoles:59 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-254163 | `supabase/migrations/20260921060000_0375_campanhas.sql` | identity:94,95 supabaseRoles:304,310,359,398,399,424 helper:381,388,393,407,414,419 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-c8e4be | `supabase/migrations/20260921060100_0376_campanhas_templates_e_exclusoes.sql` | identity:39,40,68 supabaseRoles:117,150,151,175,176 helper:133,140,145,158,165,170 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-995776 | `supabase/migrations/20260921060200_0377_campanha_rodizio_de_numeros.sql` | helper:91,98,103 supabaseRoles:108,109 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-0b8927 | `supabase/migrations/20260921060400_0379_campanha_na_cascata_lgpd.sql` |  | REPLACE_POSTGRES | F1 | BAIXO |  | PENDING |
| SB-4e8549 | `supabase/migrations/20260921070000_0380_hierarquia_do_anuncio.sql` | supabaseRoles:94 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-f5b58a | `supabase/migrations/20260921080000_0381_meta_ads_captura_de_utm.sql` | supabaseRoles:73,124 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-943c4c | `supabase/migrations/20260922140000_0383_pedidos_de_cadastro.sql` | identity:47,50 supabaseRoles:76 | REPLACE_KEYCLOAK + REPLACE_RLS | F2/F1 | ALTO |  | PENDING |
| SB-be5b1c | `supabase/migrations/20260923140000_0390_fotos_no_catalogo.sql` | storage:28,51 | REPLACE_STORAGE | F3 | MÉDIO |  | PENDING |
| SB-2ed3d7 | `supabase/migrations/20260923220000_0396_conversa_fica_com_quem_atendeu.sql` | supabaseRoles:92 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-e51109 | `supabase/migrations/20260923230000_0397_roteiro_encerra_com_humano_e_prazo.sql` | supabaseRoles:132 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-04483c | `supabase/migrations/20260924060000_0400_moeda_do_negocio_da_conversa.sql` | supabaseRoles:59 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-affc30 | `supabase/migrations/20260924180000_0404_comando_da_conversa_sem_reavaliar_rls.sql` | helper:19 supabaseRoles:99 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-60d07f | `supabase/migrations/20260924190000_0405_revogacao_de_membro_desatribui_conversas.sql` | rlsAuthUid:61 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-05f06b | `supabase/migrations/20260924200000_0406_logo_por_tema.sql` | supabaseRoles:178,180,182 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-3042a9 | `supabase/migrations/20260924200100_0407_social_identity_na_fusao.sql` | rlsAuthUid:55,58,327 supabaseRoles:344 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-7914ca | `supabase/migrations/20260924200200_0408_prospeccao_vence_no_cron.sql` | supabaseRoles:75,82 | REPLACE_RLS | F1 | ALTO |  | PENDING |
| SB-a7d8bc | `supabase/migrations/20260925163550_0413_provedor_personalizado.sql` | supabaseRoles:65,66 | REPLACE_RLS | F1 | ALTO |  | PENDING |
