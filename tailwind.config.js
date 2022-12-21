/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BFEAF5',
        secondary: '#82AAE3',
        accent: '#91D8E4',
        'accent-2': '#EAFDFC',
      }
    },
  },
  plugins: [],
}
