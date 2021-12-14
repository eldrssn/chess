module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-plusplus": ["off"],
    indent: [2, "tab"],
    "prettier/prettier": [
      "warn",
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: "all",
        useTabs: true,
        proseWrap: "always",
        endOfLine: "auto",
        bracketSpacing: true,
      },
    ],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "max-len": [
      "warn",
      {
        code: 80,
        tabWidth: 4,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "react/prop-types": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "react/display-name": ["off"],
  },
};
