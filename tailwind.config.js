module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        // that is animation class
        animation: {
          fade: "fadeOut 5s ease-in-out",
        },

        // that is actual animation
        keyframes: (theme) => ({
          fadeOut: {
            "0%": { backgroundColor: theme("colors.red.300") },
            "100%": { backgroundColor: theme("colors.transparent") },
            // "0%": { display:"None" },
          },
        }),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
