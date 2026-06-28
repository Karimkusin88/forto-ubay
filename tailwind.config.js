/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// Custom colors aligned with CSS variables
			colors: {
				accent: {
					DEFAULT: "#7c5cbf",
					light: "#a07de0",
				},
				portfolio: {
					bg: "#0f0f13",
					card: "#1c1c26",
					border: "rgba(124, 92, 191, 0.2)",
				},
			},
			// Custom gradient utilities
			backgroundImage: {
				"gradient-accent": "linear-gradient(135deg, #7c5cbf 0%, #a07de0 100%)",
				"gradient-bg": "linear-gradient(135deg, #0f0f13 0%, #16161d 50%, #1a1426 100%)",
			},
			// Box shadow utilities
			boxShadow: {
				"accent-glow": "0 0 20px rgba(124, 92, 191, 0.35)",
				"accent-glow-lg": "0 0 40px rgba(124, 92, 191, 0.25)",
				"card": "0 8px 32px rgba(0, 0, 0, 0.4)",
			},
			// Animation
			animation: {
				"float": "float 6s ease-in-out infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			fontFamily: {
				poppins: ["var(--font-poppins)", "sans-serif"],
				jost: ["var(--font-jost)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
