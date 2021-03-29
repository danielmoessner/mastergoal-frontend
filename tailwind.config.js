const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.*"],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          900: "#143c52",
        },
      },
    },
  },
  variants: {
    borderWidth: ({ after }) => after(["first", "last"]),
    borderRadius: ({ after }) => after(["first", "last"]),
    margin: ({ after }) => after(["first", "last"]),
    textColor: ({ after }) => after(["first", "last"]),
    backgroundColor: ({ after }) => after(["odd", "even", "active"]),
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
