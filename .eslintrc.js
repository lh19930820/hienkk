const DISABLED = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	settings: {
		'react': {
			'version': 'detect'
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'accessor-pairs': WARNING,
		'arrow-spacing': [WARNING, {
			'before': true,
			'after': true
		}],
		'block-spacing': [WARNING, 'never'],
		'brace-style': [WARNING, '1tbs', {
			'allowSingleLine': true
		}],
		'camelcase': [DISABLED, {
			'properties': 'always'
		}],
		'comma-dangle': [WARNING, 'never'],
		'comma-spacing': [WARNING, {
			'before': false,
			'after': true
		}],
		'comma-style': [WARNING, 'last'],
		'constructor-super': WARNING,
		'curly': [WARNING, 'multi-line'],
		'dot-location': [WARNING, 'property'],
		'eol-last': WARNING,
		'eqeqeq': [WARNING, 'always', { 'null': 'ignore' }],
		'generator-star-spacing': [WARNING, {
			'before': true,
			'after': true
		}],
		'handle-callback-err': [WARNING, '^(err|error)$'],
		'indent': [WARNING, 'tab', {
			SwitchCase: WARNING,
			outerIIFEBody: WARNING
		}],
		'jsx-quotes': [WARNING, 'prefer-single'],
		'key-spacing': [WARNING, {
			'beforeColon': false,
			'afterColon': true
		}],
		'keyword-spacing': [WARNING, {
			'before': true,
			'after': true
		}],
		'new-cap': [WARNING, {
			'newIsCap': true,
			'capIsNew': false
		}],
		'new-parens': WARNING,
		'no-array-constructor': WARNING,
		'no-caller': WARNING,
		'no-console': 'off',
		'no-class-assign': WARNING,
		'no-cond-assign': WARNING,
		'no-const-assign': WARNING,
		'no-control-regex': DISABLED,
		'no-delete-var': WARNING,
		'no-dupe-args': WARNING,
		'no-dupe-class-members': WARNING,
		'no-dupe-keys': WARNING,
		'no-duplicate-case': WARNING,
		'no-empty-character-class': WARNING,
		'no-empty-pattern': WARNING,
		'no-eval': WARNING,
		'no-ex-assign': WARNING,
		'no-extend-native': WARNING,
		'no-extra-bind': WARNING,
		'no-extra-boolean-cast': WARNING,
		'no-extra-parens': [WARNING, 'functions'],
		'no-fallthrough': WARNING,
		'no-floating-decimal': WARNING,
		'no-func-assign': WARNING,
		'no-implied-eval': WARNING,
		'no-inner-declarations': [WARNING, 'functions'],
		'no-invalid-regexp': WARNING,
		'no-irregular-whitespace': WARNING,
		'no-iterator': WARNING,
		'no-label-var': WARNING,
		'no-labels': [WARNING, {
			'allowLoop': false,
			'allowSwitch': false
		}],
		'no-lone-blocks': WARNING,
		'no-mixed-spaces-and-tabs': WARNING,
		'no-multi-spaces': WARNING,
		'no-multi-str': WARNING,
		'no-multiple-empty-lines': [WARNING, {
			'max': WARNING
		}],
		'no-native-reassign': WARNING,
		'no-negated-in-lhs': WARNING,
		'no-new-object': WARNING,
		'no-new-require': WARNING,
		'no-new-symbol': WARNING,
		'no-new-wrappers': WARNING,
		'no-obj-calls': WARNING,
		'no-octal': WARNING,
		'no-octal-escape': WARNING,
		'no-path-concat': WARNING,
		'no-proto': WARNING,
		'no-redeclare': WARNING,
		'no-regex-spaces': WARNING,
		'no-return-assign': [WARNING, 'except-parens'],
		'no-self-assign': WARNING,
		'no-self-compare': WARNING,
		'no-sequences': WARNING,
		'no-shadow-restricted-names': WARNING,
		'no-spaced-func': WARNING,
		'no-sparse-arrays': WARNING,
		'no-this-before-super': WARNING,
		'no-throw-literal': WARNING,
		'no-trailing-spaces': WARNING,
		'no-undef': WARNING,
		'no-undef-init': WARNING,
		'no-unexpected-multiline': WARNING,
		'no-unmodified-loop-condition': WARNING,
		'no-unneeded-ternary': [WARNING, {
			'defaultAssignment': false
		}],
		'no-unreachable': WARNING,
		'no-unsafe-finally': WARNING,
		'no-unused-vars': [WARNING, {
			'vars': 'all',
			'args': 'none'
		}],
		'no-useless-call': WARNING,
		'no-useless-computed-key': WARNING,
		'no-useless-constructor': WARNING,
		'no-useless-escape': DISABLED,
		'no-whitespace-before-property': WARNING,
		'no-with': WARNING,
		'one-var': [WARNING, {
			'initialized': 'never'
		}],
		'operator-linebreak': [WARNING, 'after', {
			'overrides': {
				'?': 'before',
				':': 'before'
			}
		}],
		'padded-blocks': [WARNING, 'never'],
		'quotes': [WARNING, 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}],
		'semi': [WARNING, 'always'],
		'semi-spacing': [WARNING, {
			'before': false,
			'after': true
		}],
		'space-before-function-paren': ['error', {
			'named': 'never',
			'anonymous': 'always',
			'asyncArrow': 'always'
		}],
		'space-before-blocks': [WARNING, 'always'],
		'space-in-parens': [WARNING, 'never'],
		'space-infix-ops': WARNING,
		'space-unary-ops': [WARNING, {
			'words': true,
			'nonwords': false
		}],
		'template-curly-spacing': [WARNING, 'never'],
		'use-isnan': WARNING,
		'valid-typeof': WARNING,
		'wrap-iife': [WARNING, 'any'],
		'yield-star-spacing': [WARNING, 'both'],
		'yoda': [WARNING, 'never'],
		'prefer-const': ERROR,
		'no-debugger': process.env.NODE_ENV === 'production' ? WARNING : DISABLED,
		'object-curly-spacing': [WARNING, 'always', {
			objectsInObjects: true,
			arraysInObjects: true
		}],
		'array-bracket-spacing': [WARNING, 'never']
	}
};
