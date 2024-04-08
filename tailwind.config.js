/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    dark: {
      "background-color": "lightblue",
      color: "white",
    },
    extend: {
      colors: {
        shiny: "#6FA1EC",
        cloudy: "#6FA1EC",
        rainy: "6FA1EC",
      },
    },
  },
  plugins: [],
};
