import { z } from "zod";

import type { ValidatedPrincipal } from "@/lib/auth/tenant-context";

const principalSchema = z
  .object({
    sub: z.string().trim().min(1),
    sid: z.guid(),
    acr: z.enum(["aal1", "aal2"]),
    amr: z.array(z.string().min(1)),
  })
  .strict();

declare const validatedPrincipalBrand: unique symbol;

/** Principal payload accepted only after parsing at a trusted BFF boundary. */
export type BffValidatedPrincipal = ValidatedPrincipal & {
  readonly [validatedPrincipalBrand]: true;
};

/** Validate the typed claims object returned by the trusted BFF integration. */
export function acceptBffValidatedPrincipal(value: unknown): BffValidatedPrincipal {
  return principalSchema.parse(value) as BffValidatedPrincipal;
}
