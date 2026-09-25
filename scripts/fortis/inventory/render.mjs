// Markdown rendering of the collected inventories. No I/O here: returns a map
// of repo-relative path → file content, so `generate.mjs --check` can diff it.
import { CLASS_PHASE, CLASS_TARGET } from './classify.mjs';
import { MODULES } from './modules.mjs';

const GENERATED_NOTE = (upstream) =>
  `> Gerado por \`node scripts/fortis/inventory/generate.mjs\` sobre o upstream \`${upstream}\`.\n` +
  '> Não editar à mão: altere as regras em `scripts/fortis/inventory/` e regenere.\n';

const cell = (v) => String(v ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const list = (items, max = 4) =>
  items.length <= max ? items.join(', ') : `${items.slice(0, max).join(', ')} +${items.length - max}`;
const table = (head, rows) =>
  [`| ${head.join(' | ')} |`, `| ${head.map(() => '---').join(' | ')} |`, ...rows.map((r) => `| ${r.map(cell).join(' | ')} |`)].join('\n');

function countBy(items, key) {
  const out = {};
  for (const item of items) for (const k of [].concat(key(item))) out[k] = (out[k] ?? 0) + 1;
  return Object.entries(out).sort((a, b) => b[1] - a[1]);
}

const areaOf = (areas) =>
  Object.entries(areas)
    .map(([k, lines]) => `${k}:${lines.join(',')}`)
    .join(' ');

function supabaseCategoryFile(category, rows) {
  const body = table(
    ['ID', 'Arquivo', 'Linha/área', 'Classificação', 'Substituto Fortis', 'Risco', 'Dependências', 'Status'],
    rows.map((r) => [
      r.id,
      `\`${r.path}\``,
      areaOf(r.areas),
      r.classes.join(' + '),
      r.classes.map((c) => CLASS_PHASE[c]).join('/'),
      r.risk,
      list([...r.tables.map((t) => `t:${t}`), ...r.rpcs.map((f) => `rpc:${f}`), ...r.envNames]),
      r.status,
    ]),
  );
  return `# Supabase — ${category} (${rows.length} arquivos)\n\n${body}\n`;
}

function renderSupabase(inv, upstream) {
  const rows = inv.supabase;
  const byCategory = countBy(rows, (r) => r.category);
  const files = {};
  const links = byCategory.map(([category, n]) => {
    const name = `inventory/supabase-${category.toLowerCase()}.md`;
    files[`docs/fortis/${name}`] = supabaseCategoryFile(
      category,
      rows.filter((r) => r.category === category),
    );
    return [category, n, `[${name}](${name})`];
  });
  const runtime = rows.filter((r) => ['RUNTIME', 'GENERATED'].includes(r.category));
  const sum = (key) => runtime.filter((r) => r.areas[key]).length;
  const tables = new Set(runtime.flatMap((r) => r.tables));
  const rpcs = new Set(runtime.flatMap((r) => r.rpcs));
  const envs = new Set(rows.filter((r) => r.category !== 'HISTORY').flatMap((r) => r.envNames));
  const unverified = rows.filter((r) => r.classes.includes('UNVERIFIED')).length;

  files['docs/fortis/SUPABASE-MIGRATION-INVENTORY.md'] = [
    '# Inventário de migração do Supabase',
    '',
    GENERATED_NOTE(upstream),
    `**Arquivos com dependência ou menção: ${rows.length}** · UNVERIFIED: **${unverified}**`,
    '',
    '## Por área',
    '',
    table(['Categoria', 'Arquivos', 'Detalhe'], links),
    '',
    '## Por classificação',
    '',
    'Um arquivo pode ter mais de uma classificação. `DELETE_INFRA_ONLY` remove infraestrutura, nunca funcionalidade.',
    '',
    table(
      ['Classificação', 'Arquivos', 'Substituto Fortis', 'Fase'],
      countBy(rows, (r) => r.classes).map(([c, n]) => [c, n, CLASS_TARGET[c], CLASS_PHASE[c]]),
    ),
    '',
    '## Por risco',
    '',
    table(['Risco', 'Arquivos'], countBy(rows, (r) => r.risk)),
    '',
    '## Runtime (app, lib, components, hooks, workers)',
    '',
    table(
      ['Sinal', 'Arquivos'],
      [
        ['cliente server (RLS via JWT do usuário)', sum('serverClient')],
        ['cliente admin (service_role, ignora RLS)', sum('adminClient')],
        ['cliente browser', sum('browserClient')],
        ['`.from(tabela)`', sum('db')],
        ['`.rpc(função)`', sum('rpc')],
        ['`supabase.auth.*`', sum('auth')],
        ['Realtime', sum('realtime')],
        ['Storage', sum('storage')],
        ['Upstash', sum('redis')],
        ['Import direto de `@supabase/*`', sum('sdkImport')],
      ],
    ),
    '',
    `Tabelas acessadas pelo runtime: **${tables.size}** · RPCs distintas: **${rpcs.size}**`,
    '',
    `Variáveis de ambiente Supabase (fora do histórico): ${[...envs].sort().map((e) => `\`${e}\``).join(', ')}`,
    '',
    '## RPCs chamadas pelo runtime',
    '',
    [...rpcs].sort().map((r) => `\`${r}\``).join(', '),
    '',
  ].join('\n');
  return files;
}

