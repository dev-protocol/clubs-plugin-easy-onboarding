import type { LocaleResource } from '@dynamic-labs/sdk-react-core'
import en from './en'
import ja from './ja'

export const English = {
	en: en,
} satisfies LocaleResource

export const Japanese = {
	/**
	 * Dynamic says...
	 * > We just support “en” for now, so that will be the only valid key for the LocaleResource object.
	 * > https://docs.dynamic.xyz/guides/customizing-copy
	 * So, it needs to assign Japanese translation as English.
	 */
	en: ja,
} satisfies LocaleResource
