// Supabase signal detection for one file's text. Pure: text in, findings out.
// The patterns are the audit list of the Fortis platform migration
// (docs/fortis/SUPABASE-MIGRATION-INVENTORY.md). Each finding keeps the line
// numbers so the inventory can point at the exact area.

const TS_SIGNALS = {
  sdkImport: /from\s+["']@supabase\/|require\(\s*["']@supabase\/|import\(\s*["']@supabase\//,
  serverClient: /@\/lib\/supabase\/server|createServerClient\b/,
  adminClient: /@\/lib\/supabase\/admin|createAdminClient\b|service_role|SUPABASE_SERVICE_ROLE/,
  browserClient: /@\/lib\/supabase\/browser|createBrowserClient\b/,
  auth: /\.auth\s*\.\s*(getUser|getClaims|getSession|signIn\w*|signUp|signOut|mfa|exchangeCodeForSession|admin|updateUser|resetPasswordForEmail|verifyOtp|onAuthStateChange|refreshSession|setSession|reauthenticate|resend)\b/,
  realtime: /postgres_changes|\.channel\(|useRealtimeChannel|removeChannel\(|RealtimeChannel\b|broadcast\s*:/,
  storage: /\.storage\s*\.\s*from\(|\.storage\b\s*$|createSignedUrl|createSignedUploadUrl|getPublicUrl/,
  redis: /@upstash\//,
  supabaseHelper: /@\/lib\/supabase\/(cookie-secure|em-lotes)/,
  cookie: /["'`]sb-[a-z0-9-]*|sb-access-token|sb-refresh-token/,
  env: /\bSUPABASE_[A-Z_]+|NEXT_PUBLIC_SUPABASE_[A-Z_]+/,
};

const SQL_SIGNALS = {
  rlsAuthUid: /\bauth\.uid\(\)|\bauth\.jwt\(\)|request\.jwt\.claim/,
  supabaseRoles: /\b(to|TO|role|ROLE)\s+"?(authenticated|anon|service_role)"?\b|'(authenticated|anon|service_role)'/,
  identity: /\bauth\.(users|sessions|mfa_factors|identities)\b/,
  storage: /\bstorage\.(objects|buckets|foldername)\b|"storage"\."(objects|buckets)"/,
  realtime: /supabase_realtime|realtime\.(messages|broadcast|send)/,
  helper: /fn_user_org_ids|fn_user_role_in_org|fn_user_role_in\b/,
};

const MENTION = /supabase/i;
const FROM_TABLE = /(?<!storage\s*)\.from\(\s*["'`]([a-z_][a-z0-9_]*)["'`]/g;
const RPC_NAME = /\.rpc\(\s*["'`]([a-z_][a-z0-9_]*)["'`]/g;
const ENV_NAME = /\b(?:NEXT_PUBLIC_)?SUPABASE_[A-Z_]+/g;
const COMMENT_LINE = /^\s*(\/\/|\*|\/\*|\{\/\*|#|--|<!--)/;

function scanPatterns(lines, patterns, into) {
  lines.forEach((line, index) => {
    for (const [name, pattern] of Object.entries(patterns)) {
      if (pattern.test(line)) (into[name] ??= []).push(index + 1);
    }
  });
}

function collect(text, regex) {
  return [...new Set([...text.matchAll(regex)].map((m) => m[1] ?? m[0]))].sort();
}

/**
 * @param {string} text
 * @param {{ sql: boolean }} kind
 */
export function detectSignals(text, { sql }) {
  const lines = text.split('\n');
  const hits = {};
  scanPatterns(lines, sql ? SQL_SIGNALS : TS_SIGNALS, hits);
  const tables = sql ? [] : collect(text, FROM_TABLE);
  const rpcs = sql ? [] : collect(text, RPC_NAME);
  if (tables.length) hits.db = lineNumbers(lines, /\.from\(\s*["'`][a-z_]/);
  if (rpcs.length) hits.rpc = lineNumbers(lines, /\.rpc\(/);
  const mentionLines = lineNumbers(lines, MENTION);
  const codeMentions = mentionLines.filter((n) => !COMMENT_LINE.test(lines[n - 1]));
  return {
    hits,
    tables,
    rpcs,
    envNames: collect(text, ENV_NAME),
    mentionLines,
    commentOnly: mentionLines.length > 0 && codeMentions.length === 0,
  };
}

function lineNumbers(lines, pattern) {
  const out = [];
  lines.forEach((line, i) => pattern.test(line) && out.push(i + 1));
  return out;
}

export function hasSupabaseSignal(signals) {
  return Object.keys(signals.hits).length > 0 || signals.mentionLines.length > 0;
}
