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
        buttonBlueHover: "#2E5A8A",
      },
      backgroundImage: {
        "hero-img": "url('/src/assets/images/homepage/hero.png')",
        circles: "url('/src/assets/images/circles.svg')",
        blueGradient: "url('/src/assets/images/gradient.png')",
        mountains: "url('/src/assets/images/benefits.png')",
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
        30: "30px",
      },
      tracking: {
        3: "-3px",
        4: "4.80px",
      },
    },
  },
  plugins: [],
};
