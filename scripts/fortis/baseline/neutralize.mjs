// Rewrites the upstream Supabase baseline (supabase/baseline.sql, a pg_dump
// plus idempotent tail) into a platform-neutral schema for a plain PostgreSQL
// that carries the Fortis platform prelude (database/platform/).
//
// Every Supabase platform object is mapped to its Fortis equivalent; the
// domain (tables, policies, functions, triggers) is left untouched. The
// rewrite is fail-closed: after applying the rules, any residual reference to
// a Supabase platform object aborts the build instead of shipping a schema
// that only works on Supabase. Re-running on a new upstream baseline is how an
// upstream sync picks up schema changes (docs/fortis/UPSTREAM-SYNC.md).

/**
 * Platform-object rules shared by the schema build and the test codemod.
 * [name, pattern, replacement]. Order matters: specific forms first.
 */
export const PLATFORM_RULES = [
  // Request context: Supabase JWT → Fortis GUC contract (fortis.current_*).
  ['jwt-aal', /\bauth\.jwt\(\)\s*->>\s*'aal'/g, 'fortis.current_aal()'],
  [
    'jwt-session-id',
    /nullif\(\s*auth\.jwt\(\)\s*->>\s*'session_id'\s*,\s*''\s*\)::uuid/g,
    'fortis.current_session_id()',
  ],
  ['auth-uid-quoted', /"auth"\."uid"\(\)/g, '"fortis"."current_user_id"()'],
  ['auth-uid', /\bauth\.uid\(\)/g, 'fortis.current_user_id()'],
  // Identity: Supabase Auth tables → identity schema fed by Keycloak.
  ['auth-quoted', /"auth"\."(users|sessions|mfa_factors)"/g, '"identity"."$1"'],
  ['auth-users', /\bauth\.users\b/g, 'identity.users'],
  ['auth-sessions', /\bauth\.sessions\b/g, 'identity.sessions'],
  ['auth-mfa-factors', /\bauth\.mfa_factors\b/g, 'identity.mfa_factors'],
  ['user-profile', /\braw_user_meta_data\b/g, 'profile'],
  // Object metadata registry (bytes live in the Fortis S3 store).
  ['storage-quoted', /"storage"\."(objects|buckets)"/g, '"object_storage"."$1"'],
  ['storage-regclass', /to_regclass\('storage\.objects'\)/g, "to_regclass('object_storage.objects')"],
  [
    'storage',
    /(?<![a-z_])storage\.(objects|buckets|foldername|filename|extension)\b/g,
    'object_storage.$1',
  ],
  // Realtime catalog: the publication name documents which tables emit events.
  ['realtime-publication', /\bsupabase_realtime\b/g, 'crm_realtime'],
  // Roles: Supabase API roles → Fortis CRM roles (see database/platform).
  // Quotes around the name are kept, so SQL identifiers and JS strings survive;
  // a column alias (`... as anon`) is a result key read by code, not a role.
  ['role-anon', /(?<![a-z_.]|\b[aA][sS]\s+)("?)anon\1(?![a-z_])/g, '$1crm_anonymous$1'],
  ['role-authenticated', /(?<![a-z_.]|\b[aA][sS]\s+)("?)authenticated\1(?![a-z_])/g, '$1crm_user$1'],
  ['role-service', /(?<![a-z_.]|\b[aA][sS]\s+)("?)service_role\1(?![a-z_])/g, '$1crm_platform$1'],
];

/** Rules that only make sense for the schema applied by crm_owner. */
export const SCHEMA_ONLY_RULES = [
  // Role-level settings belong to the platform, not the schema owner: the
  // upstream 4s lock_timeout for API requests (migration 0243) is set by
  // database/platform/0001_fortis_platform.sql on the Fortis equivalents
  // (crm_app, the login role, and crm_user). `authenticator` (PostgREST) does
  // not exist on Fortis, so its other guarded blocks are no-ops.
  [
    'api-lock-timeout',
    /execute 'alter role (?:authenticator|authenticated) set lock_timeout = ''4s''';/g,
    'null; -- Fortis: set on crm_app/crm_user by database/platform (migration 0243)',
  ],
  ['owner-quoted', /"postgres"/g, '"crm_owner"'],
  // Supabase's `postgres` was both schema owner and administrator; on Fortis
  // those are crm_owner and the cluster superuser, and both stay privileged.
  ['owner-literal', /'postgres'/g, "'crm_owner','postgres'"],
  ['owner-to', /\bowner to postgres\b/gi, 'owner to crm_owner'],
];

/** Anything still matching after the rules is a Supabase platform dependency. */
export const RESIDUALS = [
  ['auth schema', /(?<![a-z_])"?auth"?\.(?!ts\b)"?[a-z_]+/],
  ['storage schema', /(?<![a-z_])"?storage"?\."?(objects|buckets)/],
  ['jwt claims', /request\.jwt\.claim/],
  ['supabase role', /(?<![a-z_])(service_role|supabase_[a-z_]+)(?![a-z_])/],
];

const SQL_COMMENT = /^\s*--/;
const ROLE_RULE = /^role-/;
const TRAILING_SQL_COMMENT = /--\s/;

/**
 * Applies `rules` line by line. Role rules skip comment lines: prose is not a
 * role, and rewriting it would only obscure the upstream history.
 */
export function applyRules(text, rules, { comment = SQL_COMMENT } = {}) {
  const counts = Object.fromEntries(rules.map(([name]) => [name, 0]));
  const out = text.split('\n').map((line) => {
    let result = line;
    for (const [name, pattern, replacement] of rules) {
      if (ROLE_RULE.test(name) && comment.test(result)) continue;
      const replace = (text) =>
        text.replace(pattern, (...m) => {
          counts[name] += 1;
          return replacement.replace(/\$(\d)/g, (_, i) => m[Number(i)] ?? '');
        });
      // Role words after an SQL `-- ` marker are prose, even inside a string.
      const cut = ROLE_RULE.test(name) ? result.search(TRAILING_SQL_COMMENT) : -1;
      result = cut < 0 ? replace(result) : replace(result.slice(0, cut)) + result.slice(cut);
    }
    return result;
  });
  return { text: out.join('\n'), counts };
}

export function neutralize(sql) {
  const { text, counts } = applyRules(sql, [...SCHEMA_ONLY_RULES, ...PLATFORM_RULES]);
  const residuals = [];
  text.split('\n').forEach((line, i) => {
    if (SQL_COMMENT.test(line)) return;
    for (const [what, pattern] of RESIDUALS) {
      if (pattern.test(line)) residuals.push(`${i + 1}: ${what}: ${line.trim().slice(0, 140)}`);
    }
  });
  return { sql: text, counts, residuals };
}
