/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "william": "url(../src/components/assets/William.jpg)"
      },
      fontFamily: {
        'yeseva': ["Yeseva One", "display"]
      },
      keyframes: {
        menu: {
          "0%" : { opacity: "0"},
          "100%" : {opacity: "100"},
        }
      },
      animation: {
        "rotate": "menu 0.5s linear"
      }
    },
  },
  plugins: [],
}