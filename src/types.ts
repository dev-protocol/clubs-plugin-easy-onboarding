export type AwesomeOnboardingOptions = Readonly<{
	label?: string
	class?: string
	overrideClass?: string
	rpcUrl?: string
	chainId?: number
	isDisabled?: boolean
	redirectOnSignin?: boolean
}>

export type AwesomeOnboardingEnvs = Readonly<{
	environmentId: string
}>
