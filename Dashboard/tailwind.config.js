/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    // colors: {
    //   transparent: 'transparent',
    //   'baseBgColor1': '#cdcae9',
    //   'bgColor1': '#6a5fdf',
    //   'bgColor2': '#9e97e9',
    //   'txColor1': '#d0d2d6'
    // }
  },
  plugins: [],
}