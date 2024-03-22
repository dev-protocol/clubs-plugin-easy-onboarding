import type { LocaleResource } from '@dynamic-labs/sdk-react-core'

// the English translation is here: node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/en/translation.js

const ResourceJapanese = {
	dyn_login: {
		title: {
			all: 'ログイン',
			all_wallet_list: 'あなたのウォレット',
			wallet_only: 'あなたのウォレット',
		},
		separators: {
			default: 'または',
		},
		email_form: {
			email_field: { label: 'メールアドレス' },
			submit_button: { label: '次へ' },
		},
	},
	dyn_widget: {
		connect: 'ログイン',
	},
	dyn_wallet_list: {
		view_all: 'すべてのウォレットを見る',
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
