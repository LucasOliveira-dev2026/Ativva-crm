# Sincronização com o upstream (DeskcommCRM)

O fork absorve melhorias do upstream **sem** reintroduzir Supabase. O desenho
que torna isso barato: o que é do upstream fica o mais intacto possível, e o
que é Fortis fica em lugares próprios ou é derivado por transformação
reproduzível.

## Onde está o que é Fortis

| Área | Caminho | Natureza |
| --- | --- | --- |
| Plataforma do banco | `database/platform/0001_fortis_platform.sql` | papéis `crm_*`, `fortis.current_*()`, `identity.*`, `object_storage.*` |
| Overlay de tenancy | `database/platform/0100_fortis_tenancy.sql` | `fn_user_org_ids()` com empresa ativa (ADR-0002) |
| Schema neutro | `database/baseline/baseline.sql` | **gerado** de `supabase/baseline.sql` por `scripts/fortis/baseline/build.mjs` |
| Histórico neutro | `database/upstream-migrations/*.sql` | **gerado** de `supabase/migrations/*.sql` (mesmo build) |
| Fixtures de teste | `database/testing/fixtures.sql` | só no banco descartável |
| Gate de banco | `scripts/fortis/test-db.sh`, `vitest.db.fortis.config.ts` | suíte de invariantes do upstream contra a plataforma Fortis |
| Codemod de testes | `scripts/fortis/testing/test-codemod.mjs` | reescreve os testes de banco **em memória**; os arquivos seguem idênticos ao upstream |
| Inventários | `scripts/fortis/inventory/`, `docs/fortis/*INVENTORY*`, `docs/fortis/inventory/` | gerados |
| Gate zero-Supabase | `scripts/fortis/zero-supabase-gate.mjs`, `docs/fortis/inventory/supabase-baseline.jsonl` | catraca |
| CI Fortis | `.github/workflows/fortis-platform.yml` | arquivo próprio, sem editar os workflows do upstream |
| Decisões | `docs/fortis/adr/` | ADRs |

## Procedimento de sync

```bash
git fetch upstream
git checkout feat/fortis-platform-migration   # ou a branch de sync
git merge upstream/main                        # nunca rebase de branch publicada
node scripts/fortis/baseline/build.mjs         # reescreve o schema novo do upstream
node scripts/fortis/inventory/generate.mjs     # reinventaria
node scripts/fortis/zero-supabase-gate.mjs     # catraca
node --test 'scripts/fortis/**/*.test.mjs'                    # regras de transformação
pnpm test:db:fortis                            # invariantes na plataforma Fortis
```

Se `build.mjs` recusar ("Supabase platform references left"), o upstream usou
um objeto da plataforma Supabase que ainda não tem equivalente: acrescente o
mapeamento em `scripts/fortis/baseline/neutralize.mjs` **com teste**, nunca um
stub do Supabase.

Se `build.mjs` acusar "upstream fn_user_org_ids() changed", o upstream mudou a
função que o overlay de tenancy reescreve: copie o corpo novo para dentro de
`database/platform/0100_fortis_tenancy.sql` (mantendo o recorte por empresa
ativa) e atualize o hash fixado no cabeçalho.

Se a catraca acusar "new Supabase dependency", o merge trouxe código novo que
fala com Supabase. Enquanto o módulo ainda não foi migrado, o arquivo novo
entra na catraca só por decisão explícita (commit próprio que atualiza
`supabase-baseline.jsonl` e explica por quê); depois do F8 (`--strict`), nunca.

## Conflitos esperados

| Onde | Por quê | Como resolver |
| --- | --- | --- |
| `supabase/baseline.sql`, `supabase/migrations/**` | não mexemos: são a entrada do build | aceitar o upstream e rodar `build.mjs` |
| `tests/invariants/**` | não mexemos (congelados no upstream) | aceitar o upstream; o codemod adapta |
| `package.json` (scripts `*:fortis`) | poucas linhas nossas | manter as duas |
| `database/platform/0100_fortis_tenancy.sql` | reescreve `fn_user_org_ids()` | portar o corpo novo (o build avisa pelo hash) |
| `scripts/lib/gate-ativacao.ts` | pergunta pelo papel `crm_service` | manter o papel Fortis |
| código migrado (F1–F8: `lib/db`, auth, storage, realtime) | o upstream continua evoluindo a versão Supabase do mesmo arquivo | portar a mudança de **comportamento** para a versão Fortis; nunca aceitar o lado Supabase |

## O que não pode voltar

- `@supabase/supabase-js`, `@supabase/ssr` (depois do F8)
- `lib/supabase/**`, cookies `sb-*`, variáveis `SUPABASE_*` / `NEXT_PUBLIC_SUPABASE_*`
- `supabase.auth.*`, `supabase.storage.*`, `postgres_changes`, `.channel(`
- referências a `auth.*`, `storage.objects/buckets`, `service_role`,
  `request.jwt.claims` no schema aplicado (`database/`)
- instalador/backup/CI que dependa de projeto Supabase
- qualquer referência a Chatwoot: não faz parte da arquitetura

A catraca e o `build.mjs --check` rodam no CI (`fortis-platform.yml`) e
barram cada item acima.
