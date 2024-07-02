/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        "bg": "#f0f9ff",
        "title": "#0ea5e9",
        "btn": "#0369a1",
        "darkbgText": "#e5e7eb"

      },
      transitionDuration: {
        '1500': '1500ms',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

