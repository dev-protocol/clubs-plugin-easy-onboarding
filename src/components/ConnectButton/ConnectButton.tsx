/* eslint-disable functional/prefer-immutable-types */
import {
	DynamicContextProvider,
	DynamicWidget,
} from '@dynamic-labs/sdk-react-core'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import Button from './Button'
import type { AwesomeOnboardingEnvs, AwesomeOnboardingOptions } from '../..'

type Props = AwesomeOnboardingOptions & AwesomeOnboardingEnvs

export default ({ chainId, environmentId }: Props) => {
	return (
		<DynamicContextProvider
			settings={{
				environmentId,
				walletConnectPreferredChains: [`eip155:${chainId ?? 137}`],
				walletConnectors: [EthereumWalletConnectors],
			}}
		>
			<DynamicWagmiConnector>
				<DynamicWidget />
				<Button />
			</DynamicWagmiConnector>
		</DynamicContextProvider>
	)
}
