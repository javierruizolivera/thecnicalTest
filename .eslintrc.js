'use strict';

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			legacyDecorators: true
		}
	},
	plugins: [],
	extends: ['eslint:recommended', 'prettier'],
	env: {
		browser: true,
		es2021: true
	},
	rules: {
		indent: ['error', 2], // no es necesaria con prettier
		'no-else-return': ['error'],
		quotes: ['error', 'single'], // no es necesaria con prettier
		semi: ['error', 'always'], // no es necesaria con prettier
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-arrow-callback': 'error'
	},
	overrides: [
		{
			files: ['.eslintrc.js'],
			parserOptions: {
				sourceType: 'script'
			},
			env: {
				browser: false,
				node: true
			},
			plugins: ['node'],
			extends: ['plugin:node/recommended']
		}
	]
};
