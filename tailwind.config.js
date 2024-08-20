/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'custom-red': '#dc0000',
				'custom-green': 'rgb(0, 168, 63)',
				'custom-orange': '#f3a000',
			},
		},
	},
	plugins: [],
}