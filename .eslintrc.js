module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"react-app",
		"airbnb",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	rules: {
		quotes: ["error", "double"],
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"no-console": "error",
	},
	plugins: ["react", "react-hooks", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.js"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
};
