# FORTIS CRM PLATFORM MIGRATION REPORT (F0)

Data: 2026-09-25 · Branch: `feat/fortis-platform-migration`

## Upstream, licença, fork, branches

| Item | Valor |
| --- | --- |
| Upstream | `melgarafael/DeskcommCRM`, branch padrão `main` |
| UPSTREAM SHA | `d1081dc231e1f7b0c6648af2011282d42b92fe85` (2026-09-25 15:44 -03), sincronizado por merge; base do fork: `aaf1b3b` |
| Release | `v1.49.0` + 42 commits (tag mais recente: `v1.49.0`) |
| LICENSE | MIT, `Copyright (c) 2026 Rafael Melgaço` — lido no arquivo `LICENSE` do commit base; mantido intacto |
| Fork | `origin` → `LucasOliveira-dev2026/ativva-crm` · `upstream` → `melgarafael/DeskcommCRM` |
| Branch CRM | `feat/fortis-platform-migration` |
| Branch ATIVVA | `feat/crm-integration` criada a partir de `main` (`c5ec95e`), sem código do Deskcomm |

> **Bloqueio externo:** a criação do fork no GitHub não foi possível a partir
> desta sessão — a credencial do GitHub não alcança `melgarafael/DeskcommCRM`
> nem a organização `Fortis-solucoes`. O repositório local já tem os remotes e
> os commits; o push acontece assim que o fork existir e for acessível.

## Stack real do ATIVVA (lida no `main` @ `c5ec95e`, não em documentação)

| Tema | ATIVVA hoje | CRM converge para |
| --- | --- | --- |
| Identidade | Keycloak **26.7.0**, realm `fortis`, clients `ativva-web/api/mobile/assinaturas/n8n`; web com BFF OIDC (code+PKCE, custódia de sessão no Redis) | client `ativva-crm` no mesmo realm (ADR-0003) |
| Postgres | **17** (`postgres:17-alpine`; 16 em partes antigas) | `pgvector/pgvector:pg17` |
| ORM | **Prisma 7.10** | Prisma 7 (ADR-0001) |
| Tenancy | GUC `app.current_company_id` via `set_config(…, true)` em `runTenantTransaction`; papel de runtime sem `BYPASSRLS` | mesmo GUC + `app.current_user_id` (ADR-0002) |
| Identidade no banco | `User.externalIdentityId` (= `sub`) | `identity.users.external_identity_id` |
| Realtime | Socket.IO 4.8 + `@socket.io/redis-adapter`, sala `company:<id>`, handshake pela sessão | idem (ADR-0005) |
| Redis | `redis:7-alpine`, `ioredis` 6 | Redis Fortis com prefixo `crm:` |
| Storage | `@aws-sdk/client-s3` + MinIO | ObjectStorage S3 (ADR-0004) |
| Eventos | EventEmitter2 interno; outbox `IntegrationEvent` → n8n (`automation-events/v1`, HMAC) | `event_log` interno + saída pelo mesmo contrato (ADR-0006) |
| n8n | stack `fortis-n8n`, client `ativva-n8n` (client credentials) | CRM DECIDE, n8n orquestra |
| Web | Next 16.3, React 19.2, Tailwind 4 | Deskcomm já usa Next 16 / React 19 / Tailwind 4 / shadcn |

## SUPABASE USES TOTAL

Inventário gerado: [`SUPABASE-MIGRATION-INVENTORY.md`](SUPABASE-MIGRATION-INVENTORY.md).
**2.307 arquivos** com dependência ou menção; **UNVERIFIED = 0**.

| Área | Arquivos | Destaques |
| --- | --- | --- |
| Runtime | 863 | 565 com `.from()` (≈2.060 chamadas, 140 tabelas), 125 com `.rpc()` (97 funções), 375 com cliente admin (ignora RLS), 286 com cliente server, 189 importam `@supabase/*` |
| Testes | 848 | 281 arquivos de invariantes de banco + testes unitários com dublês do cliente |
| SQL | 217 | baseline de 39 mil linhas + 342 migrations |
| Scripts | 71 | instalador, update, backup, provisionamento Supabase |
| Infra | 24 | compose, Caddy, instaladores Ubuntu/HostGator |
| Docs | 125 (+144 históricos permitidos) | |
| CI | 3 | |

### AUTH (208 arquivos)
Supabase Auth: login senha, Google, cadastro com política, convite, MFA TOTP
com recovery codes, reset, confirmação, `proxy.ts` validando sessão, cookies
`sb-*`, 81 arquivos de runtime chamando `supabase.auth.*`. No banco:
`auth.users` (66 FKs), `auth.sessions` e `auth.mfa_factors` nas regras de
suporte/impersonation, `auth.jwt()->>'aal'`.

### DATABASE (1.559 arquivos com REPLACE_DB_LAYER)
Todo acesso passa pelo PostgREST. Não há SQL cru no runtime: o SQL especial
já vive em ≈350 funções do banco. Extensões: `vector`, `citext`, `pg_trgm`,
`pgcrypto`, `uuid-ossp` — nenhuma exige Supabase.

### RLS (181 arquivos SQL)
187 policies no baseline, 276 `SECURITY DEFINER`, 176 `auth.uid()`,
`fn_user_org_ids()` (704 usos) e `fn_user_role_in_org()` (69).

### REALTIME (94 arquivos)
20 consumidores no browser via `useRealtimeChannel`; 12 tabelas na
publicação; broadcasts `alerts-platform`, `org:<id>:queue`, saúde/agente.

