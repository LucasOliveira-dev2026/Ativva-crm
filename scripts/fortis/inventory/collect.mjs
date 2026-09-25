// Walks the tracked tree once and builds the two inventories as plain data.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { classify, riskOf } from './classify.mjs';
import { ImportGraph } from './imports.mjs';
import { isEntryPoint, moduleOf, routeOf } from './modules.mjs';
import { detectSignals, hasSupabaseSignal } from './signals.mjs';

const TEXT = /\.(ts|tsx|mjs|cjs|js|jsx|json|sql|sh|md|mdx|yml|yaml|toml|txt|conf|env[a-z.]*)$|(^|\/)(Dockerfile[^/]*|Caddyfile[^/]*|\.env[^/]*)$/;
// The migration's own tooling, docs and ODD task records name Supabase on purpose; `database/`
// is guarded separately by scripts/fortis/baseline/build.mjs --check, which
// refuses any Supabase platform object in the applied schema.
const SELF = /^(scripts\/fortis\/|docs\/fortis\/|database\/|odd\/)/;
// A file reached by this many entry points is shared plumbing, not a feature.
const SHARED_FANOUT = 40;

export function trackedFiles(root) {
  return execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' })
    .split('\n')
    .filter((p) => p && TEXT.test(p) && !SELF.test(p) && p !== 'pnpm-lock.yaml');
}

export function knownTables(root) {
  const sql = readFileSync(join(root, 'supabase/baseline.sql'), 'utf8');
  const names = [...sql.matchAll(/CREATE TABLE (?:IF NOT EXISTS )?(?:"?public"?\.)?"?([a-z_][a-z0-9_]*)"?/gi)];
  return new Set(names.map((m) => m[1]));
}

const stableId = (prefix, path) =>
  `${prefix}-${createHash('sha1').update(path).digest('hex').slice(0, 6)}`;

export function collect(root) {
  const cache = new Map();
  const read = (p) => {
    if (!cache.has(p)) {
      try {
        cache.set(p, readFileSync(join(root, p), 'utf8'));
      } catch {
        cache.set(p, undefined);
      }
    }
    return cache.get(p);
  };
  const tables = knownTables(root);
  const files = trackedFiles(root);
  const signalsOf = new Map();
  const supabase = [];
  for (const path of files) {
    const text = read(path);
    if (text === undefined) continue;
    const signals = detectSignals(text, { sql: path.endsWith('.sql') });
    signals.tables = signals.tables.filter((t) => tables.has(t));
    signalsOf.set(path, signals);
    if (!hasSupabaseSignal(signals)) continue;
    const { category, classes } = classify(path, signals);
    supabase.push({
      id: stableId('SB', path),
      path,
      category,
      classes,
      risk: riskOf(classes, signals),
      areas: Object.fromEntries(
        Object.entries(signals.hits).map(([k, lines]) => [k, lines.slice(0, 6)]),
      ),
      tables: signals.tables,
      rpcs: signals.rpcs,
      envNames: signals.envNames,
      status: classes.includes('HISTORICAL_ALLOWED') ? 'ALLOWED' : 'PENDING',
    });
  }
  return { supabase, functional: collectFunctional(root, files, read, signalsOf) };
}

function collectFunctional(root, files, read, signalsOf) {
  const graph = new ImportGraph(root, read);
  const entries = files.filter(isEntryPoint).sort();
  const closures = new Map(entries.map((e) => [e, graph.closure(e)]));
  const fanout = new Map();
  for (const closure of closures.values())
    for (const f of closure) fanout.set(f, (fanout.get(f) ?? 0) + 1);
  const testsByFile = indexTests(files, graph);

  return entries.map((entry) => {
    const closure = [...closures.get(entry)];
    const kinds = new Set();
    const tablesUsed = new Set();
    const apis = new Set();
    const tests = new Set();
    for (const f of closure) {
      const s = signalsOf.get(f);
      if (s) {
        for (const k of Object.keys(s.hits)) kinds.add(k);
        s.tables.forEach((t) => tablesUsed.add(t));
      }
      for (const m of (read(f) ?? '').matchAll(/["'`](\/api\/v1\/[a-z0-9-]+)/g)) apis.add(m[1]);
      if ((fanout.get(f) ?? 0) < SHARED_FANOUT)
        (testsByFile.get(f) ?? []).forEach((t) => tests.add(t));
    }
    const unresolved = closure.flatMap((f) => graph.unresolved.get(f) ?? []);
    return {
      id: stableId('FN', entry),
      module: moduleOf(entry) ?? 'UNMAPPED',
      entry,
      route: routeOf(entry),
      kind: entryKind(entry),
      apis: [...apis].sort(),
      tables: [...tablesUsed].sort(),
      supabaseKinds: [...kinds].filter((k) => k !== 'env').sort(),
      tests: [...tests].sort(),
      unresolved,
    };
  });
}

function entryKind(entry) {
  if (entry.endsWith('page.tsx')) return 'PAGE';
  if (/\/cron\//.test(entry)) return 'CRON';
  if (/\/route\.tsx?$/.test(entry)) return 'API';
  if (entry.startsWith('app/actions/')) return 'ACTION';
  return 'WORKER';
}

function indexTests(files, graph) {
  const byFile = new Map();
  for (const t of files.filter((p) => /\.(test|spec)\.tsx?$/.test(p))) {
    for (const dep of graph.depsOf(t)) {
      if (!byFile.has(dep)) byFile.set(dep, []);
      byFile.get(dep).push(t);
    }
  }
  return byFile;
}
