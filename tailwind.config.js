/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CABFAB',
        secondary: '#41444B',
        accent: '#52575D',
        'accent-2': '#DFD8C8',
      }
    },
  },
  plugins: [],
}
