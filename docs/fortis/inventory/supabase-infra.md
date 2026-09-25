# Supabase — INFRA (24 arquivos)

| ID | Arquivo | Linha/área | Classificação | Substituto Fortis | Risco | Dependências | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SB-f25d76 | `Caddyfile.single-server` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-6651dd | `Dockerfile` | env:3,25,26,34,35 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-65b538 | `desinstalar_docker.sh` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-f52107 | `docker-compose.local.yml` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-b85a26 | `docker-compose.prod.yml` | redis:182 | REPLACE_REDIS | F5 | BAIXO |  | PENDING |
| SB-0ce662 | `docker-compose.single-server.yml` | env:10 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-35b8c1 | `docker-compose.yml` | env:62 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_DB_URL | PENDING |
| SB-e84972 | `hostgator-setup-kit/_common.sh` | env:109,190,191,192,843,854 adminClient:1363,1364 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL, SUPABASE_REF +1 | PENDING |
| SB-77c381 | `hostgator-setup-kit/backup.sh` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-b13adc | `hostgator-setup-kit/healthcheck.sh` | env:62,68 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-001d9c | `hostgator-setup-kit/install-single-server.sh` | env:10,19,21,22,101,102 adminClient:169 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_DIR +6 | PENDING |
| SB-52b8a4 | `hostgator-setup-kit/install.sh` | env:259,260,261,276,340,346 adminClient:274,294,301,315,786,1124 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ACCESS_TOKEN, SUPABASE_DB_ADMIN_URL +4 | PENDING |
| SB-6518b6 | `hostgator-setup-kit/manutencao.sh` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-1308b8 | `hostgator-setup-kit/marca-emails.sh` | env:261,262,264,270,271,274 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ACCESS_TOKEN | PENDING |
| SB-0f34ff | `hostgator-setup-kit/reset-password.sh` | env:19,20,21 adminClient:20,21,25 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY | PENDING |
| SB-0c898d | `hostgator-setup-kit/restore.sh` | env:12 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | NEXT_PUBLIC_SUPABASE_URL | PENDING |
| SB-044020 | `hostgator-setup-kit/supabase-provision.sh` | adminClient:11,128,130,311,312,313 env:16,37,95,102,103,118 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ACCESS_TOKEN, SUPABASE_DB_PASS +7 | PENDING |
| SB-215949 | `hostgator-setup-kit/supabase-single-server.override.yml` | env:9 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_REF | PENDING |
| SB-75f22a | `hostgator-setup-kit/test-validators.sh` | env:55,122,216,225,318,388 adminClient:121,190,191,348,349,396 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ACCESS_TOKEN, SUPABASE_DB_ADMIN_URL +7 | PENDING |
| SB-3b1274 | `hostgator-setup-kit/update.sh` | env:279,501,685 | DELETE_INFRA_ONLY | F7–F8 | BAIXO | SUPABASE_ACCESS_TOKEN, SUPABASE_DB_ADMIN_URL | PENDING |
| SB-6779bf | `infra/executor-proprio/Dockerfile` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-da7630 | `infra/executor-proprio/vaga.sh` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
| SB-5f4eec | `ubuntu-local-installer.sh` | env:127,128,129,130,131,164 adminClient:129,165 | REPLACE_DB_LAYER | F1–F8 | ALTO | NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_DB_ADMIN_URL, SUPABASE_DB_URL +1 | PENDING |
| SB-a4b6c1 | `ubuntu-production-installer.sh` |  | DELETE_INFRA_ONLY | F7–F8 | BAIXO |  | PENDING |
