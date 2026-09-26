import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ findUnique: vi.fn(), runPlatformTransaction: vi.fn() }));
vi.mock("@/lib/db", () => ({
  db: () => ({
    runPlatformTransaction: mocks.runPlatformTransaction,
  }),
}));

import { resolveTenantContext } from "@/lib/auth/identity";

const principal = {
  sub: "kc|opaque-subject",
  sid: "22222222-2222-4222-8222-222222222222",
  acr: "aal2" as const,
  amr: ["pwd", "otp"],
};
const userId = "33333333-3333-4333-8333-333333333333";
const companyId = "44444444-4444-4444-8444-444444444444";

describe("resolveTenantContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.runPlatformTransaction.mockImplementation((_reason, fn) =>
      fn({ users: { findUnique: mocks.findUnique } }),
    );
  });

  it("resolves the opaque subject by external identity and maps internal id", async () => {
    mocks.findUnique.mockResolvedValue({
      id: userId,
      external_identity_id: principal.sub,
      disabled_at: null,
    });
    await expect(resolveTenantContext(principal, companyId)).resolves.toEqual({
      userId,
      companyId,
      aal: "aal2",
      sessionId: principal.sid,
    });
    expect(mocks.runPlatformTransaction).toHaveBeenCalledWith("auth", expect.any(Function));
    expect(mocks.findUnique).toHaveBeenCalledWith({
      where: { external_identity_id: principal.sub },
      select: { id: true, external_identity_id: true, disabled_at: true },
    });
  });

  it.each([null, { id: userId, external_identity_id: principal.sub, disabled_at: new Date() }])(
    "fails closed for missing or disabled identity",
    async (identity) => {
      mocks.findUnique.mockResolvedValue(identity);
      await expect(resolveTenantContext(principal, companyId)).rejects.toThrow(
        "validated principal has no enabled internal identity",
      );
    },
  );
});
