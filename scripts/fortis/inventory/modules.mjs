// Functional module catalog of the upstream product. The route → module rules
// are ordered: the first match wins. Every entry point (page, route handler,
// server action, cron, worker) must land in a module; anything that does not is
// reported as UNVERIFIED so the catalog cannot silently miss a feature.

export const MODULES = {
  AUTH: 'Autenticação, sessão, MFA, convites',
  ONBOARDING: 'Onboarding e primeiros passos',
  CRM: 'CRM: kanban, leads, contatos, funis, tags, atividades, tarefas',
  INBOX: 'Atendimento: inbox, conversas, mensagens, atribuição, radar',
  WHATSAPP: 'Canais WhatsApp (WAHA/QR, Meta Cloud API), templates, números',
  AI: 'IA: agentes, RAG, skills, memória, roteadores, casos, propostas, uso',
  FOLLOWUP: 'Follow-up automático e adaptativo',
  AUTOMATION: 'Automações QUANDO/SE/ENTÃO',
  WEBHOOKS: 'Webhooks inbound/outbound, fontes de captação',
  CAMPAIGNS: 'Campanhas e supressões',
  AGENDA: 'Agenda, Google Calendar/Meet, vitrine pública',
  VOICE: 'Chamadas, VoIP/trunk, agente de voz',
  FINANCE: 'Financeiro: comandas, faturamento, lançamentos',
  CATALOG: 'Catálogo de produtos',
  PROSPECTING: 'Prospecção',
  ADS: 'Anúncios Meta, conversões',
  INTEGRATIONS: 'Nuvemshop, dados externos, extensões',
  MCP: 'Servidor MCP e ferramentas de agente',
  ANALYTICS: 'Análise, métricas, relatórios',
  LGPD: 'LGPD: consentimento, export, redact, retenção',
  AUDIT: 'Auditoria',
  TEAM: 'Equipe, papéis (RBAC), atendentes',
  SETTINGS: 'Configurações do tenant, perfil, segurança, notificações',
  API_TOKENS: 'Tokens de API (S2S)',
  BILLING: 'Billing',
  BRANDING: 'Marca própria / white-label',
  PLATFORM_ADMIN: 'Admin da plataforma, tenants, impersonation, incidentes',
  SYSTEM: 'Sistema: saúde, atualização, crons de manutenção, event_log',
  PUBLIC: 'Páginas públicas, legais e de erro',
};

