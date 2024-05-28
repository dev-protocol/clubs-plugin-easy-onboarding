import { dirname, relative, resolve } from 'path'
import { dts } from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json' assert { type: 'json' }
import { cwd } from 'process'

const dir = 'dist'

const useSrc = ({ out, ext } = {}) => ({
	name: 'local:useSrc',
	resolveId(source, importer) {
		if (ext.some((e) => source.endsWith(e))) {
			const here = cwd()
			const from =
				typeof out === 'string'
					? out
					: dirname(typeof out === 'function' ? out(importer) : importer)
			const originalImporter = importer.replace(`${here}/dist`, here)
			const originalImporterDir = dirname(originalImporter)
			const original = resolve(originalImporterDir, source)
			const relativePath = relative(from, original)
			return {
				id: relativePath,
				external: true,
			}
		}
	},
})

const external = [
	...Object.keys(packageJson.dependencies),
	...Object.keys(packageJson.peerDependencies),
]

export default [
	{
		input: 'src/index.ts',
		external,
		output: [
			{
				dir,
				format: 'es',
			},
		],
		plugins: [
			useSrc({
				ext: [
					'.astro',
					'.svelte',
					'.vue',
					'.scss',
					'.css',
					'.jpg',
					'.png',
					'.svg',
				],
				out: (path) => path.replace('src', 'dist'),
			}),
			typescript(),
		],
	},
	{
		input: 'dist/src/index.d.ts',
		output: [
			{
				file: 'dist/index.d.ts',
				format: 'es',
			},
		],
		plugins: [
			useSrc({
				ext: [
					'.astro',
					'.svelte',
					'.vue',
					'.scss',
					'.css',
					'.jpg',
					'.png',
					'.svg',
				],
				out: (path) => path.replace('dist/src', 'dist'),
			}),
			dts(),
		],
	},
]
