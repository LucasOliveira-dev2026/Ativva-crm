import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";


describe("shared database", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://test.supabase.co");
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "test-anon");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "test-service");
  });

  afterEach(() => vi.unstubAllEnvs());

  it("returns one lazily-created database instance per process", async () => {
    process.env.DATABASE_URL = "postgresql://crm_app:crm_app@localhost/postgres";
    const { db: getDatabase } = await import("@/lib/db");

    expect(getDatabase()).toBe(getDatabase());
  });

  it("fails clearly when configuration is missing without creating a pool", async () => {
    delete process.env.DATABASE_URL;
    const { db: getDatabase } = await import("@/lib/db");

    expect(() => getDatabase()).toThrow(/DATABASE_URL/);
  });
});
