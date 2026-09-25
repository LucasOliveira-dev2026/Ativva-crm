# ADR-0003 — Identidade: Supabase Auth → Keycloak (realm `fortis`)

- Estado: **proposto** (F0) · execução: F2 · alteração do realm só com snapshot e aprovação

## Contexto

O realm `fortis` do ATIVVA (Keycloak 26.7.0, `docs/keycloak-k1/realms/fortis-realm.k1.json`
no repositório ATIVVA) já tem os clients `ativva-web`, `ativva-api`,
`ativva-mobile`, `ativva-assinaturas` e `ativva-n8n`. O web do ATIVVA usa um
**BFF OIDC** (authorization code + PKCE, transação e custódia de sessão no
Redis, cookie de sessão opaco, refresh no servidor) em `apps/web/src/app/api/auth/*`,
e a API liga o usuário por `User.externalIdentityId` (= `sub`).

No Deskcomm, Supabase Auth cobre login, cadastro, convite, MFA TOTP com
recovery codes, reset de senha, confirmação de e-mail, login com Google e
sessão em cookie `sb-*`. 208 arquivos dependem disso.

## Decisão

- **Mesmo realm `fortis`, client novo `ativva-crm`** (confidencial, só
  authorization code + PKCE, `fullScopeAllowed: false`, redirect URIs exatas).
  Nada de segundo realm: um usuário, uma identidade, SSO real com o ATIVVA.
- **Mesmo BFF do ATIVVA**: o CRM reusa o desenho (e, na integração F10, o
  código) de `oidc-config`, `oidc-transaction`, `transaction-store`,
  `establish-session`, `refresh`, `logout`. Nenhuma implementação OIDC nova.
- **Identidade = `sub`**: `identity.users.external_identity_id` (único, não
  nulo). E-mail, CPF e username nunca são chave. O login faz *upsert* por
  `sub` e resolve o `id` interno, que é o que as 66 FKs do domínio usam.
- **MFA, senha, recuperação, WebAuthn, brute force, sessão, Google (identity
  brokering)** passam para o Keycloak. As telas `/login/mfa`, `/login/recovery`,
  `/login/reset` e `/app/settings/security` continuam existindo como função
  (o usuário ainda gerencia segurança), mas levam ao fluxo/console do
  Keycloak. Sem TOTP paralelo no CRM.
- **Nível de garantia**: `acr`/`amr` do token → `app.current_aal`
  (`aal2` com segundo fator); `sid` → `identity.sessions`; fatores
  cadastrados (credenciais `otp`/`webauthn`) espelhados em
  `identity.mfa_factors` no login. As regras do domínio que exigem `aal2`
  (sessões de suporte/impersonation, admin da plataforma) ficam intactas.
- **Autorização continua no CRM**: associação a organizações, papéis, escopo
  de visualização, dono de conversa — `user_organizations` e policies.
- **Convite e cadastro**: o token de convite continua do CRM; aceitar exige
  login Keycloak. Criação de usuário no Keycloak (convite, cadastro com
  política de aprovação) por um service account próprio com apenas
  `manage-users` do realm — nunca `ADMIN_FORTIS`, nunca admin do realm.
- **API tokens** (S2S por organização) continuam do CRM, sem troca por sessão
  Keycloak; integrações cross-produto usam client credentials próprio (como
  `ativva-n8n`), decidido em F6.

## Pendências para aplicar no realm

Snapshot do realm, JSON versionado do client `ativva-crm` e do service
account, teste de contrato contra Keycloak real (como `keycloak-n8n-client.contract.spec.ts`
no ATIVVA), aprovação explícita.
