module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
    'html'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'max-len': ['error', {
      'code': 200,
      'ignorePattern': 'svg'
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': { 'max': 5 },
      'multiline': { 'max': 1 }
    }]
  }
};
