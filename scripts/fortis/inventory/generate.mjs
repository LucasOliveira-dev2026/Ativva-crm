#!/usr/bin/env node
// Regenerates the Fortis migration inventories from the tracked tree.
//   node scripts/fortis/inventory/generate.mjs          # write
//   node scripts/fortis/inventory/generate.mjs --check  # fail if stale (CI)
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collect } from './collect.mjs';
import { render } from './render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const upstream = JSON.parse(readFileSync(join(root, 'docs/fortis/upstream.json'), 'utf8'));
const inventory = collect(root);
const outputs = render(inventory, upstream.baseSha.slice(0, 12));
// Baseline for the zero-Supabase ratchet (scripts/fortis/zero-supabase-gate.mjs):
// one record per line so upstream syncs produce readable diffs.
outputs['docs/fortis/inventory/supabase-baseline.jsonl'] = inventory.supabase
  .map(({ id, path, category, classes }) => JSON.stringify({ id, path, category, classes }))
  .join('\n')
  .concat('\n');

const check = process.argv.includes('--check');
const stale = [];
for (const [path, content] of Object.entries(outputs)) {
  const target = join(root, path);
  if (check) {
    let current = null;
    try {
      current = readFileSync(target, 'utf8');
    } catch {}
    if (current !== content) stale.push(path);
  } else {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, content);
  }
}
if (check && stale.length) {
  console.error(`Inventário desatualizado (${stale.length}): ${stale.slice(0, 5).join(', ')}`);
  console.error('Rode: node scripts/fortis/inventory/generate.mjs');
  process.exit(1);
}
console.info(`${check ? 'checked' : 'wrote'} ${Object.keys(outputs).length} files`);
