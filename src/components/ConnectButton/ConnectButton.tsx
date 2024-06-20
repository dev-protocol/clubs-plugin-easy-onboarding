/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/prefer-immutable-types */

import { useEffect, useState } from 'react'
import type { UndefinedOr } from '@devprotocol/util-ts'
import { EthersExtension } from '@dynamic-labs/ethers-v6'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import type { LocaleResource } from '@dynamic-labs/sdk-react-core'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'

import Button from './Button'
import { Japanese } from '../../i18n/dynamic'
import type { ConnectButtonProps } from '../../types'

const langs = ['en', 'ja']

export default ({ chainId, environmentId, ...props }: ConnectButtonProps) => {
	const [locale, setLocale] = useState<UndefinedOr<LocaleResource | null>>(null)

	useEffect(() => {
		// eslint-disable-next-line functional/no-conditional-statements
		if (typeof window !== 'undefined') {
			const loc = window.navigator.languages.find((l) => langs.includes(l))
			setLocale(loc === 'ja' ? Japanese : undefined)
		}
	})

	return locale !== null ? (
		<DynamicContextProvider
			settings={{
				environmentId,
				walletConnectPreferredChains: [`eip155:${chainId ?? 137}`],
				walletConnectorExtensions: [EthersExtension],
				walletConnectors: [EthereumWalletConnectors],
			}}
			locale={locale}
		>
			<Button chainId={chainId} {...props} />
		</DynamicContextProvider>
	) : (
		<div className="min-w-32 min-h-10 rounded-xl animate-pulse bg-black/10" />
	)
}
