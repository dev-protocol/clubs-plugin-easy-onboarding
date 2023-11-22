/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/functional-parameters */
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'

export default () => {
	const { primaryWallet, setShowAuthFlow } = useDynamicContext()
	// eslint-disable-next-line functional/no-expression-statements
	console.log({ primaryWallet })

	return (
		<button onClick={() => setShowAuthFlow(true)}>Connect your wallet</button>
	)
}
