# ADR-0001 — Migração do acesso a dados (DATABASE ACCESS MIGRATION)

- Estado: **aceito** (F0) · execução: F1–F8
- Contexto medido: `docs/fortis/SUPABASE-MIGRATION-INVENTORY.md`, commit base do upstream

## Contexto

O runtime do Deskcomm fala com o Postgres exclusivamente pelo PostgREST do
Supabase, via `@supabase/supabase-js`:

| Medida (runtime: app, lib, components, hooks, workers) | Valor |
| --- | --- |
| arquivos com `.from(tabela)` | 565 (≈2.060 chamadas) |
| arquivos com `.rpc(função)` | 125 (97 funções distintas) |
| arquivos com cliente server (JWT do usuário, RLS aplicada) | 286 |
| arquivos com cliente admin (`service_role`, **ignora RLS**) | 375 |
| arquivos com cliente browser | 6 |
| tabelas acessadas | 140 |
| helpers SQL crus | nenhum: todo SQL especial já vive em funções do banco |

A RLS **não** depende do cliente: ela vem do papel (`authenticated`) e do
`sub` do JWT que o PostgREST coloca na transação. Trocar o cliente sem trocar
esse contexto quebraria o isolamento; trocar o contexto sem o cliente é
impossível (o PostgREST é quem o define). Por isso contexto e camada de dados
mudam juntos (ver ADR-0002).

O ATIVVA acessa Postgres com **Prisma 7.10** e `runTenantTransaction`: uma
transação interativa que faz `set_config('app.current_company_id', …, true)`
antes do código do caso de uso, com o papel de runtime sem `BYPASSRLS`.

## Opções

| Opção | Custo | Convergência Fortis | Risco |
| --- | --- | --- | --- |
| **A. Prisma 7 + `@prisma/adapter-pg`**, migrations SQL-first | reescrever ≈2.300 chamadas; RPCs viram `$queryRaw` tipado | total (mesmo ORM e mesmo idioma de transação do ATIVVA) | `vector` é `Unsupported` no Prisma: busca vetorial fica em função SQL (já é: `retrieve_top_k_chunks`) |
| B. Kysely/pg com tipos gerados | mesmo custo de reescrita | parcial (segundo idioma de acesso na Fortis) | baixo técnico, alto organizacional |
| C. PostgREST auto-hospedado + `supabase-js` | baixo | nenhuma | mantém SDK Supabase (viola SDK = 0) e a semântica do gateway |
| D. Wrapper próprio compatível com `supabase.from()` | médio | nenhuma | proibido pela missão ("nenhum wrapper fictício chamado supabase") e reimplementa a gramática de embed do PostgREST |

## Decisão

**Opção A.** Prisma 7 com o adapter `pg`, schema gerado por `prisma db pull`
sobre o banco neutro (`database/`), e migrations **SQL-first**: RLS, funções,
triggers, extensões e `vector` continuam em SQL explícito (o ORM não
representa bem nada disso, e não precisa).

A camada nova (`lib/db/`) expõe só dois escopos, com o mesmo contrato do
ATIVVA:

- `runTenantTransaction({ userId, companyId, aal, sessionId }, fn)`:
  `SET LOCAL ROLE crm_authenticated` + `set_config` de `app.current_user_id`,
  `app.current_company_id`, `app.current_aal`, `app.current_session_id`.
  Substitui o cliente **server**; a RLS existente continua sendo a autoridade.
- `runPlatformTransaction(reason, fn)`: `SET LOCAL ROLE crm_service`.
  Substitui o cliente **admin**; exige um motivo tipado (para auditoria e para
  o inventário de acessos que ignoram RLS). Reduzir esses 375 arquivos é
  trabalho contínuo, medido pelo gate, não pré-requisito da troca.

O papel de login `crm_app` é `NOINHERIT` e não tem privilégio nenhum: uma
query fora desses dois escopos falha (fail-closed), em vez de rodar com
privilégio implícito.

## Execução

Estrangulamento por módulo (ordem do grafo em `PLATFORM-MIGRATION-REPORT.md`):
cada módulo troca `supabase.from/rpc` por repositórios em `lib/db/<módulo>/`,
com os testes de rota e de invariantes do módulo rodando contra o Postgres
Fortis real. O gate zero-Supabase só deixa a contagem cair.

Não há dual-stack em produção: a instalação Fortis nasce no Postgres próprio.
Para instalações Deskcomm existentes, o caminho de dados é `pg_dump --data-only`
do Supabase + mapeamento `auth.users → identity.users` (script de F7).

## Consequências

- Uma forma de acessar dados em toda a Fortis; revisão e onboarding iguais.
- O custo é a reescrita das chamadas; o domínio SQL (≈350 funções, 187
  policies, 120 triggers) é preservado sem reescrita.
- `lib/database.types.ts` (tipos do PostgREST) é substituído pelos tipos do
  Prisma.
