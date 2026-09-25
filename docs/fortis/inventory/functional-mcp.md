# MCP — Servidor MCP e ferramentas de agente (2)

| ID | Tipo | Rota | Arquivo | API | Banco | Supabase | Testes | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FN-9e430c | API | `/api/mcp` | `app/api/mcp/route.ts` | /api/v1/agenda, /api/v1/ai, /api/v1/attendants +7 | agent_case_events, agent_cases, agent_inbox_items, ai_agent_versions, ai_agents +56 | adminClient, auth, cookie, db, realtime, redis, rpc, sdkImport, serverClient, storage, supabaseHelper | 183: route.test.ts, route.test.ts +181 | PRESERVE_ADAPT_FORTIS |
| FN-6472f9 | API | `/api/v1/mcp/tools` | `app/api/v1/mcp/tools/route.ts` | /api/v1/agenda, /api/v1/ai, /api/v1/attendants +8 | agent_case_events, agent_cases, agent_inbox_items, ai_agent_versions, ai_agents +55 | adminClient, auth, cookie, db, realtime, rpc, sdkImport, serverClient, storage, supabaseHelper | 171: route.test.ts, route.test.ts +169 | PRESERVE_ADAPT_FORTIS |
