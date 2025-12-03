/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
   theme: {

    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: '#102C53',
        secondary: '#14F3D9',
        colorbermuda: '#78dcca',
      }
    },
  },
  plugins: [],
}
