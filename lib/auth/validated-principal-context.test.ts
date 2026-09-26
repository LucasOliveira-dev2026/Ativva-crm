import { afterEach, describe, expect, it } from "vitest";

import {
  acceptBffValidatedPrincipal,
  withBffValidatedPrincipal,
  getBffValidatedPrincipal,
} from "@/lib/auth/validated-principal";

const principal = acceptBffValidatedPrincipal({
  sub: "kc|opaque-subject",
  sid: "22222222-2222-4222-8222-222222222222",
  acr: "aal2",
  amr: ["pwd", "otp"],
});

afterEach(() => {
  expect(getBffValidatedPrincipal()).toBeUndefined();
});

describe("BFF validated principal request context", () => {
  it("is available only inside its async request scope", async () => {
    await withBffValidatedPrincipal(principal, async () => {
      expect(getBffValidatedPrincipal()).toBe(principal);
      await Promise.resolve();
      expect(getBffValidatedPrincipal()).toBe(principal);
    });
    expect(getBffValidatedPrincipal()).toBeUndefined();
  });

  it("keeps concurrent request principals isolated", async () => {
    const other = acceptBffValidatedPrincipal({
      ...principal,
      sub: "kc|another-subject",
    });
    const seen = await Promise.all([
      withBffValidatedPrincipal(principal, async () => {
        await new Promise((resolve) => setTimeout(resolve, 5));
        return getBffValidatedPrincipal()?.sub;
      }),
      withBffValidatedPrincipal(other, async () => getBffValidatedPrincipal()?.sub),
    ]);
    expect(seen).toEqual([principal.sub, other.sub]);
  });
});
