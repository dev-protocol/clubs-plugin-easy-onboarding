/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import react from '@astrojs/react'

export default getViteConfig({
	plugins: [react()],
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	test: {
		environment: 'jsdom',
	},
})
