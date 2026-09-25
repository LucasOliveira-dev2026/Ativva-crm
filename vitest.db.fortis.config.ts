import { defineConfig, mergeConfig } from "vitest/config";
import base from "./vitest.db.config";
import { fortisTestCodemod } from "./scripts/fortis/testing/test-codemod.mjs";

// The upstream invariant suite, run by scripts/fortis/test-db.sh against the
// Fortis platform (plain PostgreSQL, no Supabase). The test sources are
// rewritten at load time; see scripts/fortis/testing/test-codemod.mjs.
export default mergeConfig(base, defineConfig({ plugins: [fortisTestCodemod()] }));
