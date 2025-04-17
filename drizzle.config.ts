import { defineConfig } from "drizzle-kit";
// via connection params
export default defineConfig({
  schema: "./server/src/core/drizzle/schema.ts",
  out: "./server/src/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: false,
  },
  verbose: true,
  strict: true,
});
