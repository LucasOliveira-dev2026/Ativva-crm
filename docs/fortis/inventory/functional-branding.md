# BRANDING — Marca própria / white-label (3)

| ID | Tipo | Rota | Arquivo | API | Banco | Supabase | Testes | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FN-e39e77 | PAGE | `/admin/marca` | `app/admin/(protected)/marca/page.tsx` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | api_audit_log, organizations, platform_admins, platform_branding, platform_config +2 | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 22: branding-barra-do-navegador.test.ts, branding-contraste.test.ts +20 | PRESERVE_ADAPT_FORTIS |
| FN-d86a32 | API | `/api/v1/marca/logo` | `app/api/v1/marca/logo/route.ts` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | api_audit_log, organizations, platform_admins, platform_branding, platform_config +2 | adminClient, auth, cookie, db, redis, rpc, sdkImport, serverClient, storage, supabaseHelper | 21: route.test.ts, branding-barra-do-navegador.test.ts +19 | PRESERVE_ADAPT_FORTIS |
| FN-dd02c6 | PAGE | `/app/settings/marca` | `app/app/settings/marca/page.tsx` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | api_audit_log, organizations, platform_admins, platform_branding, platform_config +2 | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 22: branding-barra-do-navegador.test.ts, branding-contraste.test.ts +20 | PRESERVE_ADAPT_FORTIS |
