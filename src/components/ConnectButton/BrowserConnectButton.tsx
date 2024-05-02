/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/prefer-immutable-types */

import { IsBrowser } from '@dynamic-labs/sdk-react-core'

import ConnectButton from './ConnectButton'
import type { ConnectButtonProps } from '../../types'

const BrowserConnectButton = (props: ConnectButtonProps) => {
	return (
		<IsBrowser>
			<ConnectButton {...props} />
		</IsBrowser>
	)
}

export default BrowserConnectButton
