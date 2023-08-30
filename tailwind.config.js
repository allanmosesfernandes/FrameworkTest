/* eslint-disable no-tabs */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				secondary: "#E8B222",
				spaceBlue: "#132237",
				buttonBlue: "#3C76B6",
				buttonBlueHover: "#2E5C8E",
				footerBlue: "#0C1623",
			},
			backgroundImage: {
				"hero-img": "url('/src/assets/images/homepage/hero.png')",
				circles: "url('/src/assets/images/circles.svg')",
				blueGradient: "url('/src/assets/images/gradient.png')",
				blueLinear:
					"linear-gradient(to bottom, rgba(31, 55, 106, 1), rgba(31, 55, 106, 0.4))",
				mountains: "url('/src/assets/images/benefits.png')",
				contactBG: "url('/src/assets/images/getintouch/background.jpg')",
			},
			fontFamily: {
				sora: ["Sora", "sans-serif"],
			},
			lineHeight: {
				137: "137px",
				60: "60px",
				63: "63px",
				54: "54px",
				42: "42px",
				38: "38px",
				35: "35px",
				30: "30px",
				17: "17px",
			},
			tracking: {
				3: "-3px",
				4: "4.80px",
			},
		},
	},
	plugins: [],
};
