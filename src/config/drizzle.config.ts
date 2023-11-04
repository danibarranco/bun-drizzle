import type { Config } from 'drizzle-kit';

export default {
    driver: 'pg',
    schema: './src/db/schema',
    schemaFilter: ["public", "auth"],
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || 'undefined',
    },
    out: './migrations',
} satisfies Config;
