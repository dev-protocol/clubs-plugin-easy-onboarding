import { defineConfig } from 'astro/config'
import clubs from '@devprotocol/clubs-core'
import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { config } from 'dotenv'

config({ path: './.env' })

export default defineConfig({
	integrations: [clubs(), vue(), react(), tailwind()],
})
