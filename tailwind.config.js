/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}', './src/**/*'],
  theme: {
    // fontFamily: {
    //   Pretendard: ['Pretendard'],
    // },
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
