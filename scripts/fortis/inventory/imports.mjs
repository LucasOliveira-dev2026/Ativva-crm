// Local import graph (the `@/` alias and relative paths only; packages are
// leaves). Used to find everything a page or route handler reaches.
import { existsSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const SPEC = /(?:import|export)\s[^'"]*?from\s*["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)|require\(\s*["']([^"']+)["']\s*\)|^\s*import\s+["']([^"']+)["']/gm;
const EXTENSIONS = ['.ts', '.tsx', '.mjs', '.js', '/index.ts', '/index.tsx'];

export function importSpecifiers(text) {
  return [...text.matchAll(SPEC)].map((m) => m[1] ?? m[2] ?? m[3] ?? m[4]);
}

function isFile(path) {
  return existsSync(path) && statSync(path).isFile();
}

/** Resolves a specifier to a repo-relative path, `null` for packages, `undefined` if unresolved. */
export function resolveSpecifier(root, fromFile, spec) {
  let base;
  if (spec.startsWith('@/')) base = join(root, spec.slice(2));
  else if (spec.startsWith('.')) base = resolve(root, dirname(fromFile), spec);
  else return null;
  if (isFile(base)) return relative(root, base);
  for (const ext of EXTENSIONS) if (isFile(base + ext)) return relative(root, base + ext);
  return undefined;
}

export class ImportGraph {
  /** @param {string} root @param {(path: string) => string | undefined} read */
  constructor(root, read) {
    this.root = root;
    this.read = read;
    this.edges = new Map();
    this.unresolved = new Map();
  }

  depsOf(file) {
    if (this.edges.has(file)) return this.edges.get(file);
    const text = this.read(file) ?? '';
    const deps = [];
    const missing = [];
    for (const spec of importSpecifiers(text)) {
      const target = resolveSpecifier(this.root, file, spec);
      if (target) deps.push(target);
      else if (target === undefined) missing.push(spec);
    }
    this.edges.set(file, deps);
    if (missing.length) this.unresolved.set(file, missing);
    return deps;
  }

  /** Every local file reachable from `entry`, test files excluded. */
  closure(entry) {
    const seen = new Set([entry]);
    const queue = [entry];
    while (queue.length) {
      for (const dep of this.depsOf(queue.pop())) {
        if (seen.has(dep) || /\.(test|spec)\./.test(dep)) continue;
        seen.add(dep);
        queue.push(dep);
      }
    }
    return seen;
  }
}
