module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  plugins: ["vue", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "vue/no-unused-components": "warn",
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
      },
    ],
  },
};
