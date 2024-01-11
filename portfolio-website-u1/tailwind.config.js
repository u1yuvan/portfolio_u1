/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['montserrat']
      },
      colors:{
        linkedin:" #0077b5",
        github:"#2b3137"
      }
    },
  },
  plugins: [],
}