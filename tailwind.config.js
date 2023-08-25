/* eslint-disable no-tabs */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "hero-img": "url('/src/assets/images/homepage/hero.png')",
      },
    },
  },
  plugins: [],
};
