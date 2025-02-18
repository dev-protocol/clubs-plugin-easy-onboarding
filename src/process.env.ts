// @dynamic-labs/iconic, a package what @dynamic-labs/sdk-react-core is required, is requiring `process` on the frontend.
// eslint-disable-next-line functional/no-conditional-statements
if (typeof window !== 'undefined' && typeof window.process === 'undefined') {
	// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data, @typescript-eslint/no-explicit-any
	;(window as any).process = { env: {} }
}
