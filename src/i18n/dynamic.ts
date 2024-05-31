import type { LocaleResource } from '@dynamic-labs/sdk-react-core'

// The English translation is here: node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/en/translation.js.

const ResourceJapanese = {
	dyn_account_exists: {
		connect: 'Connect with {{socialOauth}}',
		description_email: 'It looks like an account already exists using',
		description_social:
			'To restore your account to the right place, we need you to log in again.',
		title: 'Re-Authentication Required',
		trail_message_email: '. Please log in with your email.',
		trail_message_social: 'through {{socialOauth}}',
	},
	dyn_active_wallet_info: {
		testnet_warning:
			'A testnet network has been selected. Please only use testnet funds or they will be lost.',
		ordinals_address: 'Ordinals address',
		payment_address: 'Payment address',
	},
	dyn_bridge: {
		summary_view: {
			connection_succeed:
				'Congratulations on connecting both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets',
			title: 'Welcome to {{appName}}',
		},
		welcome_view: {
			button: 'Get started',
			description:
				'You’ll need to connect both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets to get started',
			title: 'Connect to {{appName}}',
		},
		widget: {
			address: 'Copy wallet address',
			connect: 'Connect wallet',
			connect_with_network: 'Connect {{blockchainName}} wallet',
			copy: {
				address: 'Copy wallet address',
				ens: 'Copy ENS',
			},
			disconnect: 'Disconnect',
			edit_profile: 'Edit profile',
			wallet_network: '{{networkName}} wallet',
		},
	},
	dyn_captcha: {
		verify_user_subtitle:
			'We need to quickly verify you’re human before we proceed.',
		verify_user_title: "Let's verify you're human",
	},
	dyn_chainalysis_blocked_wallet: {
		title: 'Access denied',
	},
	dyn_collect_user_data: {
		description: 'We need a bit of information to get started',
		fields: {
			alias: {
				label: 'Alias',
			},
			country: {
				label: 'Country',
			},
			email: {
				label: 'Email',
				validation: 'Email is not valid',
			},
			first_name: {
				label: 'First Name',
			},
			job_title: {
				label: 'Job Title',
			},
			last_name: {
				label: 'Last Name',
			},
			phone_number: {
				label: 'Phone number',
				validation: 'Phone number is not valid',
				too_short: 'Phone number is too short',
			},
			policies_consent: {
				label: 'Policies Consent',
			},
			t_shirt_size: {
				label: 'T-Shirt Size',
			},
			team: {
				label: 'Team',
			},
			username: {
				label: 'Username',
				validation: 'Username is not valid',
			},
		},
		greeting: 'Welcome to {{appName}}',
		log_out_button: 'Log out',
		not_supported_network: {
			description:
				'Your wallet is not connected to a supported network. Please update before continuing.',
			error_message: 'This network is not available, please update.',
			title: 'Update Network',
		},
		update_email_tooltip:
			'This email is tied to your wallet so cannot be updated',
		update_phone_number_tooltip:
			'This phone number is tied to your wallet so cannot be updated',
		lock_editing_multiple_verified_fields:
			'You can only edit 1 field at a time that requires verification',
	},
	dyn_create_password: {
		continue: 'Continue',
		create_input: {
			label: 'Create passcode',
			placeholder: 'Create passcode',
		},
		confirm_input: {
			label: 'Confirm passcode',
			placeholder: 'Confirm passcode',
		},
		current_password_input: {
			label: 'Current passcode',
			placeholder: 'Current passcode',
		},
		description:
			"Choose a strong, unique passcode to ensure your account's security and privacy.",
		errors: {
			invalid_current_password: 'Invalid current passcode',
			error_changing_password: 'Error changing passcode',
			new_password_same_as_old:
				'New passcode cannot be the same as the old passcode',
			password_mismatch: 'Passcodes do not match',
			user_closed_view: 'User closed the view',
		},
		intro: {
			continue: 'Set up a passcode',
			description: {
				title: 'Add a passcode to protect your account',
				additional_protection: {
					title: 'Passcode Security',
					description:
						'Add a secure passcode to further prevent un-authrized access to your account.',
				},
				restore_access: {
					title: 'Restore Access',
					description:
						'You will be asked to enter it when signing on to a new device.',
				},
			},
			title: 'Add a Passcode',
		},
		logout: 'Log out',
		title: {
			create: 'Create passcode',
			update: 'Create new passcode',
		},
		update_input: {
			label: 'New passcode',
			placeholder: 'New passcode',
		},
	},
	dyn_creating_wallet: {
		loading_message: 'Your wallet is being created...',
	},
	dyn_email_confirmation: {
		description: 'We’ve sent a verification email to',
		note: 'Note: it might take a few seconds to proceed after clicking the link in your email',
		title: 'Confirm your email',
	},
	dyn_email_update: {
		current_email: 'Your current email address is',
		label: 'Email address',
		send_verification: 'Send Verification Code',
		title: 'Update email',
	},
	dyn_embedded_authenticator: {
		description:
			'Protect your account and simplify your transaction experience.',
		email: {
			badge: 'Fastest',
			description: ' You will need to renew after {{expiration}} minutes ',
			title: 'Use a one-time code',
		},
		passkey: {
			auth_info: {
				convinience: {
					title: 'Convenient and Fast',
					description:
						'Use Face ID or Touch ID to complete transactions quickly.',
				},
				security: {
					title: 'Increased Security',
					description:
						'Passkeys are encrypted end-to-end on your device or password manager to prevent phishing attempts.',
				},
				add_button: 'Add a passkey',
				start_button: 'Add a passkey',
			},
			no_email_auth_info: {
				convinience: {
					title: 'Simple and Fast',
					description:
						'Works across devices and syncs between devices and browsers.',
				},
				security: {
					title: 'Secured with a bio-metric',
					description: 'Phishing resistant and encrypted.',
				},
				add_button: 'Add passkey',
				start_button: 'Add passkey',
			},
			badge: 'Recommended',
			description:
				'Works across devices & secured with biometric to prevent phishing attempts ',
			title: 'Create new passkey',
			reveal_title: 'Add a passkey',
		},
		skip: 'Not now',
		title: 'Account security',
		need_help_title: 'Problem Signing?',
		need_help_description: 'Select from an option below to complete',
		reveal_title: 'Verification Required',
		reveal_description: 'Choose a verification method.',
	},
	dyn_enter_password: {
		continue_button_label: 'Continue',
		description: 'Please enter your passcode below to continue.',
		error: {
			invalid_password: 'Invalid passcode',
		},
		input: {
			label: 'Passcode',
			placeholder: 'Passcode',
		},
		title: 'Enter passcode',
	},
	dyn_farcaster_connect_view: {
		copy_button: 'Copy QR URI',
		scan_title:
			"Scan this QR code from your mobile app or phone's camera to connect.",
	},
	dyn_manage_passkeys: {
		title: 'Manage passkeys',
		passkey_from: 'from',
		passkey_providers: {
			android: 'Android Phone',
			brave: 'Brave Browser',
			chrome: 'Google Chrome',
			edge: 'Microsoft Edge',
			firefox: 'Firefox',
			iPhone: 'iPhone',
			opera: 'Opera Browser',
			safari: 'Safari Browser',
		},
		recovery_button: 'Set up new passkey',
	},
	dyn_rename_passkeys: {
		error: 'Whoops! There was an error updating your passkey',
		input_label: 'Passkey name',
		save: 'Save',
		title: 'Rename your passkey',
		not_found: 'No passkeys found',
	},
	dyn_embedded_reveal: {
		title: 'Export wallet',
		agreement_title: 'Agree to continue',
		private_key_title: 'Private key',
		recovery_phrase_title: 'Secret recovery phrase',
		badge_label: 'Sensitive information',
		statement_1: {
			title: 'Your wallet is non-custodial',
			description: 'You are always in control of it.',
		},
		statement_2: {
			title: 'Do not publicly share your wallet key',
			description: 'Your {{credential_type}} controls your account and assets.',
		},
		checkbox_label:
			'I am responsible for safeguarding and using my wallet key information.',
		reveal_description: 'Make sure to safely back up this information',
		reveal_button_label: 'Reveal',
		copy_button_label: 'Copy to clipboard',
		done_button_label: "I'm Done",
	},
	dyn_wallet_settings: {
		export_section: {
			private_key_button: 'Private key',
			srp_button: 'Recovery phrase',
			title: 'Export & Backup',
		},
		identity_section: {
			title: 'Recovery',
			add_email_button: 'Add an email',
		},
		tags: { recommended: 'Recommended' },
		signing_section: {
			email_auth_button: 'One time code',
			passkey_button: 'Passkeys',
			password_button: 'Passcode',
			title: 'Security Methods',
		},
		title: 'Wallet settings',
	},
	dyn_merge_user_accounts: {
		cancel_button: "No, I'll use a different email",
		confirm_button: 'Yes, link to existing account',
		errors: {
			merge_error: 'Something went wrong, please try again.',
		},
		existing_account: 'An account already exists that uses',
		existing_account_trail: 'email.',
		title: 'Would you like to link this wallet to this existing account?',
	},
	dyn_need_help_section: {
		info: 'Problem Signing?',
		contact_support: 'Contact support',
		divider: 'or',
		help_button: 'go here.',
	},
	dyn_network_not_supported: {
		button: 'Switch Network',
		subtitle:
			'Your wallet is not connected to a supported network. Please update before continuing.',
		title: 'Update Network',
		warning_message: 'This network is not available, please update.',
	},
	dyn_network_not_supported_manual_switch: {
		subtitle_network_defined:
			'To continue, please update the network in your wallet to {{network}}',
		subtitle_no_network_defined:
			'Your wallet does not support switching networks from this app. Switch networks directly in your wallet.',
		title: 'Update your Network',
		warning_message: 'This network is not available, please update.',
	},
	dyn_no_access: {
		chainalysis: {
			button_text: 'Try another method',
			description:
				'This wallet has been correlated to illicit activity and cannot access this site.',
			social_media_link_text: 'Why am I seeing this message?',
			social_media_link_url: 'https://docs.dynamic.xyz/docs',
			title: 'This address seems corrupted.',
		},
		default: {
			button_text: 'Try another method',
			description: 'You are not currently on the allow list.',
			title: 'Access denied',
		},
		gate: {
			button_text: 'Try a different wallet',
			description: 'A NFT or a token is required to access this site.',
			title: 'You cannot access the site',
		},
		not_in_the_list_image_alt: 'user is not in the list',
		title: "You don't have access",
	},
	dyn_magic_verification: {
		banner_text: 'Sign in to access your email based wallet',
	},
	dyn_passkey_success: {
		created: 'A new passkey has been created',
		edited: 'Your passkey has been edited',
	},
	dyn_passkey_intro: {
		button: 'Set up a passkey',
		button_logout: 'Log out',
		button_skip: 'Skip for now',
		disabled:
			'Passkeys are not available on this device or browser. Please open on Chrome, Safari, or Brave to continue',
		helper: {
			section_1: {
				description:
					'Passkeys are a standard built by Apple, Google and others, and eliminates the use of passwords.',
				title: 'Built by Apple and Google',
			},
			section_2: {
				description:
					'Passkeys are stored on your phone and are not shared with anyone.',
				title: 'Secure and Private',
			},
			title: "What's Passkey",
			tooltip: 'Need some help?',
		},
		sms_auth: {
			title: 'Finish set up',
			description:
				'Add a security method to finish your profile and complete transactions',
		},
		subtitle:
			'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
		title: 'Secure your wallet',
	},
	dyn_passkey_new_domain_detected: {
		title: 'New domain detected',
		description: 'To complete your transaction select a signing method',
		actions: {
			passkey: {
				title: 'Add new passkey',
				subtitle:
					'Does not expire. Works across devices & secured with biometric.',
			},
			emailAuth: {
				title: 'Use a one-time code',
				subtitle: 'Allows you to transact for 30 min',
			},
			badges: {
				recommended: 'Recommended',
				fastest: 'Fastest',
			},
		},
	},
	dyn_wallet_transfer: {
		sign: {
			spinner: {
				cancel: 'Cancel',
				confirm_transfer:
					'Sign the message to confirm transferring this wallet to this account.',
			},
			title: 'Sign to confirm transfer',
		},
	},
	// dyn_widget: {
	// 	connect: 'Log in or sign up',
	// 	empty_wallets: '{{action}} additional wallets to see them here.',
	// 	other_wallets: 'My other wallets',
	// 	empty_wallets_action_link: 'Link',
	// 	empty_wallets_action_connect: 'Connect',
	// },
	dyn_wallet_information: {
		balance: 'Balance',
	},
	dyn_unlink_wallet_pop_up: {
		disconnect_title: 'Disconnect your wallet?',
		unlink_title: 'Unlink your wallet?',
		disconnect_description: 'Are you sure you want to disconnect your wallet?',
		unlink_description: 'Are you sure you want to unlink your wallet?',
		disconnect_button: 'Yes, disconnect',
		unlink_button: 'Yes, unlink',
		cancel_button: 'No',
	},
	dyn_user_profile: {
		my_information: {
			title: 'My information',
		},
		social_accounts: {
			title: 'Social accounts',
		},
		tooltips: {
			verified_email: 'This email is verified',
			verified_phone: 'This phone number is verified',
		},
		wallets: {
			link_wallet_button: 'Link wallet',
			title: 'Want to add a wallet?',
		},
	},
	dyn_detected_new_wallet: {
		title: 'Account Change Detected',
		description:
			'Your active account in {{walletName}} has changed. This account is not currently linked to this app. Do you want to add it?',
		confirm_button: 'Yes, link this wallet',
	},
	dyn_login: {
		title: {
			all: 'サインイン',
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
	// dyn_login: {
	// 	connect_wallet: {
	// 		title: 'Connect',
	// 	},
	// 	email_form: {
	// 		email_field: {
	// 			label: 'Enter your email',
	// 		},
	// 		submit_button: {
	// 			label: 'Continue',
	// 		},
	// 	},
	// 	email_or_phone: {
	// 		use_email: 'Use email',
	// 		use_phone: 'Use phone',
	// 		prefer_email: 'Prefer email sign up?',
	// 		prefer_phone: 'Prefer phone number sign up?',
	// 	},
	// 	helper: {
	// 		all_wallet_list: 'Get your first wallet',
	// 		email_form: {
	// 			invalid_email: 'Invalid or incorrect email. Did you mistype it?',
	// 		},
	// 		phone_number_form: {
	// 			invalid_phone: 'Invalid or incorrect number. Did you mistype it?',
	// 			invalid_sms_verification:
	// 				'The code you entered is incorrect. Please try again.',
	// 			too_many_sms_verification_attempts:
	// 				'Too many verification attempts, please try again later.',
	// 		},
	// 		pending_connect: {
	// 			title: 'Connecting a wallet',
	// 		},
	// 		pending_signature: {
	// 			title: 'Signing a wallet',
	// 		},
	// 		pending_signature_without_back_button: {
	// 			title: 'Signing a wallet',
	// 		},
	// 		qr_code: {
	// 			title: 'Connecting a wallet',
	// 		},
	// 		wallet_only: 'Get your first wallet',
	// 	},
	// 	qr_code: {
	// 		title: 'Connect',
	// 	},
	// 	separators: {
	// 		default: 'OR',
	// 	},
	// 	sign_wallet: {
	// 		title: 'Sign',
	// 	},
	// 	title: {
	// 		all: 'Log in or sign up',
	// 		all_wallet_list: 'Select your wallet',
	// 		wallet_only: 'Select your wallet',
	// 	},
	// 	wallet_group: {
	// 		title: 'Select Chain',
	// 	},
	// 	select_wallet_in_wallet_group: {
	// 		title: 'Select',
	// 	},
	// 	wallet_list: {
	// 		button_only: 'Continue with a wallet',
	// 	},
	// 	wrong_social_account: {
	// 		retry_button: 'Try again',
	// 		retry_title: 'Please connect with: ',
	// 		subtitle:
	// 			'You must connect with the same account you originally signed in with.',
	// 		title: 'Whoops. Wrong Account',
	// 	},
	// },
	dyn_widget: {
		connect: 'サインイン',
	},
	dyn_wallet_list: {
		view_all: 'すべてのウォレットを見る',
	},
	dyn_otp_verification: {
		code_not_received: 'コードがまだ届いていない場合は',
		code_sent: 'コードが送信されました',
		description: '以下のアドレスに認証コードを送信しました',
		log_out_button: 'ログアウト',
		resend_code: 'ここをクリックして再送信してください',
		resend_code_in: '{{remainingSeconds}}以内にコードを再送信します',
		confirm_code: '認証コードを確認してください',
		verification_succeeded: '認証コードが確認されました',
		hang_tight: '準備が整うまでお待ちください',
		email: {
			title: 'メールを確認してください',
			edit: 'メールの編集',
			complete:
				'検証が完了しました。メールはこのアカウントに対して検証されました。',
		},
		phone_number: {
			title: '電話番号を確認してください',
			edit: '電話番号を編集する',
			complete:
				'認証が完了しました。電話番号がこのアカウントに対して認証されました。',
		},
	},
	dyn_pending_connection: {
		mobile: 'Click connect in your mobile wallet',
		computer: 'Click connect in your wallet popup',
	},
	dyn_pending_signature: {
		click_to_sign: 'Click to Sign',
		note: 'Note: ',
		phantom_ledger_sign:
			"Click sign in your wallet to confirm you own this wallet (this doesn't cost gas).",
		phantom_ledger_warning:
			"Ledger doesn't support message signing. When logging in, a small fee (which should not apply) may appear. See below to learn more.",
		regular_sign_description:
			'Click sign-in in your wallet to confirm you own this wallet.',
	},
	dyn_qr_code: {
		copy_button: 'Copy QR URI',
		get_extension_button: 'Get Extension',
		open_button: 'Open App',
		scan_title:
			"Scan this QR code from your mobile {{app}} or phone's camera to connect.",
		wallet_not_installed: {
			browser_install: 'Install {{browser}} extension',
			install: 'Install {{wallet}} extension to connect',
			refresh: 'Refresh the page once installed',
			select: 'Select from your preferred options below:',
		},
	},
	dyn_wallet_locked: {
		connect_continue: 'Connect your wallet to continue',
		title: 'Welcome back',
		subtitle:
			"We couldn't connect to your wallet. Click connect to retry the connection ",
		connect: 'Connect wallet',
		logout: 'Log out',
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
	dyn_social_redirect: {
		logging_in: 'Logging you in',
	},
	dyn_wallet_redirect: {
		loading: 'Loading...',
	},
	dyn_secure_pregenerated_wallet: {
		description: 'Make transactions simpler and more secure.',
		action: 'Get started',
	},
	dyn_time_since: {
		second: 'second',
		seconds: 'seconds',
		minute: 'minute',
		minutes: 'minutes',
		hour: 'hour',
		hours: 'hours',
		day: 'day',
		days: 'days',
		month: 'month',
		months: 'months',
		year: 'year',
		years: 'years',
		ago: 'ago',
		created: 'Created',
	},
	dyn_wallet_conect: {
		mobile: {
			wallet_list: {
				helper: 'Get your first wallet',
				title: 'WalletConnect wallets',
			},
		},
	},
	dyn_wallet_link: {
		cannot_link: {
			cancel_button: 'Cancel',
			description:
				'This wallet is the only wallet in your other account. You cannot transfer it, since then you will lose access to that account.',
			link_other_button: 'Link a different wallet',
			title: 'Cannot link this wallet to a new account',
		},
		confirm_button: 'Link wallet to current account',
		existent_account: {
			acceptance:
				'I understand that linking this wallet means that I will lose access to the other account.',
			warning:
				'Linking your wallet to this account will unlink it from its previously associated account',
		},
		log_out_button: 'Log out',
		title: 'Transfer this wallet?',
	},
	dyn_send_transaction: {
		confirmation: {
			cancel_button: 'Cancel',
			confirm_button: 'Confirm',
			data: {
				amount: 'Amount',
				from: 'From (You)',
				gas: 'Gas',
				gas_estimate: 'Gas (estimate)',
				to: 'To',
				total: 'Total',
			},
			not_applied: 'N/A',
			title: 'Confirm transaction',
		},
		data: {
			amount: {
				label: 'Amount',
				placeholder: 'Select amount',
			},
			balance: {
				label: 'Balance:',
			},
			from: 'Send from',
			recipient: {
				label: 'Recipient',
				placeholder: 'Enter wallet address...',
			},
		},
		multiple_recipients: 'Multiple',
		send_button: 'Send now',
		succeeded: {
			continue_button: 'Continue',
			network: {
				label: 'Network',
			},
			recipient: {
				label: 'Recipient',
			},
			title: 'Transaction successfully sent',
			total_amount: {
				label: 'Total amount',
			},
		},
		validation: {
			amount: {
				invalid_decimals:
					'Please enter a value up to the {{decimals}}th decimal place.',
				invalid_format: 'The amount is in invalid format',
				over_balance: 'Insufficient funds to send this amount.',
				required: 'The amount field is required',
			},
			recipient: {
				invalid_format: 'The address is in invalid format',
				required: 'The recipient is required',
			},
		},
		warning_message: {
			insufficient_funds:
				'Insufficient funds due to gas price increase from estimate. Please add {{amountLeft}} {{currencySymbol}} to continue.',
		},
		error_message: {
			gas_not_sponsored:
				'The gas fee has increased. Confirm if you still want to complete this transaction.',
		},
	},
	dyn_select_chain: {
		description:
			"This wallet supports multiple chains. Select which chain you'd like to connect to",
		using_hardware_wallet_toggle_label: 'Using Ledger with {{chainName}}',
	},
	dyn_select_wallet: {
		description: 'Select your preferred {{walletName}} wallet?',
	},
	dyn_save_password: {
		badge_text: 'Important!',
		checkbox_label: 'I have safely stored a copy of my passcode.',
		continue: 'Continue',
		copy_button: {
			copy: 'Copy',
			copied: 'Copied',
		},
		description: 'You must retain a copy of this passcode.',
		download_button: 'Download',
		logout: 'Log out',
		password_input: {
			label: 'Passcode',
			placeholder: 'Passcode',
		},
		title: 'Save passcode',
		warning:
			'If you lose your passcode, you cannot recover access to your account.',
	},
	dyn_select_hardware_wallet: {
		title: 'Connect',
		description:
			'This wallet supports using ledger. Toggle on ledger to enable it.',
		using_hardware_wallet_toggle_label: 'Using Ledger with {{chainName}}',
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
