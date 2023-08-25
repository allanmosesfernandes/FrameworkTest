module.exports = {
  env: {
    browser: true,
    es2021: true,
	},
	extends: "airbnb",
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		quotes: ["error", "double"],
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"no-console": "error", // Disallow the use of console.log
		"eol-last": ["error", "always"],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
};
