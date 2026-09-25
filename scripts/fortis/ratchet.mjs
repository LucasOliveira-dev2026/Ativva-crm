// Pure ratchet rules of the zero-Supabase gate (scripts/fortis/zero-supabase-gate.mjs).

export function compare(baseline, current) {
  const problems = [];
  const tightened = [];
  for (const r of current) {
    if (r.category === 'HISTORY') continue;
    const before = baseline.get(r.path);
    if (!before) {
      problems.push(`new Supabase dependency: ${r.path} (${r.classes.join(', ')})`);
      continue;
    }
    const gained = r.classes.filter((c) => !before.classes.includes(c));
    if (gained.length) problems.push(`${r.path} gained ${gained.join(', ')}`);
  }
  const now = new Set(current.map((r) => r.path));
  for (const path of baseline.keys()) if (!now.has(path)) tightened.push(path);
  return { problems, tightened };
}

// The upstream schema history is the INPUT of scripts/fortis/baseline/build.mjs
// (rewritten, never applied); it stays byte-identical to ease upstream syncs.
const UPSTREAM_SCHEMA_SOURCE = /^supabase\/(baseline\.sql|migrations\/)/;
const STRICT_CATEGORIES = new Set(['RUNTIME', 'GENERATED', 'CONFIG', 'CI', 'INFRA', 'SQL', 'SCRIPT']);

export function strictProblems(current, pkg) {
  const out = current
    .filter((r) => STRICT_CATEGORIES.has(r.category) && !UPSTREAM_SCHEMA_SOURCE.test(r.path))
    .filter((r) => !r.classes.every((c) => c === 'KEEP_DOMAIN_LOGIC'))
    .map((r) => `${r.category} ${r.path}`);
  for (const field of ['dependencies', 'devDependencies', 'optionalDependencies']) {
    for (const name of Object.keys(pkg[field] ?? {})) {
      if (name.startsWith('@supabase/')) out.push(`package.json ${field}: ${name}`);
    }
  }
  return out;
}

