import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

const repo = process.cwd();
const envPath = `${repo}/lib/env.ts`;
const tsx = `${repo}/node_modules/.bin/tsx`;
const validEnv = {
  NODE_ENV: "test" as const,
  NEXT_PUBLIC_SUPABASE_URL: "https://example.test",
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-anon",
  SUPABASE_SERVICE_ROLE_KEY: "test-service",
  DATABASE_URL: "postgresql://crm_app:crm_app@127.0.0.1:5432/postgres",
};

function loadEnv(overrides: Record<string, string>) {
  const script = `import { env } from ${JSON.stringify(envPath)}; console.log(JSON.stringify(env.DATABASE_URL));`;
  return execFileSync(tsx, ["--eval", script], {
    cwd: repo,
    env: { ...process.env, ...validEnv, ...overrides },
    encoding: "utf8",
  }).trim();
}

describe("DATABASE_URL validation", () => {
  it("accepts a PostgreSQL connection URL", () => {
    expect(loadEnv({})).toBe(JSON.stringify(validEnv.DATABASE_URL));
  });

  it("rejects a non-URL value", () => {
    expect(() => loadEnv({ DATABASE_URL: "not-a-url" })).toThrow();
  });
});
