import { describe, it, expect } from 'vitest'
import { meta } from './'
import { ClubsPluginCategory } from '@devprotocol/clubs-core'
import Readme from './readme.astro'

describe('meta', () => {
	it('should return the predefined values', () => {
		expect(meta).toEqual({
			id: 'devprotocol:clubs:plugin:awesome-onboarding',
			displayName: 'Awesome Onboarding',
			category: ClubsPluginCategory.Uncategorized,
			readme: Readme,
		})
	})
})
