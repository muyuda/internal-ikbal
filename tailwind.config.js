/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'surface-dark': '#1b222d',
        'body-dark': '#151a22',
        'slate': {
          DEFAULT: '#64748b',
          'light': '#94a3b8',
        },
        'accent-green': {
          DEFAULT: '#00d382',
          'light': '#34D399',
        }
      }
    },
  },
  plugins: [],
}