// [module, regex over the entry path]. Order matters.
const RULES = [
  ['AUTH', /^app\/\(public\)\/(login|signup)|^app\/auth\/|^app\/api\/v1\/auth\/|^app\/team\/accept-invite|^app\/actions\/(auth|registration)\/|^app\/(acesso-revogado|account-suspended)\//],
  ['ONBOARDING', /^app\/onboarding\/|^app\/get-started\/|^app\/api\/v1\/onboarding\/|^app\/actions\/onboarding\//],
  ['FOLLOWUP', /^app\/app\/ai\/followups|followup|^app\/api\/v1\/cron\/(snooze-watcher|handoff-devolucao)/],
  ['MCP', /^app\/api\/mcp\/|^app\/api\/v1\/mcp\//],
  ['AI', /^app\/app\/ai\/|^app\/api\/v1\/ai\/|^app\/api\/internal\/agents|^app\/api\/v1\/cron\/(agent-dispatcher|case-stale-watcher|contact-proposals-watcher|kb-conversations-batch|sync-model-catalog|risk-watcher)|^workers\/agent-worker/],
  ['LGPD', /lgpd|^app\/api\/v1\/cron\/(data-retention|storage-redaction)/],
  ['AUDIT', /^app\/app\/audit|^app\/api\/v1\/audit/],
  ['API_TOKENS', /api-tokens/],
  ['BILLING', /billing/],
  ['BRANDING', /marca|^app\/api\/v1\/marca/],
  ['PLATFORM_ADMIN', /^app\/admin\/|^app\/\(admin\)\/|^app\/api\/v1\/admin\/|^app\/api\/v1\/tenants\/|^app\/actions\/admin\//],
  ['WHATSAPP', /^app\/app\/connections|canal-oficial|tenant\/whatsapp|^app\/app\/(settings\/)?templates|^app\/api\/v1\/(channels|channel-sessions|phone-numbers|message-templates)\/|^app\/api\/v1\/webhooks\/(waha|meta|channel)|^app\/api\/v1\/cron\/(channel-health|canal-mudo-watcher|recover-stuck-messages)|^app\/onboarding\/connect-whatsapp/],
  ['WEBHOOKS', /^app\/app\/webhooks|^app\/api\/v1\/(webhooks|webhook-sources|lead-captures)\/|^app\/api\/v1\/cron\/(webhook-log-retention|webhook-replay)/],
  ['AUTOMATION', /automation/],
  ['CAMPAIGNS', /campaign/],
  ['AGENDA', /agenda/],
  ['VOICE', /^app\/app\/calls|voip|^app\/api\/v1\/(voice|calls)\//],
  ['FINANCE', /comandas|faturamento|financeiro|recurring-entries/],
  ['CATALOG', /^app\/app\/products|^app\/api\/v1\/products\//],
  ['PROSPECTING', /prospecting/],
  ['ADS', /^app\/app\/ads|meta-ads|conversoes|^app\/api\/v1\/(ads|anuncios|plataformas-de-anuncio)\//],
  ['INTEGRATIONS', /nuvemshop|integracao-dados|external-db|extensions|^app\/api\/v1\/integrations\/|^app\/actions\/integrations\//],
  ['ANALYTICS', /^app\/app\/(analise|metrics)|^app\/api\/v1\/(metrics|reports)\//],
  ['INBOX', /^app\/app\/(inbox|radar)|^app\/api\/v1\/(conversations|messages|conversation-tags|attendants|demandas|notifications)\/|^app\/api\/v1\/cron\/routing-worker/],
  ['CRM', /^app\/app\/(crm|kanban|leads|pipelines|contacts|activities|tasks|settings\/tags|settings\/tenant\/pipelines)|^app\/api\/v1\/(leads|contacts|pipelines|tags|contact-tags|tasks)\/|^app\/api\/v1\/cron\/(contact-|lead-date)|^app\/onboarding\/funil/],
  ['TEAM', /^app\/app\/team|^app\/api\/v1\/team\/|^app\/actions\/team\//],
  ['SETTINGS', /^app\/app\/settings|^app\/api\/v1\/settings\/|^app\/actions\/settings\/|^app\/actions\/shell\//],
  ['SYSTEM', /^app\/api\/v1\/(system|health)\/|^app\/api\/v1\/cron\/|^workers\/|atualizacao/],
  ['PUBLIC', /^app\/(page|layout|error|global-error|not-found)\.tsx$|^app\/(legal|403|500|503|support-ended|design|vitrine-agenda)\/|^app\/app\/page\.tsx$|^app\/email-templates\//],
];

export function moduleOf(entry) {
  for (const [module, rule] of RULES) if (rule.test(entry)) return module;
  return undefined;
}

/** Entry points of the product: pages, route handlers, server actions, workers. */
export function isEntryPoint(path) {
  return (
    /^app\/.*\/(page|route)\.tsx?$/.test(path) ||
    /^app\/actions\/.+\.ts$/.test(path) ||
    /^workers\/[^/]+\.ts$|^workers\/[^/]+\/main\.ts$/.test(path)
  ) && !/\.(test|spec)\./.test(path);
}

/** `app/app/inbox/[id]/page.tsx` → `/app/inbox/[id]`; API → `/api/...`. */
export function routeOf(entry) {
  if (!entry.startsWith('app/')) return entry;
  return (
    entry
      .replace(/^app/, '')
      .replace(/\/\([^)]+\)/g, '')
      .replace(/\/(page|route)\.tsx?$/, '') || '/'
  );
}
