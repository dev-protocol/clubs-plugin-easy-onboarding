import type { LocaleResource } from '@dynamic-labs/sdk-react-core'

// The English translation is here: node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/en/translation.js.

const ResourceJapanese = {
	dyn_login: {
		title: {
			all: 'ログイン',
			all_wallet_list: 'あなたのウォレット',
			wallet_only: 'あなたのウォレット',
		},
		separators: {
			default: 'または',
		},
		email_form: {
			email_field: { label: 'メールアドレス' },
			submit_button: { label: '次へ' },
		},
	},
	dyn_widget: {
		connect: 'ログイン',
	},
	dyn_wallet_list: {
		view_all: 'すべてのウォレットを見る',
	},
	dyn_otp_verification: {
		banner_text:
			'メールベースのウォレットにアクセスするにはサインインしてください',
		code_sent: '以下のアドレスに認証コードを送信しました',
		confirm_code: '認証コードを確認してください',
		hang_tight: '準備が整うまでしばらくお待ちください',
		verification_succeeded: '認証コードが確認されました',
		title: '認証コードを確認してください',
	},
	dyn_email_verification: {
		code_not_received: 'コードがまだ届いていない場合は',
		code_sent: 'コードが送信されました',
		complete: '検証が完了しました。このアカウントのメールが検証されました。',
		description: '以下のアドレスに認証コードを送信しました',
		edit_email: 'メールを編集',
		log_out_button: 'ログアウト',
		resend_code: 'ここをクリックして再送信してください',
		resend_code_in: '{{remainingSeconds}} 秒以内にコードを再送信',
		title: 'メールアドレスを確認してください',
	},
	dyn_sign_message: {
		cancel_button: 'キャンセル',
		sign_button: '署名',
		title: '署名をしてください',
	},
	dyn_passkey_recovery: {
		code: {
			description: '確認コードが {{email}} に送信されました',
			input_label: 'ここにコードを入力',
			title: '認証コードを送信しました',
			resend: {
				button: 'ここをクリックして再送信してください',
				text: 'コードがまだ届いていない場合は',
			},
		},
		complete: {
			complete_button: 'パスキーを作成する',
			description: '新しいパスキーを追加してウォレットを保護します。',
			title: '新しいパスキーを作成する',
		},
		start: {
			description:
				'このプロセスを完了するには、同じデバイス/ブラウザを使用していることを確認してください。',
			start_button: 'メールを送信',
			title: 'リクエストの開始',
		},
	},
	dyn_passkey_secure_modal: {
		code: {
			action_based_description: 'に {{action}} アカウントを確認。',
			description: '以下のアドレスにセキュアコードが送信されました {{email}}.',
			input_label: 'ここにコードを入力',
			title: '認証コードを送信しました',
			resend: {
				button: 'ここをクリックして再送信してください',
				text: 'コードがまだ届いていない場合は',
			},
			complete_transaction_action: '取引を完了する',
			sign_message_action: 'このメッセージに署名する',
		},
		complete: {
			complete_button: 'パスキーを作成する',
			description:
				'パスキーは生体認証を使用してデバイスにネイティブに保存され、あなただけがアクセスできます。',
			title: 'アカウントを保護する',
		},
		start: {
			description:
				'登録されているメールアドレスにワンタイム セキュリティ コードが送信されます。このコードは 15 分で有効期限が切れます。',
			start_button: 'メールを送信',
			title: 'メールコードを送信',
		},
	},
} satisfies LocaleResource['ja']


export const Japanese = {
	/**
	 * Dynamic says...
	 * > We just support “en” for now, so that will be the only valid key for the LocaleResource object.
	 * > https://docs.dynamic.xyz/guides/customizing-copy
	 * So, it needs to assign Japanese translation as English.
	 */
	en: ResourceJapanese,
} satisfies LocaleResource
