import cssnano from "cssnano";
// import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default ({ env }) => ({
  plugins: [
    tailwindcss,
    // env === "production" ? autoprefixer() : null,
    env === "production"
      ? cssnano({
          preset: "default",
        })
      : null,
  ],
});
