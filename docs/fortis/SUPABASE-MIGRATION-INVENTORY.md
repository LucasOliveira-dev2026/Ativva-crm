# Inventário de migração do Supabase

> Gerado por `node scripts/fortis/inventory/generate.mjs` sobre o upstream `d1081dc231e1`.
> Não editar à mão: altere as regras em `scripts/fortis/inventory/` e regenere.

**Arquivos com dependência ou menção: 2312** · UNVERIFIED: **0**

## Por área

| Categoria | Arquivos | Detalhe |
| --- | --- | --- |
| RUNTIME | 864 | [inventory/supabase-runtime.md](inventory/supabase-runtime.md) |
| TEST | 851 | [inventory/supabase-test.md](inventory/supabase-test.md) |
| SQL | 218 | [inventory/supabase-sql.md](inventory/supabase-sql.md) |
| HISTORY | 144 | [inventory/supabase-history.md](inventory/supabase-history.md) |
| DOC | 125 | [inventory/supabase-doc.md](inventory/supabase-doc.md) |
| SCRIPT | 71 | [inventory/supabase-script.md](inventory/supabase-script.md) |
| INFRA | 24 | [inventory/supabase-infra.md](inventory/supabase-infra.md) |
| CONFIG | 7 | [inventory/supabase-config.md](inventory/supabase-config.md) |
| AGENT_TOOLING | 4 | [inventory/supabase-agent_tooling.md](inventory/supabase-agent_tooling.md) |
| CI | 3 | [inventory/supabase-ci.md](inventory/supabase-ci.md) |
| GENERATED | 1 | [inventory/supabase-generated.md](inventory/supabase-generated.md) |

## Por classificação

Um arquivo pode ter mais de uma classificação. `DELETE_INFRA_ONLY` remove infraestrutura, nunca funcionalidade.

| Classificação | Arquivos | Substituto Fortis | Fase |
| --- | --- | --- | --- |
| REPLACE_DB_LAYER | 1562 | Camada lib/db (pg + transação com contexto tenant) → repositórios | F1–F8 |
| DELETE_INFRA_ONLY | 210 | Remover/reescrever a infraestrutura Supabase (funcionalidade preservada) | F7–F8 |
| REPLACE_KEYCLOAK | 208 | Keycloak realm fortis, client ativva-crm (OIDC BFF do ATIVVA, externalIdentityId) | F2 |
| REPLACE_RLS | 182 | RLS por GUC app.current_company_id + app.current_user_id (padrão ATIVVA) | F1 |
| HISTORICAL_ALLOWED | 144 | Registro histórico (item 70): permitido, não operacional | — |
| KEEP_DOMAIN_LOGIC | 114 | Manter domínio; só texto/comentário cita Supabase | F8 |
| REPLACE_REALTIME | 94 | Gateway Socket.IO + Redis adapter, sala company:<id> (padrão ATIVVA) | F4 |
| REPLACE_STORAGE | 46 | ObjectStorage (S3/MinIO Fortis), prefixo company/<id>/crm, URL assinada curta | F3 |
| REPLACE_POSTGRES | 21 | PostgreSQL 17 + pgvector próprio (database/), sem plataforma Supabase | F1 |
| REPLACE_REDIS | 9 | Redis Fortis (ioredis) com prefixo crm: | F5 |

## Por risco

| Risco | Arquivos |
| --- | --- |
| ALTO | 1197 |
| MÉDIO | 668 |
| BAIXO | 447 |

## Runtime (app, lib, components, hooks, workers)

| Sinal | Arquivos |
| --- | --- |
| cliente server (RLS via JWT do usuário) | 286 |
| cliente admin (service_role, ignora RLS) | 375 |
| cliente browser | 6 |
| `.from(tabela)` | 565 |
| `.rpc(função)` | 125 |
| `supabase.auth.*` | 81 |
| Realtime | 24 |
| Storage | 24 |
| Upstash | 2 |
| Import direto de `@supabase/*` | 189 |

Tabelas acessadas pelo runtime: **140** · RPCs distintas: **97**

