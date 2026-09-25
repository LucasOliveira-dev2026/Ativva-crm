# Supabase — CI (3 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-899ce9 | `.github/workflows/ci.yml` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-c22d7a | `.github/workflows/e2e.yml` | cookie:849 realtime:877 env:1386,1416,1500,1501,1502,1739 adminClient:1502 redis:1658 | REPLACE_DB_LAYER + REPLACE_KEYCLOAK + REPLACE_REALTIME + REPLACE_REDIS | F1–F8/F2/F4/F5 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_INTERNAL_IMAGE_REGISTRY +1 | PENDING |
| SB-9b7985 | `.github/workflows/publish-image.yml` | env:347,348,349,350,605,606 adminClient:349,607,648 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
