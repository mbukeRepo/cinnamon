/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5135FF",
        pureWhite: "#F5F5F5",
        secondary: "#636363",
        tartiary: "#CCCCCC",
        footer: "#CFCFCF",
        "cinn-bg-color": "#F6F6F6",
        "project-text": "#686868",
      },
      fontFamily: {
        sans: ["mont-regular", "system-ui", "sans-serif"],
        "mont-bold": ["mont-bold", "sans-serif"],
        "mont-semi-bold": ["mont-semi-bold", "sans-serif"],
        "mont-heavy": ["mont-heavy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
