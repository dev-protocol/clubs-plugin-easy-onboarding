/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */
import {
	DynamicWidget,
	useDynamicContext,
	useEffectOnce,
} from '@dynamic-labs/sdk-react-core'
import { useEffect, useState } from 'react'
import { useWalletClient } from 'wagmi'
import type { connection as Connection } from '@devprotocol/clubs-core/connection'
import type { EIP1193Provider } from 'viem'
import { BrowserProvider } from 'ethers'
import { whenDefinedAll } from '@devprotocol/util-ts'

export default ({ chainId }: { chainId: number }) => {
	const { primaryWallet } = useDynamicContext()
	const [connection, setConnection] = useState<ReturnType<typeof Connection>>()
	const [provider, setProvider] = useState<EIP1193Provider>()
	const { data: walletClient } = useWalletClient({ chainId })

	console.log({ walletClient, primaryWallet })

	useEffect(() => {
		setProvider(walletClient?.transport as unknown as EIP1193Provider)
	}, [walletClient])

	useEffectOnce(() => {
		import('@devprotocol/clubs-core/connection').then((C) => {
			setConnection(C.connection())
		})
	})

	useEffect(() => {
		console.log({ connection, provider })
		whenDefinedAll([connection, provider], ([_connection, _provider]) =>
			_connection.setEip1193Provider(_provider, BrowserProvider),
		)
	}, [provider, connection])

	return <DynamicWidget />
}
