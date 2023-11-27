/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/prefer-immutable-types */
import {
	DynamicContextProvider,
	type LocaleResource,
} from '@dynamic-labs/sdk-react-core'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import Button from './Button'
import type { AwesomeOnboardingEnvs, AwesomeOnboardingOptions } from '../..'
import { LocaleEn, LocaleJa } from '../../i18n/dynamic'
import { useEffect, useState } from 'react'
import type { UndefinedOr } from '@devprotocol/util-ts'

type Props = AwesomeOnboardingOptions & AwesomeOnboardingEnvs

const langs = ['en', 'ja']

export default ({ chainId, environmentId }: Props) => {
	const [locale, setLocale] = useState<UndefinedOr<LocaleResource>>()

	useEffect(() => {
		// eslint-disable-next-line functional/no-conditional-statements
		if (typeof window !== 'undefined') {
			const loc = window.navigator.languages.find((l) => langs.includes(l))
			setLocale(loc === 'ja' ? LocaleJa : LocaleEn)
		}
	})

	return locale !== undefined ? (
		<DynamicContextProvider
			settings={{
				environmentId,
				walletConnectPreferredChains: [`eip155:${chainId ?? 137}`],
				walletConnectors: [EthereumWalletConnectors],
			}}
			locale={locale}
		>
			<DynamicWagmiConnector>
				<Button />
			</DynamicWagmiConnector>
		</DynamicContextProvider>
	) : (
		<div className="hs-button is-filled w-48 min-h-[3rem] animate-pulse rounded-xl bg-gray-500/60" />
	)
}
