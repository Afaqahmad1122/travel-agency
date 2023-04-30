/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#fafa8e",
        "primary-300": "#2e476b",
        "primary-500": "#f66f4d",
        "secondary-100": "#2d3134",
        "secondary-300": "#5b5f62",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        MD: "1060px",
      },
    },
  },
  plugins: [],
};
