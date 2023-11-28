import type { LocaleResource } from '@dynamic-labs/sdk-react-core'

const ResourceJapanese = {
	dyn_login: {
		title: {
			all: 'ログイン',
			all_wallet_list: 'あなたのウォレット',
			wallet_only: 'あなたのウォレット',
		},
	},
	dyn_widget: {
		connect: 'ウォレットに接続',
	},
} satisfies LocaleResource['ja']

export const Japanese = {
	/**
	 * Dynamic says...
	 * > We just support “en” for now, so that will be the only valid key for the LocaleResource object.
	 * > https://docs.dynamic.xyz/guides/customizing-copy
	 * So, it needs to assign Japanese translation as English.
	 */
	en: ResourceJapanese,
} satisfies LocaleResource
