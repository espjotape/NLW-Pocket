import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // DIGITE AQUI A URL DO SITE SEU ABENÇOADO!
    url: env.DATABASE_URL,
  },
})