function functionalStatus(entry) {
  if (entry.module === 'UNMAPPED' || entry.unresolved.length) return 'UNVERIFIED';
  const k = entry.supabaseKinds;
  if (['AUTH', 'PLATFORM_ADMIN', 'TEAM', 'API_TOKENS'].includes(entry.module) || k.includes('auth'))
    return 'PRESERVE_ADAPT_FORTIS';
  if (k.length) return 'PRESERVE_REIMPLEMENT_INFRA';
  return 'PRESERVE_AS_IS';
}

function renderFunctional(inv, upstream) {
  const entries = inv.functional.map((e) => ({ ...e, status: functionalStatus(e) }));
  const files = {};
  const summary = Object.keys(MODULES)
    .concat(entries.some((e) => e.module === 'UNMAPPED') ? ['UNMAPPED'] : [])
    .map((module) => {
      const rows = entries.filter((e) => e.module === module);
      const name = `inventory/functional-${module.toLowerCase()}.md`;
      files[`docs/fortis/${name}`] = functionalModuleFile(module, rows);
      const kinds = countBy(rows, (r) => r.kind).map(([k, n]) => `${n} ${k}`).join(', ');
      const statuses = countBy(rows, (r) => r.status).map(([s, n]) => `${s} ${n}`).join(', ');
      const tested = rows.filter((r) => r.tests.length).length;
      return [module, MODULES[module] ?? '—', kinds, `${tested}/${rows.length}`, statuses, `[detalhe](${name})`];
    });
  const unverified = entries.filter((e) => e.status === 'UNVERIFIED').length;
  files['docs/fortis/FUNCTIONAL-INVENTORY.md'] = [
    '# Inventário funcional do upstream',
    '',
    GENERATED_NOTE(upstream),
    `**Pontos de entrada: ${entries.length}** (páginas, rotas de API, crons, server actions, workers) · UNVERIFIED: **${unverified}**`,
    '',
    'Cada ponto de entrada é seguido pelo grafo de imports até as tabelas (`.from`) e os sinais Supabase que alcança.',
    'Testes ligados = testes que importam um arquivo específico da funcionalidade (arquivos compartilhados por 40+ pontos de entrada não contam).',
    'Nenhuma funcionalidade é classificada como REMOVE: ver `FUNCTIONAL-PARITY-REPORT.md`.',
    '',
    table(['Módulo', 'Descrição', 'Pontos de entrada', 'Com teste ligado', 'Status', 'Detalhe'], summary),
    '',
  ].join('\n');
  return files;
}

function functionalModuleFile(module, rows) {
  const body = table(
    ['ID', 'Tipo', 'Rota', 'Arquivo', 'API', 'Banco', 'Supabase', 'Testes', 'Status'],
    rows.map((r) => [
      r.id,
      r.kind,
      `\`${r.route}\``,
      `\`${r.entry}\``,
      list(r.apis, 3),
      list(r.tables, 5),
      r.supabaseKinds.join(', ') || 'não',
      r.tests.length ? `${r.tests.length}: ${list(r.tests.map((t) => t.split('/').pop()), 2)}` : '0',
      r.status,
    ]),
  );
  return `# ${module} — ${MODULES[module] ?? 'não mapeado'} (${rows.length})\n\n${body}\n`;
}

export function render(inv, upstream) {
  return { ...renderSupabase(inv, upstream), ...renderFunctional(inv, upstream) };
}
