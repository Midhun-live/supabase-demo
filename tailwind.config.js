/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/App.js"],
  theme: {
    extend: {
      colors: {
        primary: "#429cf5",
        secondary: {
          100: "#afbbc7",
          200: "#38414a",
        },
      },
    },
  },
  plugins: [],
};
