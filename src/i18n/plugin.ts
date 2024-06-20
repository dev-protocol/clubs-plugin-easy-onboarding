import type { ClubsI18nParts } from '@devprotocol/clubs-core'

export const Strings = {
	SignIn: {
		en: 'Sign in',
		ja: 'サインイン',
	},
	PleaseConnectWallet: {
		en: 'Connect your wallet',
		ja: 'ウォレットにも接続してください',
	},
	SwitchChain: {
		en: ([chain]) => `Switch to
    ${
			chain === '137'
				? 'Polygon'
				: chain === '1'
					? 'Ethereum'
					: `Chain#${chain}`
		}`,
		ja: ([chain]) => `
    ${
			chain === '137'
				? 'Polygon'
				: chain === '1'
					? 'Ethereum'
					: `Chain#${chain}`
		} に切り替えください`,
	},
} satisfies ClubsI18nParts
