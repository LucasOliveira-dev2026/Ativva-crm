# ADR-0006 — `event_log`, outbox de integração e n8n

- Estado: **proposto** (F0) · execução: F5/F6

## Contexto

O Deskcomm tem `event_log` (fila/barramento interno drenado por
`lib/event-log/drain*.ts`, alimenta automações, follow-up, webhooks de saída)
e 32 crons HTTP (`/api/v1/cron/*`). O ATIVVA tem o outbox `IntegrationEvent`
(contrato `automation-events/v1`, HMAC, retry, DLQ) que só serve para eventos
que **saem** para o n8n.

## Decisão

- `event_log` é barramento **de domínio** do CRM (quem reage é o próprio CRM:
  motor QUANDO/SE/ENTÃO, follow-up, webhooks do cliente) → `KEEP_CRM_DOMAIN`.
- Eventos que **saem** do CRM para orquestração externa usam o contrato
  Fortis do ATIVVA (envelope `automation-events/v1`: `eventId`, `eventType`,
  `occurredAt`, `companyId`, `correlationId`, `data`), com o mesmo desenho de
  outbox. Não há dois outboxes para a mesma finalidade: um barramento interno,
  uma saída de integração.
- Crons: o CRM continua dono da regra; só o **relógio** genérico pode ir para
  o n8n (padrão HYBRID do ATIVVA: uma chave de dono, nunca dois relógios).
- Eventos cross-produto (`crm.lead.created`, `crm.deal.won`, …) só nascem
  com consumidor real.
- n8n nunca acessa o banco do CRM; entra pela API com credencial própria.
