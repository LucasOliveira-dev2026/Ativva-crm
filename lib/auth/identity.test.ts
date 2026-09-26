import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  findIdentity: vi.fn(),
  findSession: vi.fn(),
  runPlatformTransaction: vi.fn(),
}));
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

const identity = {
  id: userId,
  external_identity_id: principal.sub,
  disabled_at: null,
};
const session = {
  id: principal.sid,
  user_id: userId,
  aal: "aal2",
  not_after: null,
};

describe("resolveTenantContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.runPlatformTransaction.mockImplementation((_reason, fn) =>
      fn({
        users: { findUnique: mocks.findIdentity },
        sessions: { findUnique: mocks.findSession },
      }),
    );
    mocks.findIdentity.mockResolvedValue(identity);
    mocks.findSession.mockResolvedValue(session);
  });

  it("resolves identity and session and maps the opaque subject to DB context", async () => {
    await expect(resolveTenantContext(principal, companyId)).resolves.toEqual({
      userId,
      companyId,
      aal: "aal2",
      sessionId: principal.sid,
    });
    expect(mocks.runPlatformTransaction).toHaveBeenCalledWith("auth", expect.any(Function));
    expect(mocks.findIdentity).toHaveBeenCalledWith({
      where: { external_identity_id: principal.sub },
      select: { id: true, external_identity_id: true, disabled_at: true },
    });
    expect(mocks.findSession).toHaveBeenCalledWith({
      where: { id: principal.sid },
      select: { id: true, user_id: true, aal: true, not_after: true },
    });
  });

  it.each([
    ["missing", null],
    ["disabled", { ...identity, disabled_at: new Date() }],
  ])("fails closed for %s identity", async (_label, row) => {
    mocks.findIdentity.mockResolvedValue(row);
    await expect(resolveTenantContext(principal, companyId)).rejects.toThrow(
      "validated principal has no enabled internal identity",
    );
    expect(mocks.findSession).not.toHaveBeenCalled();
  });

  it.each([
    ["missing", null],
    ["owned by another user", { ...session, user_id: "55555555-5555-4555-8555-555555555555" }],
    ["expired", { ...session, not_after: new Date(Date.now() - 1) }],
    ["assurance mismatch", { ...session, aal: "aal1" }],
    ["invalid assurance", { ...session, aal: "unknown" }],
  ])("fails closed for %s session", async (_label, row) => {
    mocks.findSession.mockResolvedValue(row);
    await expect(resolveTenantContext(principal, companyId)).rejects.toThrow(
      "validated principal has no active Fortis session",
    );
  });
});
