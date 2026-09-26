import { z } from "zod";

import { db, type TenantContext } from "@/lib/db";
import {
  tenantContextFromValidatedPrincipal,
  type ValidatedPrincipal,
} from "@/lib/auth/tenant-context";

const identityRecordSchema = z.object({
  id: z.guid(),
  external_identity_id: z.string().min(1),
  disabled_at: z.date().nullable(),
});

/** Resolve an already BFF-validated principal to its internal Fortis identity. */
export async function resolveTenantContext(
  principal: ValidatedPrincipal,
  activeCompanyId: string | null,
): Promise<TenantContext> {
  return db().runPlatformTransaction("auth", async (tx) => {
    const identity = await tx.users.findUnique({
      where: { external_identity_id: principal.sub },
      select: { id: true, external_identity_id: true, disabled_at: true },
    });
    const parsed = identityRecordSchema.safeParse(identity);
    if (!parsed.success) {
      throw new Error("validated principal has no enabled internal identity");
    }
    return tenantContextFromValidatedPrincipal({
      principal,
      identity: {
        id: parsed.data.id,
        externalIdentityId: parsed.data.external_identity_id,
        disabled: parsed.data.disabled_at !== null,
      },
      activeCompanyId,
    });
  });
}
