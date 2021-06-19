module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off'
  },
};
