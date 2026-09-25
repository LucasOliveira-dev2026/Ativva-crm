#!/usr/bin/env node
// Zero-Supabase gate (docs/fortis/UPSTREAM-SYNC.md). A ratchet over the
// generated inventory (docs/fortis/inventory/supabase-baseline.jsonl):
//
//   * no NEW file may depend on or mention Supabase (historical records aside);
//   * a file already in the baseline may not gain a new dependency class;
//   * when dependencies are removed, the baseline must be tightened in the same
//     change (`--update`), so they cannot come back silently;
//   * `--strict` is the F8 exit criterion: zero runtime/config/CI/infra/SQL
//     dependencies and no @supabase/* package.
//
//   node scripts/fortis/zero-supabase-gate.mjs            # CI
//   node scripts/fortis/zero-supabase-gate.mjs --update   # tighten after removals
//   node scripts/fortis/zero-supabase-gate.mjs --strict   # final gate
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collect } from './inventory/collect.mjs';
import { compare, strictProblems } from './ratchet.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const baselinePath = join(root, 'docs/fortis/inventory/supabase-baseline.jsonl');
const args = new Set(process.argv.slice(2));

const readBaseline = () =>
  new Map(
    readFileSync(baselinePath, 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((line) => JSON.parse(line))
      .map((r) => [r.path, r]),
  );

const current = collect(root).supabase;
const baseline = readBaseline();
const { problems, tightened } = compare(baseline, current);

if (args.has('--update')) {
  if (problems.length) {
    console.error('Refusing to update: the baseline only shrinks.');
    problems.forEach((p) => console.error(`  ${p}`));
    process.exit(1);
  }
  const keep = current.map(({ id, path, category, classes }) => JSON.stringify({ id, path, category, classes }));
  writeFileSync(baselinePath, `${keep.join('\n')}\n`);
  console.info(`baseline tightened: ${tightened.length} file(s) removed, ${keep.length} left`);
  process.exit(0);
}

if (tightened.length) {
  problems.push(
    `${tightened.length} file(s) no longer depend on Supabase; lock it in with --update (e.g. ${tightened[0]})`,
  );
}
if (args.has('--strict')) {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
  problems.push(...strictProblems(current, pkg).map((p) => `strict: ${p}`));
}

const runtime = current.filter((r) => ['RUNTIME', 'GENERATED'].includes(r.category)).length;
console.info(`Supabase inventory: ${current.length} files (${runtime} runtime), baseline ${baseline.size}`);
if (problems.length) {
  problems.slice(0, 40).forEach((p) => console.error(`FAIL  ${p}`));
  if (problems.length > 40) console.error(`… and ${problems.length - 40} more`);
  process.exit(1);
}
console.info(args.has('--strict') ? 'ZERO SUPABASE: PASS' : 'ratchet: PASS (no new Supabase dependency)');
