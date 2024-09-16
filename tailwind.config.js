/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "takiBrown-300": "#d9985b",
        "takiBrown-400": "#6C4E31",
        "takiBrown-500": "#603F26",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "san-serif"],
        chicle: ["var(--font-chicle)", "san-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
