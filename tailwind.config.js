/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}', './src/**/*'],
  theme: {
    fontFamily: {
      nanum: ['Nanum Myeongjo'],
    },
    letterSpacing: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
    },
    extend: {
      colors: {
        primary: '#674a40',
        secondary: '#8cadbe',
        positive: '#51CE6E',
        negative: '#ED6954',
      },
    },
  },
  plugins: [],
}
