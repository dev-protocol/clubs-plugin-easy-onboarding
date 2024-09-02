/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/prefer-immutable-types */

import { useMemo } from 'react'
import { Strings } from '../../i18n/plugin'
import { i18nFactory } from '@devprotocol/clubs-core'

export default ({ chainId }: Readonly<{ chainId: number | string }>) => {
	const i18nBase = useMemo(() => i18nFactory(Strings), [Strings])

	const i18n = useMemo(
		() => i18nBase(window.navigator.languages),
		[typeof window !== 'undefined' && window.navigator.languages],
	)

	return (
		<span className="absolute top-[100%] -mt-1 flex w-full items-center justify-center gap-2 rounded-b-lg bg-dp-red-400 p-1 pt-2 text-center text-xs text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				className="h-4 w-4"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
				/>
			</svg>
			{i18n('SwitchChain', [String(chainId)])}
		</span>
	)
}