Variáveis de ambiente Supabase (fora do histórico): `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_ADMIN_URL`, `SUPABASE_DB_PASS`, `SUPABASE_DB_PASSWORD`, `SUPABASE_DB_URL`, `SUPABASE_DIR`, `SUPABASE_INTERNAL_IMAGE_REGISTRY`, `SUPABASE_INTERNAL_URL`, `SUPABASE_JWT_SECRET`, `SUPABASE_ORG_ID`, `SUPABASE_PROJECT_REF`, `SUPABASE_PROVISION_LIB`, `SUPABASE_PROVISION_PROJECT`, `SUPABASE_PROVISION_STATE`, `SUPABASE_PUBLIC_URL`, `SUPABASE_REF`, `SUPABASE_REGION`, `SUPABASE_S`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_SETUP_SHA`, `SUPABASE_SETUP_URL`, `SUPABASE_URL`

## RPCs chamadas pelo runtime

`decrypt_cpf`, `emit_event`, `encrypt_cpf`, `fn_accept_team_invite`, `fn_activity_report`, `fn_admin_ai_budget_warning_count`, `fn_agenda_conexoes_google_do_dono`, `fn_agenda_ocupacao_google_do_dono`, `fn_agenda_settings`, `fn_agent_legacy_notice`, `fn_agent_tool_usage`, `fn_agora`, `fn_aplicar_quadro_do_onboarding`, `fn_appointment_change`, `fn_appointment_confirmation_sweep`, `fn_appointment_enrollment_current`, `fn_appointment_recover`, `fn_atrito_metrics`, `fn_attendant_metrics`, `fn_buscar_trechos_das_fontes`, `fn_channel_routing_claim`, `fn_claim_due_followup_enrollments`, `fn_colegas_podem_mexer_na_agenda`, `fn_configurar_pre_go_live_canal`, `fn_contar_mensagem_ignorada`, `fn_conversation_assign`, `fn_create_tenant_with_owner`, `fn_decrypt_oauth`, `fn_definir_aviso_de_caso`, `fn_definir_cliente_pela_agenda`, `fn_definir_colegas_podem_mexer_na_agenda`, `fn_definir_logo_por_tema_da_organizacao`, `fn_definir_marca_da_organizacao`, `fn_demanda_encerrar`, `fn_encerrar_roteiros_vencidos`, `fn_encrypt_oauth`, `fn_end_support`, `fn_estampar_atribuicao_de_anuncio`, `fn_estornar_comanda`, `fn_extensions_admit_catalog`, `fn_extensions_cancel_install`, `fn_extensions_configure`, `fn_extensions_fail_install`, `fn_extensions_finish_install`, `fn_extensions_installation_counts`, `fn_extensions_prepare_install`, `fn_extensions_remove_installation`, `fn_extensions_revert_install`, `fn_finalizar_comanda`, `fn_finish_channel_connection`, `fn_followup_apply_step`, `fn_followup_claim_current`, `fn_followup_inline_settle`, `fn_followup_job_current`, `fn_followup_patch`, `fn_gasto_de_ia_do_mes`, `fn_is_platform_admin`, `fn_lgpd_anonymize_contact`, `fn_lgpd_cascade_redact_contact`, `fn_mark_conversation_message`, `fn_meet_delivery_policy`, `fn_mesclar_contatos`, `fn_mover_leads_em_lote`, `fn_nascer_lead_da_conversa`, `fn_passagem_devolvida`, `fn_proximo_numero_de_comanda`, `fn_publish_ai_agent_version`, `fn_publish_followup_flow_version`, `fn_registrar_jid_do_aviso`, `fn_relatorio_financeiro`, `fn_reply_action`, `fn_reply_delivery_policy`, `fn_reply_prepare`, `fn_reply_receipt_policy`, `fn_reply_record_receipt`, `fn_request_channel_routing`, `fn_reserve_channel_connection`, `fn_resolve_inbound_number`, `fn_routing_unassigned_notice`, `fn_saldo_de_fidelidade`, `fn_service_begin`, `fn_service_boundary`, `fn_service_event_origin`, `fn_service_observe_command`, `fn_service_status`, `fn_set_channel_routing`, `fn_start_support`, `fn_support_callback_write_allowed`, `fn_support_context`, `fn_tags_de_conversa_em_uso`, `fn_upsert_wa_contact`, `fn_upsert_wa_conversation`, `fn_user_role_in_org`, `fn_vocabulario_de_tags`, `fn_vocabulario_de_tags_operar`, `jsonb_set_last_alarm_at`, `retrieve_top_k_chunks`
