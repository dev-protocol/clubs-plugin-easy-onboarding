/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/prefer-immutable-types */

import ConnectButton from './ConnectButton'
import type { ConnectButtonProps } from '../../types'

const BrowserConnectButton = (props: ConnectButtonProps) => {
	return <ConnectButton {...props} />
}

export default BrowserConnectButton