### STORAGE (46 arquivos)
Buckets `whatsapp-media`, `skill-assets`, `lgpd-exports`, `catalog-photos`,
`brand-logos` (público) + IA, com policies em `storage.objects`.

### INFRA / REDIS
Upstash (`@upstash/redis`) em 2 arquivos (rate limit do dispatcher de IA,
debounce do RAG) + `serverless-redis-http` no compose; instaladores e update
pressupõem projeto Supabase (`SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_URL`, …);
24 variáveis `SUPABASE_*` fora do histórico.

### TESTS
Suíte de invariantes roda num Postgres com **stubs** do Supabase
(`scripts/test-db.sh`); testes unitários usam dublês do cliente; E2E Playwright
sobre stack com Supabase.

## FORTIS REPLACEMENT MAP

| Classificação | Arquivos | Substituto | Fase |
| --- | --- | --- | --- |
| REPLACE_POSTGRES / REPLACE_RLS | 21 / 181 | Postgres 17 próprio + contrato de GUC (ADR-0002) | F1 |
| REPLACE_DB_LAYER | 1.559 | Prisma 7 + `runTenantTransaction`/`runPlatformTransaction` (ADR-0001) | F1–F8 |
| REPLACE_KEYCLOAK | 208 | realm `fortis`, client `ativva-crm`, BFF do ATIVVA (ADR-0003) | F2 |
| REPLACE_STORAGE | 46 | `object_storage` + S3/MinIO (ADR-0004) | F3 |
| REPLACE_REALTIME | 94 | Socket.IO + Redis adapter (ADR-0005) | F4 |
| REPLACE_REDIS | 9 | Redis Fortis, prefixo `crm:` | F5 |
| REPLACE_N8N | — | relógios/integrações genéricas (ADR-0006) | F6 |
| DELETE_INFRA_ONLY | 210 | instalador, env, CI, docs operacionais | F7–F8 |

## DEPENDENCY GRAPH

```
F1 schema neutro + papéis + GUC ─────┬──► F1b camada lib/db (Prisma) ─┐
   (database/, gate de invariantes)  │                               │
                                     ├──► F2 Keycloak ───────────────┤ (o contexto do
                                     │    (sub → identity.users,     │  usuário vem do
                                     │     aal/sid → GUCs)           │  BFF e entra no GUC)
                                     ├──► F3 storage (object_storage │
                                     │     já no schema) ────────────┤
                                     └──► F4 realtime (eventos pós-  │
                                           commit da camada lib/db) ─┤
F5 Redis/workers ◄── F1b                                             │
F6 n8n ◄── F1b + ADR-0006                                            ▼
F7 installer/backup/deploy ◄── F1..F5            F8 remover SDK/env (--strict)
                                                           ▼
                                                 F9 paridade funcional → F10 ATIVVA
```

Restrições que ditam a ordem:
- A RLS depende do contexto de identidade → o contrato de GUC (F1) vem antes
  de desligar o Supabase Auth, e o Auth só sai (F2) quando o BFF já preenche
  `app.current_user_id`/`aal`/`sid`.
- O Realtime do Supabase herda a RLS; o gateway novo depende da sessão do BFF
  (F2) e dos eventos pós-commit da camada de dados (F1b).
- Storage depende das policies (já portadas para `object_storage` em F1).
- Nenhuma fase desliga um subsistema antes de o substituto ter teste real.

## MIGRATION ORDER

F0 inventários (**feito**) → F1 banco (**feito**: schema neutro,
plataforma, overlay de tenancy, suíte de invariantes na plataforma Fortis) →
F1b/F2 camada de dados e Keycloak, módulo a módulo → F3 → F4 → F5 → F6 → F7 →
F8 (`--strict`) → F9 paridade → F10 integração.

## RISKS

| Risco | Mitigação |
| --- | --- |
| 375 arquivos usam o papel que ignora RLS (`service_role`) | `runPlatformTransaction` com motivo tipado; contagem medida na catraca; redução contínua |
| Reescrita de ≈2.300 chamadas de dados | estrangulamento por módulo, testes de rota e invariantes contra Postgres real, catraca só desce |
| Visibilidade por conversa herdada da RLS no realtime | gateway reenvia só ids e o cliente relê pela API (ADR-0005) |
| MFA/aal: regras de suporte exigem `aal2` | `acr`/`amr` do Keycloak → `app.current_aal`; teste de contrato contra Keycloak real |
| Upstream muito ativo (23 commits no dia) | schema e testes derivados por transformação; conflitos concentrados no código migrado |
| Suíte grande e lenta | gate próprio `fortis-platform.yml`, sem editar o CI do upstream |
| Fork no GitHub ainda não criado | bloqueio externo (acesso à org `Fortis-solucoes`) |

## Baseline de testes do upstream

Medido no commit base, antes de qualquer troca de infraestrutura:

| Suíte | Resultado no upstream | Observação |
| --- | --- | --- |
| Unitários (`vitest run`) | 14.017 / 14.018 passam | 1 falha pré-existente: `tests/unit/pdf-extractor.test.ts` (estratégia de subprocesso `tsx`) |
| Invariantes de banco (`pnpm test:db`, stubs Supabase, pg15) | 2.298 / 2.299 passam, 1 pulado, **0 falhas** | referência do F1 |
| Invariantes na plataforma Fortis (`pnpm test:db:fortis`, pg17) | 2.300 / 2.301 passam, 1 pulado, **0 falhas** (274 arquivos, em `ea79a05`) | critério do F1 atingido; histórico da triagem em `odd/tasks/fortis-platform-migration.md` |
