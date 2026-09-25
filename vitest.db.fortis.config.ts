import { defineConfig, mergeConfig } from "vitest/config";
import base from "./vitest.db.config";
import { fortisTestCodemod } from "./scripts/fortis/testing/test-codemod.mjs";

// The upstream invariant suite, run by scripts/fortis/test-db.sh against the
// Fortis platform (plain PostgreSQL, no Supabase). The test sources are
// rewritten at load time; see scripts/fortis/testing/test-codemod.mjs.
// tests/fortis/db/*.db-test.ts are the Fortis-owned DB tests (lib/db), written against
// the platform directly (the codemod does not touch them). Not `*.test.ts`, so
// the upstream unit run (`vitest run`, default include) never picks them up.
export default mergeConfig(
  base,
  defineConfig({ plugins: [fortisTestCodemod()], test: { include: ["tests/fortis/db/**/*.db-test.ts"] } }),
);
