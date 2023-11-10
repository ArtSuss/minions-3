/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EB80E",
        opacityPrimaty: "rgba(14, 184, 14, 0.2)",
        opacityBlack: "rgba(0,0,0,0.2)",
        body: "#F4FAFA",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        nunito: ["Nunito", "serif"],
        raleway: ["Raleway", "serif"],
      },
    },
  },
  plugins: [],
};
