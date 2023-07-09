import { defineConfig } from 'cypress'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })
dotenv.config()

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
	},
	env: {
		googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
		googleClientId: process.env.GOOGLE_ID,
		googleClientSecret: process.env.GOOGLE_SECRET,
	},
})
