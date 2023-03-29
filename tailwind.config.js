/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    extend: {
      colors: {
        anarvin: "#6e2f1b",
      },
    },
  },
  plugins: [],
};
