# Supabase — CONFIG (7 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-d4dae0 | `.env.example` | env:10,12,14,389,397 adminClient:14,388 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-3bd999 | `.env.hostgator.example` | env:111,113,116,118,126,127 adminClient:115,116 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-a39fcc | `.env.voip.example` | env:19,20 adminClient:20 | REPLACE_DB_LAYER | F1–F8 | ALTO | SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | PENDING |
| SB-461c8d | `eslint.config.mjs` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-a0c2fd | `next.config.ts` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-7030d0 | `package.json` | redis:84 | REPLACE_REDIS | F5 | BAIXO |  | PENDING |
| SB-8f3ee0 | `supabase/config.toml` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
