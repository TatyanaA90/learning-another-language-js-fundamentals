import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ["*.config.*"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      "max-len": [1, 120, 2, { "ignoreComments": true }],
      "no-console": "off",
      "quotes": ["error", "single"],
      "camelcase": ["error", {"properties": "always"}],
      "semi": ["warn", "always"],
      "comma-dangle": ["warn", "only-multiline"],
      "dot-notation": "warn",
      "space-before-function-paren": "off",
      "indent": ["warn", 2],
      "padded-blocks": "warn",
      "no-trailing-spaces": "warn",
      "array-bracket-spacing": "warn",
      "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "padded-blocks": ["error", "never"],
      "no-var": "error",
    },
  },
];