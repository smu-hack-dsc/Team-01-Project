/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RecoletaAlt: ['RecoletaAlt', 'sans-serif'],
        DMSans: ['DMSans', 'sans-serif'],
        default: ['DMSans', 'sans-serif'],
      },
      colors: {
        purple_4000C1: '#4000C1',
      }
    },
  },
  plugins: [],
}

