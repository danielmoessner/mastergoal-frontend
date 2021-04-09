const cssnano = require("cssnano");
// const autoprefixer = require("autoprefixer");

module.exports = ({ env }) => ({
  plugins: [
    require("tailwindcss"),
    // env === "production" ? autoprefixer() : null,
    env === "production"
      ? cssnano({
          preset: "default",
        })
      : null,
  ],
});
