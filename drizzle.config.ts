import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "src/utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:D3sJcivOt5PS@ep-wandering-lake-a1mmnj2l.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
  verbose: true,
  strict: true,
})

