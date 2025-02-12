/* eslint-disable functional/no-conditional-statements */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */

import type { Signer } from 'ethers'
import { useEffect, useMemo, useState } from 'react'
import { whenDefined, whenDefinedAll } from '@devprotocol/util-ts'
import { i18nFactory, Signal } from '@devprotocol/clubs-core'
import { connection } from '@devprotocol/clubs-core/connection'
import {
	DynamicUserProfile,
	useDynamicContext,
	useWalletItemActions,
} from '@dynamic-labs/sdk-react-core'
import NetworkError from './NetworkError'
import { equals } from 'ramda'

import { Strings } from '../../i18n/plugin'
import Clubs from '../Icon/Clubs'
import { scan } from 'rxjs'

const CALLED = '_CALLED_SIGNAL_SUBSCRIBE_'

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
			(c) => c.format === 'blockchain' && Boolean(c.embeddedWalletId),
		)

		if (cryptoWallet) {
			/**
			 * If a user initially logged in using their wallet and later connected a social account,
			 * Dynamic will not function as a wallet for subsequent logins using the social account as the first step.
			 * Therefore, in that case, users need to connect their wallet after the social account.
			 */
			setIsWalletNeeded(Boolean(!dynamic.primaryWallet))
			setWalletName(cryptoWallet.walletName)
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		dynamic.primaryWallet?.connector.ethers?.getSigner().then((_signer) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			const same = equals(_signer, signer)
			// console.log('Called here', same)
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			!same && setSigner(_signer)
		}) ?? setSigner(undefined)
	}, [dynamic.primaryWallet, dynamic.user])

	useEffect(() => {
		if (dynamic.network === undefined) return
		const connectedChain = Number(dynamic.network)
		setUnexpectedNetwork(
			typeof chainId === 'number' && connectedChain !== chainId,
		)
		whenDefinedAll([connection()], ([_connection]) =>
			_connection.chain.next(Number(dynamic.network)),
		)
	}, [dynamic.network])

	useEffect(() => {
		const emailCredential = dynamic.user?.verifiedCredentials?.find(
			(c) => c.format === 'email',
		)
		console.log('**', { emailCredential })
		whenDefinedAll([connection()], ([_connection]) =>
			_connection.identifiers.next(
				whenDefined(emailCredential?.publicIdentifier, (email) => ({
					email,
				})),
			),
		)
	}, [dynamic.user])

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
		whenDefinedAll([connection()], ([_connection]) => {
			// console.log('Called here', signer)
			_connection.signer.next(signer)
		})
	}, [signer])

	useEffect(() => {
		whenDefinedAll([connection()], ([_connection]) => {
			// console.log('$$$ Called here', signer)

			// signal
			const sub = _connection.signal
				.pipe(scan((total, n) => (n === CALLED ? total + 1 : total), 0))
				.subscribe((calledCount) => {
					// Subscribe only once globally
					if (calledCount === 0) {
						_connection.signal.next(CALLED)
						_connection.signal.subscribe((signal) => {
							if (signal === Signal.SignInRequest) {
								dynamic.setShowAuthFlow(true)
							}
							if (signal === Signal.SignOutRequest) {
								dynamic.handleLogOut()
							}
						})
						sub.unsubscribe()
					}
				})
		})
	}, [])

	return (
		<span className="group/awesome-onboarding relative block">
			{loggedIn && isUnexpectedNetwork && (
				<NetworkError chainId={chainId ?? 137} />
			)}
			{dynamic?.primaryWallet?.address && (
				<span className="absolute bottom-0 left-1/2 block w-full -translate-x-1/2 opacity-0 transition-all delay-300 group-hover/awesome-onboarding:-bottom-1/2 group-hover/awesome-onboarding:opacity-100">
					<a
						className="hs-button is-small is-fullwidth is-filled flex gap-2 pt-4 text-xs"
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
					<span className="flex items-center gap-2">
						<img
							src={profile.avatar}
							className="h-6 w-6 rounded-full object-cover"
						/>
						<span className="font-bold text-inherit">{profile.username}</span>
					</span>
				) : loggedIn && isWalletNeeded ? (
					i18n('PleaseConnectWallet')
				) : loggedIn ? (
					<span
						title="Loading the profile..."
						className="h-6 w-full min-w-24 animate-pulse rounded-xl bg-gray-500/60"
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
