/* eslint-disable functional/prefer-immutable-types */
export default ({ size = 6 }: { size: number }) => (
	<svg
		width="132"
		height="132"
		viewBox="0 0 132 132"
		fill="none"
		className={`w-${size} h-${size}`}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 95.3301C0 83.1801 9.85 73.3301 22 73.3301H36.67C48.82 73.3301 58.67 83.1801 58.67 95.3301V110C58.67 122.15 48.82 132 36.67 132H22C9.85 132 0 122.15 0 110V95.3301ZM22 88.0001C17.95 88.0001 14.67 91.2801 14.67 95.3301V110C14.67 114.05 17.95 117.33 22 117.33H36.67C40.72 117.33 44 114.05 44 110V95.3301C44 91.2801 40.72 88.0001 36.67 88.0001H22Z"
			fill="#5B8BF5"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M102.67 73.3301C106.72 73.3301 110 76.6101 110 80.6601V95.3301H124.67C128.72 95.3301 132 98.6101 132 102.66C132 106.71 128.72 109.99 124.67 109.99H110V124.66C110 128.71 106.72 131.99 102.67 131.99C98.62 131.99 95.34 128.71 95.34 124.66V110H80.67C76.62 110 73.34 106.72 73.34 102.67C73.34 98.6201 76.62 95.3401 80.67 95.3401H95.34V80.6701C95.33 76.6201 98.62 73.3301 102.67 73.3301Z"
			fill="#FF3815"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M73.33 22C73.33 9.85 83.18 0 95.33 0H110C122.15 0 132 9.85 132 22V36.67C132 48.82 122.15 58.67 110 58.67H95.33C83.18 58.67 73.33 48.82 73.33 36.67V22ZM95.33 14.67C91.28 14.67 88 17.95 88 22V36.67C88 40.72 91.28 44 95.33 44H110C114.05 44 117.33 40.72 117.33 36.67V22C117.33 17.95 114.05 14.67 110 14.67H95.33Z"
			fill="#00D0FD"
		/>
		<g filter="url(#filter0_i_524_3)">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 22C0 9.85 9.85 0 22 0H36.67C48.82 0 58.67 9.85 58.67 22V36.67C58.67 48.82 48.82 58.67 36.67 58.67H22C9.85 58.67 0 48.82 0 36.67V22ZM22 14.67C17.95 14.67 14.67 17.95 14.67 22V36.67C14.67 40.72 17.95 44 22 44H36.67C40.72 44 44 40.72 44 36.67V22C44 17.95 40.72 14.67 36.67 14.67H22Z"
				fill="#D500E6"
			/>
		</g>
		<defs>
			<filter
				id="filter0_i_524_3"
				x="0"
				y="0"
				width="58.67"
				height="58.6699"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx="2" dy="2" />
				<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.835294 0 0 0 0 0 0 0 0 0 0.901961 0 0 0 1 0"
				/>
				<feBlend mode="normal" in2="shape" result="effect1_innerShadow_524_3" />
			</filter>
		</defs>
	</svg>
)
