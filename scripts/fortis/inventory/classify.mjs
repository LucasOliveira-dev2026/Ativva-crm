// Classification of one file's Supabase findings into the migration taxonomy.
// Pure and rule-based on purpose: the same tree always yields the same
// inventory, and a rule change shows up as a diff in the generated report.

const CATEGORY_RULES = [
  ['GENERATED', (p) => p === 'lib/database.types.ts'],
  ['CI', (p) => p.startsWith('.github/')],
  [
    'TEST',
    (p) =>
      p.startsWith('tests/') ||
      /\.(test|spec)\.(t|j)sx?$/.test(p) ||
      /playwright\.config|vitest\.[a-z.]*config|vitest\.cercas/.test(p),
  ],
  ['SQL', (p) => p.endsWith('.sql')],
  [
    'HISTORY',
    (p) =>
      /^(evidence|experiments|loop|triagem|plan|tasks|\.changes|\.specs)\//.test(p) ||
      /^(HANDOFF[^/]*|RELATORIO[^/]*|CHANGELOG)\.md$/.test(p) ||
      /^docs\/(handoff|handoffs|evidence|audits|research|decola-ai|superpowers|stories|presentation|growth)\//.test(p),
  ],
  ['DOC', (p) => /\.(md|mdx|txt)$/.test(p) || p.startsWith('docs/')],
  [
    'INFRA',
    (p) =>
      /^(Dockerfile|docker-compose|Caddyfile)/.test(p) ||
      /^(docker|infra|hostgator-setup-kit|asterisk)\//.test(p) ||
      /installer\.sh$|desinstalar_docker\.sh$/.test(p),
  ],
  ['SCRIPT', (p) => p.startsWith('scripts/')],
  ['AGENT_TOOLING', (p) => /^\.(agents|claude)\//.test(p)],
  [
    'CONFIG',
    (p) =>
      /^(package\.json|next\.config\.ts|\.env[^/]*|supabase\/config\.toml|eslint\.config\.mjs|tsconfig[^/]*)$/.test(
        p,
      ),
  ],
  [
    'RUNTIME',
    (p) =>
      /^(app|lib|components|hooks|workers|types|extensoes)\//.test(p) ||
      /^(proxy|instrumentation[^/]*|sentry\.[a-z]+\.config)\.ts$/.test(p),
  ],
];

export function categorize(path) {
  for (const [category, match] of CATEGORY_RULES) if (match(path)) return category;
  return 'OTHER';
}

const AUTH_PATHS =
  /^(lib\/auth\/|app\/\(public\)\/(login|signup)|app\/auth\/|app\/api\/v1\/auth\/|app\/team\/accept-invite|hooks\/auth\/|proxy\.ts)/;

function runtimeClasses(path, s, { threadedHandle = false } = {}) {
  const out = new Set();
  const h = s.hits;
  if (h.auth || h.cookie || AUTH_PATHS.test(path)) out.add('REPLACE_KEYCLOAK');
  if (h.db || h.rpc || h.serverClient || h.adminClient) out.add('REPLACE_DB_LAYER');
  if (h.realtime) out.add('REPLACE_REALTIME');
  if (h.storage) out.add('REPLACE_STORAGE');
  if (h.redis) out.add('REPLACE_REDIS');
  if (h.browserClient && !h.realtime && !h.auth) out.add('REPLACE_DB_LAYER');
  if (h.sdkImport && out.size === 0) out.add('DELETE_INFRA_ONLY');
  if (h.env && out.size === 0) out.add('DELETE_INFRA_ONLY');
  if (h.supabaseHelper && out.size === 0) out.add('DELETE_INFRA_ONLY');
  if (out.size === 0 && s.commentOnly) out.add('KEEP_DOMAIN_LOGIC');
  // A code (non-comment) mention with no other signal is a Supabase client
  // handle threaded through (`ctx.supabase`, `fooSupabase(admin)`), or UI copy
  // about Supabase infrastructure (i18n dictionaries).
  if (threadedHandle && out.size === 0 && s.mentionLines.length) {
    out.add(/^lib\/i18n\//.test(path) ? 'DELETE_INFRA_ONLY' : 'REPLACE_DB_LAYER');
  }
  return out;
}

function sqlClasses(s) {
  const out = new Set();
  const h = s.hits;
  if (h.rlsAuthUid || h.supabaseRoles || h.helper) out.add('REPLACE_RLS');
  if (h.identity) out.add('REPLACE_KEYCLOAK');
  if (h.storage) out.add('REPLACE_STORAGE');
  if (h.realtime) out.add('REPLACE_REALTIME');
  if (out.size === 0 && s.mentionLines.length) out.add('REPLACE_POSTGRES');
  return out;
}

/**
 * @returns {{ category: string, classes: string[] }}
 */
export function classify(path, signals) {
  const category = categorize(path);
  let classes;
  switch (category) {
    case 'SQL':
      classes = sqlClasses(signals);
      break;
    case 'RUNTIME':
    case 'GENERATED':
      classes = runtimeClasses(path, signals, { threadedHandle: true });
      if (category === 'GENERATED') classes = new Set(['REPLACE_DB_LAYER']);
      break;
    case 'TEST':
    case 'SCRIPT':
      classes = runtimeClasses(path, signals, { threadedHandle: true });
      if (classes.size === 0) classes.add('REPLACE_POSTGRES');
      break;
    case 'HISTORY':
      classes = new Set(['HISTORICAL_ALLOWED']);
      break;
    case 'DOC':
    case 'AGENT_TOOLING':
    case 'INFRA':
    case 'CI':
    case 'CONFIG':
      classes = runtimeClasses(path, signals);
      if (signals.hits.redis) classes.add('REPLACE_REDIS');
      if (classes.size === 0 || classes.has('KEEP_DOMAIN_LOGIC'))
        classes = new Set(['DELETE_INFRA_ONLY']);
      break;
    default:
      classes = new Set();
  }
  if (classes.size === 0) classes.add('UNVERIFIED');
  return { category, classes: [...classes].sort() };
}

export const CLASS_TARGET = {
  REPLACE_KEYCLOAK: 'Keycloak realm fortis, client ativva-crm (OIDC BFF do ATIVVA, externalIdentityId)',
  REPLACE_POSTGRES: 'PostgreSQL 17 + pgvector próprio (database/), sem plataforma Supabase',
  REPLACE_DB_LAYER: 'Camada lib/db (pg + transação com contexto tenant) → repositórios',
  REPLACE_RLS: 'RLS por GUC app.current_company_id + app.current_user_id (padrão ATIVVA)',
  REPLACE_REALTIME: 'Gateway Socket.IO + Redis adapter, sala company:<id> (padrão ATIVVA)',
  REPLACE_STORAGE: 'ObjectStorage (S3/MinIO Fortis), prefixo company/<id>/crm, URL assinada curta',
  REPLACE_REDIS: 'Redis Fortis (ioredis) com prefixo crm:',
  REPLACE_N8N: 'IntegrationEvent outbox → n8n Fortis',
  DELETE_INFRA_ONLY: 'Remover/reescrever a infraestrutura Supabase (funcionalidade preservada)',
  KEEP_DOMAIN_LOGIC: 'Manter domínio; só texto/comentário cita Supabase',
  HISTORICAL_ALLOWED: 'Registro histórico (item 70): permitido, não operacional',
  UNVERIFIED: 'Revisão manual pendente',
};

export const CLASS_PHASE = {
  REPLACE_POSTGRES: 'F1',
  REPLACE_RLS: 'F1',
  REPLACE_DB_LAYER: 'F1–F8',
  REPLACE_KEYCLOAK: 'F2',
  REPLACE_STORAGE: 'F3',
  REPLACE_REALTIME: 'F4',
  REPLACE_REDIS: 'F5',
  REPLACE_N8N: 'F6',
  DELETE_INFRA_ONLY: 'F7–F8',
  KEEP_DOMAIN_LOGIC: 'F8',
  HISTORICAL_ALLOWED: '—',
  UNVERIFIED: 'F0',
};

export function riskOf(classes, signals) {
  if (classes.includes('REPLACE_RLS') || classes.includes('REPLACE_KEYCLOAK')) return 'ALTO';
  if (signals.hits.adminClient) return 'ALTO';
  if (classes.includes('REPLACE_REALTIME') || classes.includes('REPLACE_STORAGE')) return 'MÉDIO';
  if (classes.includes('REPLACE_DB_LAYER')) return 'MÉDIO';
  return 'BAIXO';
}
