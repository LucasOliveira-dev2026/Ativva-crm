# ADR-0005 — Realtime: Supabase Realtime → gateway Socket.IO Fortis

- Estado: **aceito** (F0) · execução: F4

## Contexto

20 consumidores no browser, quase todos via `hooks/realtime/useRealtimeChannel.ts`
(`postgres_changes` herdando RLS, e `broadcast`). Tabelas: `conversations`,
`messages`, `conversation_notes`, `crm_leads`, `crm_lead_activities`,
`ai_agent_runs`, `ai_knowledge_sources`, `voice_calls`, `user_organizations`,
`calendar_appointments`, `crm_lead_risk_states`, `crm_lead_reactivations`;
broadcasts `alerts-platform`, `org:<id>:queue`, saúde/agente do tenant.
O ATIVVA usa Socket.IO com `@socket.io/redis-adapter`, handshake autenticado
pela sessão (nunca token em query string), sala `company:<id>` derivada do
servidor e recusa de broadcast sem `companyId`.

## Decisão

- Mesmo desenho do ATIVVA: gateway Socket.IO + Redis adapter, handshake pela
  sessão do BFF, salas `company:<id>` e `user:<id>` só a partir da identidade
  do servidor. Evento sem tenant é descartado (fail-safe).
- Eventos saem **depois do commit** da transação do tenant (fila pós-commit,
  como `runTenantTransaction` do ATIVVA), não de CDC: nada de replicação
  lógica exposta ao browser.
- A publicação `crm_realtime` (antes `supabase_realtime`) continua sendo o
  catálogo versionado de "quais tabelas são ao vivo"; um teste liga catálogo
  ↔ emissores para que nenhuma tabela perca o ao-vivo em silêncio.
- Visibilidade por conversa (`visibility_mode`), que o Supabase herdava da
  RLS, é aplicada no gateway: o evento carrega o id e o cliente relê pela API
  (RLS) — ou o gateway filtra por sala de atendente. Nunca payload de outro
  escopo.
- `useRealtimeChannel` mantém a API para os consumidores; troca o transporte.
  Reconexão com refetch de segurança (`useRefetchDeSeguranca`) preservada.
