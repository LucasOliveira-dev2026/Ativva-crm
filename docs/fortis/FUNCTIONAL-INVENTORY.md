# Inventário funcional do upstream

> Gerado por `node scripts/fortis/inventory/generate.mjs` sobre o upstream `d1081dc231e1`.
> Não editar à mão: altere as regras em `scripts/fortis/inventory/` e regenere.

**Pontos de entrada: 577** (páginas, rotas de API, crons, server actions, workers) · UNVERIFIED: **0**

Cada ponto de entrada é seguido pelo grafo de imports até as tabelas (`.from`) e os sinais Supabase que alcança.
Testes ligados = testes que importam um arquivo específico da funcionalidade (arquivos compartilhados por 40+ pontos de entrada não contam).
Nenhuma funcionalidade é classificada como REMOVE: ver `FUNCTIONAL-PARITY-REPORT.md`.

| Módulo | Descrição | Pontos de entrada | Com teste ligado | Status | Detalhe |
| --- | --- | --- | --- | --- | --- |
| AUTH | Autenticação, sessão, MFA, convites | 13 ACTION, 9 PAGE, 6 API | 18/28 | PRESERVE_ADAPT_FORTIS 28 | [detalhe](inventory/functional-auth.md) |
| ONBOARDING | Onboarding e primeiros passos | 10 PAGE, 9 ACTION, 2 API | 15/21 | PRESERVE_ADAPT_FORTIS 21 | [detalhe](inventory/functional-onboarding.md) |
| CRM | CRM: kanban, leads, contatos, funis, tags, atividades, tarefas | 39 API, 10 PAGE, 4 CRON | 45/53 | PRESERVE_ADAPT_FORTIS 53 | [detalhe](inventory/functional-crm.md) |
| INBOX | Atendimento: inbox, conversas, mensagens, atribuição, radar | 30 API, 3 PAGE, 1 CRON | 25/34 | PRESERVE_ADAPT_FORTIS 33, PRESERVE_AS_IS 1 | [detalhe](inventory/functional-inbox.md) |
| WHATSAPP | Canais WhatsApp (WAHA/QR, Meta Cloud API), templates, números | 23 API, 5 PAGE, 3 CRON | 26/31 | PRESERVE_ADAPT_FORTIS 28, PRESERVE_AS_IS 3 | [detalhe](inventory/functional-whatsapp.md) |
| AI | IA: agentes, RAG, skills, memória, roteadores, casos, propostas, uso | 62 API, 20 PAGE, 6 CRON, 1 WORKER | 80/89 | PRESERVE_ADAPT_FORTIS 85, PRESERVE_REIMPLEMENT_INFRA 4 | [detalhe](inventory/functional-ai.md) |
| FOLLOWUP | Follow-up automático e adaptativo | 16 API, 4 CRON, 3 PAGE | 23/23 | PRESERVE_ADAPT_FORTIS 23 | [detalhe](inventory/functional-followup.md) |
| AUTOMATION | Automações QUANDO/SE/ENTÃO | 5 API | 1/5 | PRESERVE_ADAPT_FORTIS 5 | [detalhe](inventory/functional-automation.md) |
| WEBHOOKS | Webhooks inbound/outbound, fontes de captação | 9 API, 2 CRON, 1 PAGE | 8/12 | PRESERVE_ADAPT_FORTIS 11, PRESERVE_REIMPLEMENT_INFRA 1 | [detalhe](inventory/functional-webhooks.md) |
| CAMPAIGNS | Campanhas e supressões | 11 API, 5 PAGE, 1 CRON | 11/17 | PRESERVE_ADAPT_FORTIS 12, PRESERVE_REIMPLEMENT_INFRA 5 | [detalhe](inventory/functional-campaigns.md) |
| AGENDA | Agenda, Google Calendar/Meet, vitrine pública | 20 API, 5 CRON, 3 PAGE | 28/28 | PRESERVE_ADAPT_FORTIS 27, PRESERVE_AS_IS 1 | [detalhe](inventory/functional-agenda.md) |
| VOICE | Chamadas, VoIP/trunk, agente de voz | 13 API, 2 PAGE | 11/15 | PRESERVE_ADAPT_FORTIS 14, PRESERVE_REIMPLEMENT_INFRA 1 | [detalhe](inventory/functional-voice.md) |
| FINANCE | Financeiro: comandas, faturamento, lançamentos | 13 API, 3 PAGE, 1 CRON | 8/17 | PRESERVE_ADAPT_FORTIS 17 | [detalhe](inventory/functional-finance.md) |
| CATALOG | Catálogo de produtos | 4 API, 1 PAGE | 5/5 | PRESERVE_ADAPT_FORTIS 5 | [detalhe](inventory/functional-catalog.md) |
| PROSPECTING | Prospecção | 5 API, 1 CRON, 1 PAGE | 7/7 | PRESERVE_ADAPT_FORTIS 7 | [detalhe](inventory/functional-prospecting.md) |
| ADS | Anúncios Meta, conversões | 5 API, 3 PAGE | 8/8 | PRESERVE_ADAPT_FORTIS 6, PRESERVE_REIMPLEMENT_INFRA 2 | [detalhe](inventory/functional-ads.md) |
| INTEGRATIONS | Nuvemshop, dados externos, extensões | 16 API, 5 PAGE, 2 ACTION | 22/23 | PRESERVE_ADAPT_FORTIS 23 | [detalhe](inventory/functional-integrations.md) |
| MCP | Servidor MCP e ferramentas de agente | 2 API | 2/2 | PRESERVE_ADAPT_FORTIS 2 | [detalhe](inventory/functional-mcp.md) |
| ANALYTICS | Análise, métricas, relatórios | 3 API, 2 PAGE | 4/5 | PRESERVE_ADAPT_FORTIS 5 | [detalhe](inventory/functional-analytics.md) |
| LGPD | LGPD: consentimento, export, redact, retenção | 7 API, 4 PAGE, 4 WORKER, 3 CRON | 11/18 | PRESERVE_ADAPT_FORTIS 15, PRESERVE_REIMPLEMENT_INFRA 3 | [detalhe](inventory/functional-lgpd.md) |
| AUDIT | Auditoria | 2 API, 1 PAGE | 1/3 | PRESERVE_ADAPT_FORTIS 3 | [detalhe](inventory/functional-audit.md) |
| TEAM | Equipe, papéis (RBAC), atendentes | 11 API, 2 PAGE, 1 ACTION | 12/14 | PRESERVE_ADAPT_FORTIS 14 | [detalhe](inventory/functional-team.md) |
| SETTINGS | Configurações do tenant, perfil, segurança, notificações | 26 ACTION, 7 PAGE, 3 API | 20/36 | PRESERVE_ADAPT_FORTIS 34, PRESERVE_AS_IS 1, PRESERVE_REIMPLEMENT_INFRA 1 | [detalhe](inventory/functional-settings.md) |
| API_TOKENS | Tokens de API (S2S) | 2 API, 1 PAGE | 2/3 | PRESERVE_ADAPT_FORTIS 3 | [detalhe](inventory/functional-api_tokens.md) |
| BILLING | Billing | 1 PAGE | 1/1 | PRESERVE_ADAPT_FORTIS 1 | [detalhe](inventory/functional-billing.md) |
| BRANDING | Marca própria / white-label | 2 PAGE, 1 API | 3/3 | PRESERVE_ADAPT_FORTIS 3 | [detalhe](inventory/functional-branding.md) |
| PLATFORM_ADMIN | Admin da plataforma, tenants, impersonation, incidentes | 26 PAGE, 21 API, 1 ACTION | 25/48 | PRESERVE_ADAPT_FORTIS 48 | [detalhe](inventory/functional-platform_admin.md) |
| SYSTEM | Sistema: saúde, atualização, crons de manutenção, event_log | 12 WORKER, 6 API, 1 CRON | 19/19 | PRESERVE_ADAPT_FORTIS 11, PRESERVE_REIMPLEMENT_INFRA 8 | [detalhe](inventory/functional-system.md) |
| PUBLIC | Páginas públicas, legais e de erro | 8 PAGE, 1 API | 5/9 | PRESERVE_ADAPT_FORTIS 6, PRESERVE_AS_IS 2, PRESERVE_REIMPLEMENT_INFRA 1 | [detalhe](inventory/functional-public.md) |
