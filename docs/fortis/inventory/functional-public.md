# PUBLIC — Páginas públicas, legais e de erro (9)

| ID | Tipo | Rota | Arquivo | API | Banco | Supabase | Testes | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FN-709edb | PAGE | `/403` | `app/403/page.tsx` |  |  | adminClient, auth, cookie, sdkImport, serverClient, supabaseHelper | 0 | PRESERVE_ADAPT_FORTIS |
| FN-f14490 | PAGE | `/500` | `app/500/page.tsx` |  |  | adminClient, auth, cookie, sdkImport, serverClient, supabaseHelper | 0 | PRESERVE_ADAPT_FORTIS |
| FN-997b44 | PAGE | `/503` | `app/503/page.tsx` |  |  | não | 0 | PRESERVE_AS_IS |
| FN-ba41b4 | PAGE | `/app` | `app/app/page.tsx` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | organizations, platform_admins, platform_config, user_organizations | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 0 | PRESERVE_ADAPT_FORTIS |
| FN-523339 | PAGE | `/design` | `app/design/page.tsx` |  |  | não | 2: clipboard.test.ts, agenda-meet-ui.test.tsx | PRESERVE_AS_IS |
| FN-248a38 | API | `/email-templates/[modelo]` | `app/email-templates/[modelo]/route.ts` | /api/v1/marca | organizations, platform_branding, platform_config | adminClient, db, sdkImport | 24: route.test.ts, acesso-gotrue.test.ts +22 | PRESERVE_REIMPLEMENT_INFRA |
| FN-48f913 | PAGE | `/legal/privacy` | `app/legal/privacy/page.tsx` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | organizations, platform_admins, platform_config, user_organizations | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 6: config-resolve.test.ts, operador.test.ts +4 | PRESERVE_ADAPT_FORTIS |
| FN-716d42 | PAGE | `/legal/terms` | `app/legal/terms/page.tsx` | /api/v1/conversation-tags, /api/v1/leads, /api/v1/marca | organizations, platform_admins, platform_config, user_organizations | adminClient, auth, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 6: config-resolve.test.ts, operador.test.ts +4 | PRESERVE_ADAPT_FORTIS |
| FN-bc2670 | PAGE | `/support-ended` | `app/support-ended/page.tsx` | /api/v1/admin, /api/v1/auth, /api/v1/conversation-tags +2 | organizations, platform_admins, platform_config, user_organizations | adminClient, auth, browserClient, cookie, db, rpc, sdkImport, serverClient, supabaseHelper | 2: organizacoes-cache-por-contexto.test.tsx, realtime-token-do-socket.test.ts | PRESERVE_ADAPT_FORTIS |
