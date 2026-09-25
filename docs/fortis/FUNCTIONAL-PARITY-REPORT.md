# Relatório de paridade funcional — upstream → ATIVVA CRM

Matriz de paridade entre o DeskcommCRM (upstream, ver [`upstream.json`](upstream.json))
e o fork Fortis. Regra: **nenhuma funcionalidade sai porque dependia de Supabase**;
só a infraestrutura muda. Chatwoot não faz parte da arquitetura: Inbox,
Conversas e WhatsApp permanecem do Deskcomm.

## Como uma linha muda de estado

| Estado         | Significa                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `NOT_VERIFIED` | Ainda não provado no fork (estado inicial de toda linha)                                            |
| `PARITY_PASS`  | A evidência da coluna "Prova" roda **contra a infraestrutura Fortis** (Postgres próprio, Keycloak, Socket.IO, S3) e passa |
| `PARITY_FAIL`  | A prova roda e falha, ou a funcionalidade perdeu comportamento                                      |

Prova aceita, em ordem de preferência: jornada E2E dourada → suíte de invariantes
de banco (`tests/invariants`) → testes de rota/unidade existentes do upstream,
reescritos para a nova infraestrutura. Mock não fecha paridade de Postgres,
Keycloak, Realtime ou Storage. Um teste só pode ser reescrito, nunca apagado
junto com a funcionalidade.

Critério de saída (`READY FOR ATIVVA INTEGRATION = YES`): `PARITY_FAIL = 0`,
`NOT_VERIFIED = 0` **e** o gate zero-Supabase verde.

## Baseline do upstream

