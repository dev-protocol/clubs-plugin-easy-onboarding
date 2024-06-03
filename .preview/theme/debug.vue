<script setup lang="ts">
import type { UndefinedOr } from '@devprotocol/util-ts'
import type { Signer } from 'ethers'
import { onMounted, ref } from 'vue'

const account = ref<string>()
const chain = ref<number>()
const signature = ref<string>()
const email = ref<string>()

let signer: UndefinedOr<Signer>

const signMessage = async () => {
	const sig = await signer?.signMessage(`Debug: now = ${new Date().getTime()}`)
	signature.value = sig
}

onMounted(async () => {
	const { connection } = await import('@devprotocol/clubs-core/connection')
	console.log({ connection })
	connection().account.subscribe((_account) => {
		console.log({ _account })
		account.value = _account
	})
	connection().chain.subscribe((_chain) => {
		console.log({ _chain })
		chain.value = _chain
	})
	connection().signer.subscribe((_signer) => {
		console.log({ _signer })
		signer = _signer
	})
	connection().identifiers.subscribe((_ids) => {
		console.log({ _ids })
		email.value = _ids?.email
	})
})
</script>

<template>
	<div class="grid gap-3">
		<h2 class="font-bold">Account</h2>
		<p>{{ account ?? '(none)' }}</p>
		<h2 class="font-bold">Email</h2>
		<p>{{ email ?? '(none)' }}</p>
		<h2 class="font-bold">Chain</h2>
		<p>{{ chain ?? '(none)' }}</p>
		<h2 class="font-bold">Signing</h2>
		<p>
			<button @click="signMessage" class="hs-button is-filled">Sign</button>
		</p>
		<h2 class="font-bold">Signature</h2>
		<p>{{ signature ?? '(none)' }}</p>
	</div>
</template>
