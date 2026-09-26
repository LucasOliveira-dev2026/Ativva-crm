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

const sessionRecordSchema = z.object({
  id: z.guid(),
  user_id: z.guid(),
  not_after: z.date().nullable(),
});

/** Resolve an already BFF-validated principal to its active Fortis identity. */
export async function resolveTenantContext(
  principal: ValidatedPrincipal,
  activeCompanyId: string | null,
): Promise<TenantContext> {
  return db().runPlatformTransaction("auth", async (tx) => {
    const identity = await tx.users.findUnique({
      where: { external_identity_id: principal.sub },
      select: { id: true, external_identity_id: true, disabled_at: true },
    });
    const parsedIdentity = identityRecordSchema.safeParse(identity);
    if (!parsedIdentity.success || parsedIdentity.data.disabled_at !== null) {
      throw new Error("validated principal has no enabled internal identity");
    }

    const session = await tx.sessions.findUnique({
      where: { id: principal.sid },
      select: { id: true, user_id: true, not_after: true },
    });
    const parsedSession = sessionRecordSchema.safeParse(session);
    if (
      !parsedSession.success ||
      parsedSession.data.user_id !== parsedIdentity.data.id ||
      (parsedSession.data.not_after !== null && parsedSession.data.not_after <= new Date())
    ) {
      throw new Error("validated principal has no active Fortis session");
    }

    return tenantContextFromValidatedPrincipal({
      principal,
      identity: {
        id: parsedIdentity.data.id,
        externalIdentityId: parsedIdentity.data.external_identity_id,
        disabled: false,
      },
      activeCompanyId,
    });
  });
}
