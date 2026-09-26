import { describe, expect, it } from "vitest";

import { acceptBffValidatedPrincipal } from "@/lib/auth/validated-principal";

const claims = {
  sub: "keycloak|opaque-subject",
  sid: "22222222-2222-4222-8222-222222222222",
  acr: "aal2",
  amr: ["pwd", "otp"],
};

describe("acceptBffValidatedPrincipal", () => {
  it("accepts only the expected validated claims and returns them unchanged", () => {
    expect(acceptBffValidatedPrincipal(claims)).toEqual(claims);
  });

  it.each([
    null,
    { ...claims, sub: "  " },
    { ...claims, sid: "not-a-uuid" },
    { ...claims, acr: "aal3" },
    { ...claims, extra: "untrusted" },
  ])("rejects an invalid or extended principal payload", (value) => {
    expect(() => acceptBffValidatedPrincipal(value)).toThrow();
  });
});
