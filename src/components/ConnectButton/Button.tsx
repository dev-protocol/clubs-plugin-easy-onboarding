/* eslint-disable functional/no-conditional-statements */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */

import type { Signer } from 'ethers'
import { useEffect, useMemo, useState } from 'react'
import { whenDefined, whenDefinedAll } from '@devprotocol/util-ts'
import { i18nFactory } from '@devprotocol/clubs-core'
import type { connection as Connection } from '@devprotocol/clubs-core/connection'
import {
	DynamicUserProfile,
	useDynamicContext,
	useWalletItemActions,
} from '@dynamic-labs/sdk-react-core'
import NetworkError from './NetworkError'
import { equals } from 'ramda'

import { Strings } from '../../i18n/plugin'
import Clubs from '../Icon/Clubs'

export default ({
	chainId,
	overrideClass,
	buttonClassName,
}: {
	chainId?: number
	overrideClass?: string
	buttonClassName?: string
}) => {
	const dynamic = useDynamicContext()
	const [connection, setConnection] = useState<ReturnType<typeof Connection>>()
	const [signer, setSigner] = useState<Signer>()
	const [walletName, setWalletName] = useState<string>()
	const [isWalletNeeded, setIsWalletNeeded] = useState<boolean>(false)
	const [isUnexpectedNetwork, setUnexpectedNetwork] = useState<boolean>(false)
	const [profile, setProfile] = useState<{ username: string; avatar: string }>()

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
			const same = equals(_signer, signer)
			// console.log('Called here', same)
			!same && setSigner(_signer)
		}) ?? setSigner(undefined)
	}, [dynamic.primaryWallet, dynamic.user])

	useEffect(() => {
		if (dynamic.network === undefined) return
		const connectedChain = Number(dynamic.network)
		setUnexpectedNetwork(
			typeof chainId === 'number' && connectedChain !== chainId,
		)
		whenDefinedAll([connection], ([_connection]) =>
			_connection.chain.next(Number(dynamic.network)),
		)
	}, [dynamic.network])

	useEffect(() => {
		const emailCredential = dynamic.user?.verifiedCredentials?.find(
			(c) => c.format === 'email',
		)
		console.log('**', { emailCredential })
		whenDefinedAll([connection], ([_connection]) =>
			_connection.identifiers.next(
				whenDefined(emailCredential?.publicIdentifier, (email) => ({
					email,
				})),
			),
		)
	}, [dynamic.user])

	useEffect(() => {
		import('@devprotocol/clubs-core/connection').then((C) => {
			setConnection(C.connection())
		})
	}, [])

	useEffect(() => {
		const eoa = dynamic?.primaryWallet?.address
		if (eoa) {
			fetch(`https://clubs.place/api/profile/${eoa}`)
				.then((res) => res.json())
				.then(setProfile)
		} else {
			setProfile(undefined)
		}
	}, [dynamic?.primaryWallet?.address])

	useEffect(() => {
		whenDefinedAll([connection], ([_connection]) => {
			// console.log('Called here', signer)
			_connection.signer.next(signer)
		})
	}, [signer, connection])

	return (
		<span className="group/awesome-onboarding relative block">
			{loggedIn && isUnexpectedNetwork && (
				<NetworkError chainId={chainId ?? 137} />
			)}
			{dynamic?.primaryWallet?.address && (
				<span className="block w-full transition-all delay-300 opacity-0 group-hover/awesome-onboarding:opacity-100 group-hover/awesome-onboarding:-bottom-1/2 absolute left-1/2 bottom-0 -translate-x-1/2">
					<a
						className="hs-button is-small text-xs is-fullwidth pt-4 is-filled flex gap-2"
						href={`https://clubs.place/passport/${dynamic.primaryWallet.address}`}
						target="_blank"
						rel="noreferrer noopener"
					>
						<Clubs size={4} />
						Passport
					</a>
				</span>
			)}

			<button
				className={`${
					overrideClass
						? overrideClass
						: 'hs-button is-filled is-large is-fullwidth relative data-[is-loading=true]:animate-pulse'
				} ${loggedIn && isUnexpectedNetwork ? 'is-error' : ''} ${buttonClassName}`}
				onClick={() =>
					loggedIn
						? isWalletNeeded && walletName
							? openWallet(walletName)
							: dynamic.setShowDynamicUserProfile(true)
						: dynamic.setShowAuthFlow(true)
				}
			>
				{loggedIn && profile ? (
					<span className="flex gap-2 items-center">
						<img
							src={profile.avatar}
							className="rounded-full w-6 h-6 object-cover"
						/>
						<span className="font-bold text-inherit">{profile.username}</span>
					</span>
				) : loggedIn && isWalletNeeded ? (
					i18n('PleaseConnectWallet')
				) : loggedIn ? (
					<span
						title="Loading the profile..."
						className="w-full min-w-24 h-6 rounded-xl animate-pulse bg-gray-500/60"
					></span>
				) : (
					i18n('SignIn')
				)}
			</button>
			<DynamicUserProfile />
		</span>
	)

	/* Using <DynamicWidget /> */
	// return (
	// 	<div className="relative grid grid-flow-col items-center gap-1">
	// 		{loggedIn && isUnexpectedNetwork && <NetworkError chainId={chainId} />}
	// 		<DynamicWidget
	// 			buttonClassName={buttonClassName}
	// 			buttonContainerClassName={buttonContainerClassName}
	// 		/>
	// 		{loggedIn && isWalletNeeded && walletName && (
	// 			<button
	// 				onClick={() => openWallet(walletName)}
	// 				className="hs-button is-small is-filled"
	// 			>
	// 				{i18n('PleaseConnectWallet')}
	// 			</button>
	// 		)}
	// 	</div>
	// )
}
