import { describe, expect, it } from "vitest";

import { tenantContextFromValidatedPrincipal } from "@/lib/auth/tenant-context";

const validInput = {
  principal: {
    sub: "keycloak|opaque-subject-123",
    sid: "22222222-2222-4222-8222-222222222222",
    acr: "aal2" as const,
    amr: ["pwd", "otp"],
  },
  identity: {
    id: "33333333-3333-4333-8333-333333333333",
    externalIdentityId: "keycloak|opaque-subject-123",
    disabled: false,
  },
  activeCompanyId: "44444444-4444-4444-8444-444444444444",
};

describe("tenantContextFromValidatedPrincipal", () => {
  it("maps the validated external principal and resolved identity to DB context", () => {
    expect(tenantContextFromValidatedPrincipal(validInput)).toEqual({
      userId: validInput.identity.id,
      companyId: validInput.activeCompanyId,
      aal: "aal2",
      sessionId: validInput.principal.sid,
    });
  });

  it("allows no active company", () => {
    expect(
      tenantContextFromValidatedPrincipal({ ...validInput, activeCompanyId: null }).companyId,
    ).toBeNull();
  });

  it.each([
    ["missing identity", { identity: null }],
    ["disabled identity", { identity: { ...validInput.identity, disabled: true } }],
    ["blank subject", { principal: { ...validInput.principal, sub: "  " } }],
    [
      "subject mismatch",
      { identity: { ...validInput.identity, externalIdentityId: "another-subject" } },
    ],
    ["invalid internal identity id", { identity: { ...validInput.identity, id: "not-a-uuid" } }],
    ["invalid session", { principal: { ...validInput.principal, sid: "not-a-uuid" } }],
    ["invalid company", { activeCompanyId: "not-a-uuid" }],
    ["invalid assurance level", { principal: { ...validInput.principal, acr: "aal3" } }],
  ])("rejects %s", (_name, override) => {
    expect(() =>
      tenantContextFromValidatedPrincipal({ ...validInput, ...override } as never),
    ).toThrow();
  });
});
