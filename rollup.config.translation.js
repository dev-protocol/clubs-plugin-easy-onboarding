import { dts } from 'rollup-plugin-dts'

const input =
	'node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/en/translation.js'
const dir = 'src/i18n/en'

export default [
	{
		input,
		output: [
			{
				dir,
				format: 'es',
			},
		],
	},
	{
		input: input.replace('.js', '.d.ts'),
		output: [
			{
				file: `${dir}/translation.d.ts`,
				format: 'es',
			},
		],
		plugins: [dts()],
	},
]
