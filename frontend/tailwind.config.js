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
        purple_9663FC: '#9663FC',
        purple_800CDB: '#800CDB',
        green_C8F3D9: '#C8F3D9',
        yellow_FFDA7A: '#FFDA7A',
      }
    },
  },
  plugins: [],
}

