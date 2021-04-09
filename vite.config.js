import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";

const config = {
  plugins: [
    { ...eslint({ include: "src/**/*.+(js|jsx|ts|tsx)" }), enforce: "pre" },
    vue(),
  ],
};

export default config;
