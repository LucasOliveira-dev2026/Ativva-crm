import { defineConfig } from "prisma/config";

// Prisma 7: the connection URL is not part of the schema. The runtime builds
// its client with the pg driver adapter (lib/db); the CLI only generates.
export default defineConfig({
  schema: "prisma/schema.prisma",
});
