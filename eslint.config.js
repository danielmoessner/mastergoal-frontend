import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";
import vueParser from "vue-eslint-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eslintrc = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      // globals: {
      //   ...globals.browser,
      // },
      parser: vueParser,
    },
  },
  ...eslintrc.extends(
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ),
  ...eslintrc.plugins("prettier"),
  ...eslintrc.config({
    rules: {
      "no-unused-vars": "warn",
      "vue/no-unused-components": "warn",
      "vue/require-default-prop": "off",
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          ignores: [],
        },
      ],
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          singleQuote: false,
          semi: true,
          htmlWhitespaceSensitivity: "ignore",
          endOfLine: "auto",
          indent: 2,
        },
      ],
    },
  }),
];
