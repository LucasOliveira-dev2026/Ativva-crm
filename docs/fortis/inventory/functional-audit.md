# AUDIT — Auditoria (3)

| ID | Tipo | Rota | Arquivo | API | Banco | Supabase | Testes | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FN-cee934 | API | `/api/v1/audit/export` | `app/api/v1/audit/export/route.ts` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | api_audit_log, organizations, platform_admins, platform_config, platform_support_sessions +1 | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 0 | PRESERVE_ADAPT_FORTIS |
| FN-8c2667 | API | `/api/v1/audit` | `app/api/v1/audit/route.ts` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | api_audit_log, organizations, platform_admins, platform_config, platform_support_sessions +1 | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 1: rbac-matrix.test.ts | PRESERVE_ADAPT_FORTIS |
| FN-4e0c6f | PAGE | `/app/audit` | `app/app/audit/page.tsx` | /api/v1/audit, /api/v1/conversation-tags, /api/v1/leads +1 | organizations, platform_admins, platform_config, user_organizations | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 0 | PRESERVE_ADAPT_FORTIS |