Antes de qualquer troca de infraestrutura, as suítes do upstream foram medidas
no commit base, para que "passava antes" seja fato e não suposição. Números em
[`PLATFORM-MIGRATION-REPORT.md`](PLATFORM-MIGRATION-REPORT.md#baseline-de-testes-do-upstream).

## Matriz por módulo

Pontos de entrada e testes ligados vêm de [`FUNCTIONAL-INVENTORY.md`](FUNCTIONAL-INVENTORY.md).

| Módulo | Funcionalidades cobertas | Infra a trocar | Prova de paridade | Estado |
| --- | --- | --- | --- | --- |
| CRM | kanban, leads, contatos, customer 360, funis, estágios, tags, motivos de perda, atribuição, transferência, vocabulário por nicho, fractional indexing, histórico, atividades, tarefas | DB, RLS, Realtime (`crm_leads`, `crm_lead_activities`) | invariantes `crm-*`, rotas `leads`/`contacts`/`pipelines`; jornadas create/move lead, contact | NOT_VERIFIED |
| KANBAN | quadro ao vivo, mover em lote, ordenação fracionária | Realtime `crm_leads`, RPC `fn_mover_leads_em_lote` | jornada move lead + evento de sala | NOT_VERIFIED |
| INBOX | inbox, conversas, mensagens, atendentes, fila, distribuição, respostas rápidas, radar, notas, passagens | DB, RLS (`visibility_mode`), Realtime (`conversations`, `messages`, `conversation_notes`) | invariantes de visibilidade; jornada Inbox | NOT_VERIFIED |
| ASSIGNMENT | atribuição e transferência auditadas, roteamento, devolução de handoff | RPC `fn_conversation_assign`, `fn_channel_routing_claim` | invariantes de roteamento; jornada assignment | NOT_VERIFIED |
| WHATSAPP WAHA | QR, sessão, reconexão, saúde do canal, mídia, status, webhooks | Storage `whatsapp-media`, DB | webhook WAHA + mídia no S3; jornada inbound/outbound | NOT_VERIFIED |
| WHATSAPP META | Cloud API, multi-número, templates, webhooks, janela 24h | DB | webhook Meta; jornada outbound template | NOT_VERIFIED |
| ANTI-BANIMENTO | throttle, jitter, janela de horário, STOP detection, supressões | DB | testes `lib/messaging`/`opt-out` | NOT_VERIFIED |
| AI AGENTS | agentes, versões, execuções, guardrails, AI assignee, provedores, orçamento/teto | DB, Realtime `ai_agent_runs`, Upstash (rate limit) | invariantes `agent-*`; jornada AI response | NOT_VERIFIED |
| RAG | fontes, embeddings (pgvector), recuperação, isolamento por tenant | DB, Storage, Upstash (debounce), RPC `retrieve_top_k_chunks` | invariantes RAG; jornada RAG | NOT_VERIFIED |
| MEMORY / SKILLS | memória, skills, assets de skill | Storage `skill-assets` | testes `lib/ai/skills` | NOT_VERIFIED |
| HANDOFF / SENTIMENT | roteamento de intenção, sentimento, handoff IA → humano | Realtime (fila `org:<id>:queue`) | jornada handoff | NOT_VERIFIED |
| CASES / PROPOSALS / FLYWHEEL | casos, avisos, propostas, evolução da IA, flywheel | DB | testes de rota `ai/*` | NOT_VERIFIED |
| FOLLOW-UP | automático, adaptativo, gatilho por funil e por caso, conversa esfriada | DB, relógio (cron) | invariantes `followup-*`; jornada follow-up | NOT_VERIFIED |
| AUTOMATIONS | QUANDO/SE/ENTÃO e todas as ações existentes | DB, event_log | invariantes `automation-engine`; jornada automation | NOT_VERIFIED |
| WEBHOOK IN | fontes de captação, inbound genérico | DB | testes `webhooks/in` | NOT_VERIFIED |
| WEBHOOK OUT | entrega, atividade, reenvio, tracking | DB, cron | testes `webhook-replay` | NOT_VERIFIED |
| CAMPAIGNS | campanhas, templates, supressões | DB | testes de rota `campaigns` | NOT_VERIFIED |
| AGENDA | agenda, Google Calendar/Meet, vitrine pública, lembretes | DB, cron | invariantes `agenda-*` | NOT_VERIFIED |
| VOICE | chamadas, VoIP/trunk, agente de voz, alerta de chamada | Realtime `voice_calls` | testes `voice` | NOT_VERIFIED |
| FINANCE | comandas, faturamento, lançamentos recorrentes, fidelidade | DB | testes `financeiro` | NOT_VERIFIED |
| CATALOG | produtos, fotos | Storage `catalog-photos` | testes `products` | NOT_VERIFIED |
| PROSPECTING | prospecção | DB, cron | testes `prospecting` | NOT_VERIFIED |
| ADS | Meta Ads, conversões, atribuição de anúncio | DB | testes `ads`/`conversoes` | NOT_VERIFIED |
| ANALYTICS | funil, performance, por atendente, métricas, evolução da IA, uso, custos | DB (RPCs de métrica) | testes `metrics`/`reports`; jornada analytics | NOT_VERIFIED |
| AUDIT | audit log append-only, ator | DB, identidade do ator | invariantes de audit | NOT_VERIFIED |
| LGPD | consentimento, export, anonimização, redact, retenção | DB, Storage `lgpd-exports`, cron | invariantes `lgpd-*`; jornada LGPD | NOT_VERIFIED |
| TEAM / RBAC | equipe, convites, papéis, escopo de visualização | Auth (convite), RLS | invariantes RBAC; jornada team | NOT_VERIFIED |
| MULTI-TENANCY | A não lê/altera/recebe realtime/acessa mídia de B | RLS, Realtime, Storage | suíte de isolamento A/B contra a stack Fortis | NOT_VERIFIED |
| AUTH / SECURITY | login, sessão, MFA, recuperação, revogação de vínculo | Supabase Auth → Keycloak | jornada login + MFA no Keycloak | NOT_VERIFIED |
| ONBOARDING | boas-vindas, funil, WhatsApp, IA, convite, teste | Auth, DB | jornada onboarding | NOT_VERIFIED |
| SETTINGS | tenant, perfil, segurança, notificações, tags, templates | DB, Auth | jornada settings | NOT_VERIFIED |
| API TOKENS | tokens S2S (mantidos, não trocados por sessão) | DB | testes `api-key` | NOT_VERIFIED |
| BILLING | estado exato do upstream a registrar (não inventar) | — | leitura do código + teste existente | NOT_VERIFIED |
| BRANDING | marca própria, logos | Storage `brand-logos` (público no upstream) | testes `marca` | NOT_VERIFIED |
| PLATFORM ADMIN | tenants, usuários, incidentes, impersonation/suporte | Auth, DB (`fn_start_support`) | testes `admin` | NOT_VERIFIED |
| NUVEMSHOP | OAuth, sync | DB, cifra OAuth | testes `nuvemshop` | NOT_VERIFIED |
| MCP | servidor MCP, ferramentas de agente | DB (cliente admin) | testes `lib/mcp` | NOT_VERIFIED |
| EXTENSIONS / DADOS EXTERNOS | extensões, bancos externos | DB | testes `extensions`/`external-db` | NOT_VERIFIED |
| SYSTEM | saúde, crons de manutenção, event_log, atualização | DB, installer | testes `event-log` | NOT_VERIFIED |
| BACKUP | backup do Postgres CRM + objetos + config | scripts Supabase → padrão VPS Fortis | restore testado em ambiente descartável | NOT_VERIFIED |
| RESTORE | restore verificado | idem | idem | NOT_VERIFIED |
| UPDATE | atualização segura (substituto do updater upstream) | installer | ensaio de upgrade + rollback | NOT_VERIFIED |

## Jornadas douradas

Estado de cada jornada E2E exigida como gate de paridade:

| Jornada | Estado |
| --- | --- |
| login, onboarding, create lead, move lead, contact | NOT_BUILT |
| inbound WhatsApp, outbound WhatsApp, Inbox, assignment, handoff | NOT_BUILT |
| automation, follow-up, AI response, RAG, file/media | NOT_BUILT |
| analytics, LGPD, team, settings | NOT_BUILT |

## Totais

| Estado | Linhas |
| --- | --- |
| PARITY_PASS | 0 |
| PARITY_FAIL | 0 |
| NOT_VERIFIED | 43 |

**READY FOR ATIVVA INTEGRATION = NO**
