module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      { "no-console": "off" },
    ],
  },
};
