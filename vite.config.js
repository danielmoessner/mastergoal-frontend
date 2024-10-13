import vue from "@vitejs/plugin-vue";

const config = {
  plugins: [vue()],
  // port 3000
  server: {
    port: 3000,
  },
};

export default config;
