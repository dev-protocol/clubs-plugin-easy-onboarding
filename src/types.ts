export type AwesomeOnboardingOptions = Readonly<{
	chainId?: number
}>

export type AwesomeOnboardingEnvs = Readonly<{
	environmentId: string
}>

export type ConnectButtonProps = AwesomeOnboardingOptions &
	AwesomeOnboardingEnvs
