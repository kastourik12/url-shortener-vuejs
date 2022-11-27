/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9F73AB',
        secondary: '#624F82',
        accent: '#3F3B6C',
        'accent-2': '#A3C7D6',
        gray: {
          900: '#B01E68', // 48466D 39375b
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        yellow:{
            900: '#FFE15D',
            800: '#F49D1A',
        },
        orange:{
          900:"#F49D1A",
        },
      }
    },
  },
  plugins: [],
}
