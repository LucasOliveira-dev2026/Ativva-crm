# API_TOKENS — Tokens de API (S2S) (3)

| ID | Tipo | Rota | Arquivo | API | Banco | Supabase | Testes | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FN-c8f127 | API | `/api/v1/settings/api-tokens/[id]/revoke` | `app/api/v1/settings/api-tokens/[id]/revoke/route.ts` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | api_audit_log, api_tokens, organizations, platform_admins, platform_config +2 | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 0 | PRESERVE_ADAPT_FORTIS |
| FN-221b6c | API | `/api/v1/settings/api-tokens` | `app/api/v1/settings/api-tokens/route.ts` | /api/v1/contacts, /api/v1/conversation-tags, /api/v1/leads +2 | api_audit_log, api_tokens, organizations, platform_admins, platform_config +2 | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 1: rbac-matrix.test.ts | PRESERVE_ADAPT_FORTIS |
| FN-86c0a1 | PAGE | `/app/settings/api-tokens` | `app/app/settings/api-tokens/page.tsx` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca +1 | organizations, platform_admins, platform_config, user_organizations | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 2: clipboard.test.ts, agenda-meet-ui.test.tsx | PRESERVE_ADAPT_FORTIS |
