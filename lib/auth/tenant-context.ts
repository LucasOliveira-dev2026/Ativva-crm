import { z } from "zod";

import type { TenantContext } from "@/lib/db";

const uuid = z.guid();
const validatedPrincipalSchema = z
  .object({
    sub: uuid,
    sid: uuid,
    acr: z.enum(["aal1", "aal2"]),
    amr: z.array(z.string().min(1)),
  })
  .strict();

const identitySchema = z
  .object({
    id: uuid,
    disabled: z.boolean(),
  })
  .strict();

const tenantResolutionSchema = z
  .object({
    principal: validatedPrincipalSchema,
    identity: identitySchema.nullable(),
    activeCompanyId: uuid.nullable(),
  })
  .strict();

export type ValidatedPrincipal = z.infer<typeof validatedPrincipalSchema>;
export type ResolvedPrincipalIdentity = z.infer<typeof identitySchema>;

/**
 * Builds the database's tenant scope from values already validated/resolved by
 * the authentication boundary. This function does not parse credentials or
 * make authorization decisions.
 */
export function tenantContextFromValidatedPrincipal(input: {
  principal: ValidatedPrincipal;
  identity: ResolvedPrincipalIdentity | null;
  activeCompanyId: string | null;
}): TenantContext {
  const parsed = tenantResolutionSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error(`invalid validated principal context: ${parsed.error.message}`);
  }

  const { principal, identity, activeCompanyId } = parsed.data;
  if (!identity || identity.disabled) {
    throw new Error("validated principal has no enabled internal identity");
  }

  return {
    userId: identity.id,
    companyId: activeCompanyId,
    aal: principal.acr,
    sessionId: principal.sid,
  };
}
