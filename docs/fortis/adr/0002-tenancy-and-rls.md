# ADR-0002 — Tenancy e RLS no modelo Fortis

- Estado: **aceito** (F0) · execução: F1 (banco), F2 (contexto vindo do Keycloak)

## Contexto

| | ATIVVA | Deskcomm (upstream) |
| --- | --- | --- |
| Chave de tenant | `companyId` | `organization_id` |
| Contexto na transação | GUC `app.current_company_id` (`set_config(…, true)`) | `request.jwt.claims` do PostgREST → `auth.uid()` |
| Modelo | uma empresa por transação | associação: `fn_user_org_ids()` = todas as organizações do usuário |
| Papel de runtime | `ativva_app` sem `BYPASSRLS` | `authenticated`; `service_role` ignora RLS |
| Políticas | `"companyId" = current_setting(...)` | 187 policies, 276 funções `SECURITY DEFINER`, papéis por organização (`fn_user_role_in_org`) |

## Opções

- **A. Adotar exatamente o modelo ATIVVA**: reescrever as 187 policies para
  `organization_id = app.current_company_id`. Perde a checagem de associação e
  de papel que as policies fazem hoje (visibilidade de conversa, escopo de
  atendente, RBAC por organização) ou exige reimplementá-la em outro lugar.
- **B. Manter a RLS do Deskcomm e trocar só a origem do contexto** para o
  contrato de GUC do ATIVVA.

## Decisão

**B, convergida no contrato.** Uma única estratégia Fortis: contexto em GUCs
transacionais definidos pela camada de dados (ADR-0001). As policies e funções
do CRM ficam como estão; o que muda é de onde vem a identidade:

| Supabase | Fortis |
| --- | --- |
| `auth.uid()` | `fortis.current_user_id()` ← `app.current_user_id` |
| (não havia) | `fortis.current_company_id()` ← `app.current_company_id` (mesmo GUC do ATIVVA) |
| `auth.jwt()->>'aal'` | `fortis.current_aal()` ← `app.current_aal` (do `acr` do Keycloak) |
| `auth.jwt()->>'session_id'` | `fortis.current_session_id()` ← `app.current_session_id` (`sid`) |
| `anon` / `authenticated` / `service_role` | `crm_anonymous` / `crm_authenticated` / `crm_service` |

`fn_user_org_ids()` continua devolvendo o que o upstream devolve — as
organizações do usuário **e** a da sessão de suporte ativa (impersonation) —
e passa a recortar pela empresa ativa quando `app.current_company_id` está
definido. A ausência do GUC nunca amplia além do comportamento do upstream, e o
usuário anônimo não tem associação nenhuma. Critério de saída do F2: toda
transação de usuário define a empresa ativa, e aí a ausência passa a negar
(fail-closed), provado pela suíte de isolamento.

Os papéis foram nomeados preservando a ordem alfabética dos originais
(`crm_anonymous` < `crm_authenticated` < `crm_service`), porque código e testes
ordenam por nome de papel.

A reescrita do schema é **mecânica e reproduzível**
(`scripts/fortis/baseline/neutralize.mjs`), com recusa se sobrar qualquer
referência à plataforma Supabase; o `fn_user_org_ids` Fortis vem de um overlay
aplicado depois do baseline (`database/platform/0100_fortis_tenancy.sql`),
que reproduz o corpo mais recente do upstream e só acrescenta o recorte; o
`build.mjs` fixa o hash desse corpo e falha quando o upstream muda a função,
obrigando a portar a mudança (sem isso, um overlay antigo apagaria em silêncio
comportamento novo — foi o que o invariante `suporte-temporario` pegou).

## Consequências

- O isolamento existente (e sua suíte de 281 arquivos de invariantes) continua
  sendo a prova, agora contra um Postgres comum.
- Integração com o ATIVVA fala o mesmo idioma: `companyId` do ATIVVA ↔
  `organization_id` do CRM pelo mapeamento explícito de F10, nunca por tabela
  compartilhada.
- Dívida herdada e medida: 375 arquivos usam o papel que ignora RLS.
