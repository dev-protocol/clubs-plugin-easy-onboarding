/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/functional-parameters */
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'

export default () => {
	const { primaryWallet } = useDynamicContext()
	// eslint-disable-next-line functional/no-expression-statements
	console.log({ primaryWallet })

	return <DynamicWidget />
}
