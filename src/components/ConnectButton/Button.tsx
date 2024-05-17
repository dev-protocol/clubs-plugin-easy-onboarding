/* eslint-disable functional/no-conditional-statements */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */

import type { Signer } from 'ethers'
import { useEffect, useMemo, useState } from 'react'
import { whenDefinedAll } from '@devprotocol/util-ts'
import { i18nFactory } from '@devprotocol/clubs-core'
import type { connection as Connection } from '@devprotocol/clubs-core/connection'
import {
	DynamicWidget,
	useDynamicContext,
	useWalletItemActions,
} from '@dynamic-labs/sdk-react-core'
import NetworkError from './NetworkError'

import { Strings } from '../../i18n/plugin'

export default ({ chainId }: { chainId: number }) => {
	const dynamic = useDynamicContext()
	const [connection, setConnection] = useState<ReturnType<typeof Connection>>()
	const [signer, setSigner] = useState<Signer>()
	const [walletName, setWalletName] = useState<string>()
	const [isWalletNeeded, setIsWalletNeeded] = useState<boolean>(false)
	const [isUnexpectedNetwork, setUnexpectedNetwork] = useState<boolean>(false)

	const { openWallet } = useWalletItemActions()

	const i18nBase = useMemo(() => i18nFactory(Strings), [Strings])

	const i18n = useMemo(
		() => i18nBase(window.navigator.languages),
		[typeof window !== 'undefined' && window.navigator.languages],
	)

	console.log({ dynamic })

	const loggedIn = useMemo(() => dynamic?.user !== undefined, [dynamic?.user])

	useEffect(() => {
		const cryptoWallet = dynamic.user?.verifiedCredentials.find(
			(c) => c.format === 'blockchain',
		)

		// eslint-disable-next-line functional/no-conditional-statements
		if (cryptoWallet) {
			/**
			 * If a user initially logged in using their wallet and later connected a social account,
			 * Dynamic will not function as a wallet for subsequent logins using the social account as the first step.
			 * Therefore, in that case, users need to connect their wallet after the social account.
			 */
			setIsWalletNeeded(Boolean(!dynamic.primaryWallet))
			setWalletName(cryptoWallet.walletName)
		}

		dynamic.primaryWallet?.connector.ethers?.getSigner().then((_signer) => {
			setSigner(_signer)
		})
	}, [dynamic.primaryWallet, dynamic.user])

	useEffect(() => {
		if (dynamic.network === undefined) return
		const connectedChain = Number(dynamic.network)
		setUnexpectedNetwork(connectedChain !== chainId)
	}, [dynamic.network])

	useEffect(() => {
		import('@devprotocol/clubs-core/connection').then((C) => {
			setConnection(C.connection())
		})
	}, [])

	useEffect(() => {
		whenDefinedAll([connection, signer], ([_connection, _signer]) =>
			_connection.signer.next(_signer),
		)
	}, [signer, connection])

	return (
		<div className="relative grid grid-flow-col items-center gap-1">
			{loggedIn && isUnexpectedNetwork && <NetworkError chainId={chainId} />}
			<DynamicWidget />
			{loggedIn && isWalletNeeded && walletName && (
				<button
					onClick={() => openWallet(walletName)}
					className="hs-button is-small is-filled"
				>
					{i18n('PleaseConnectWallet')}
				</button>
			)}
		</div>
	)
}
