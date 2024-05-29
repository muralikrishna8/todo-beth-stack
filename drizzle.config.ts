import type { Config } from "drizzle-kit";

export default {
    schema: './todo/db/schema.ts',
    driver: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN
    },
    dialect: 'sqlite',
    verbose: true,
    strict: true
} satisfies Config;