module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
