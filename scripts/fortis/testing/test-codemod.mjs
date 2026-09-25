// Load-time codemod for the upstream DB invariant tests (tests/invariants is
// frozen upstream: loop/hooks/freeze-invariants.sh). The files stay
// byte-identical to upstream — upstream syncs never conflict on them — and the
// Fortis harness runs them against the Fortis platform by rewriting, in
// memory, the same platform objects the schema build rewrites.
import { PLATFORM_RULES, applyRules } from '../baseline/neutralize.mjs';

const TEST_RULES = [
  // Tests that read or re-apply the schema must see the one Fortis applies.
  ['baseline-path', /supabase\/baseline\.sql/g, 'database/baseline/baseline.sql'],
  [
    'baseline-path-parts',
    /(["'`])supabase\1(\s*,\s*)(["'`])baseline\.sql\3/g,
    '$1database$1$2$3baseline$3$2$3baseline.sql$3',
  ],
  ['migrations-path', /supabase\/migrations/g, 'database/upstream-migrations'],
  [
    'migrations-path-parts',
    /(["'`])supabase\1(\s*,\s*)(["'`])migrations\3/g,
    '$1database$1$2$3upstream-migrations$3',
  ],
  // Tests that grep function bodies spell auth.uid() as a regex.
  ['auth-uid-escaped', /auth(\\+)\.uid\1\(\1\)/g, 'fortis$1.current_user_id$1($1)'],
  ['auth-uid-bracketed', /auth\[\.\]uid\[\(\]\[\)\]/g, 'fortis[.]current_user_id[(][)]'],
  // PostgREST's login role is crm_app on Fortis (same lock_timeout contract).
  ['role-authenticator', /(?<![a-z_.])authenticator(?![a-z_])/g, 'crm_app'],
  [
    'jwt-claims-context',
    /set_config\(\s*(['"])request\.jwt\.claims\1\s*,/g,
    'test_db.contexto_do_usuario(',
  ],
  ...PLATFORM_RULES,
];

const TS_COMMENT = /^\s*(\/\/|\*|\/\*)/;
const TEST_SOURCE = /\/tests\/(invariants|db|helpers)\/[^/]+\.(ts|tsx|mts)$/;

export function transformTestSource(code) {
  return applyRules(code, TEST_RULES, { comment: TS_COMMENT });
}

/** Vite/Vitest plugin: applies the codemod to the DB test sources only. */
export function fortisTestCodemod() {
  return {
    name: 'fortis-test-codemod',
    enforce: 'pre',
    transform(code, id) {
      if (!TEST_SOURCE.test(id.split('?')[0])) return null;
      return { code: transformTestSource(code).text, map: null };
    },
  };
}
