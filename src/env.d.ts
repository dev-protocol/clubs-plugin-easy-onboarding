/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_INFURA_KEY: string
	readonly PUBLIC_DYNAMIC_ENVIRONMENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
declare module '*.astro' {
	import type { AstroComponentFactory } from 'astro/dist/runtime/server'
	export default InstanceType<AstroComponentFactory>
}
