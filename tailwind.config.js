/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      slate: colors.slate,
      primary: '#000',
      "primary-dark": "#8892b0",
      secondary: "#64ffda",
      "secondary-dark": "#64ffda",
      light: "#ccd6f6",
      "light-dark": "#ccd6f6",
      lighter: "#a8b2d1",
      "lighter-dark": "#a8b2d1",
      body: '#fff',
      "body-dark": "#0a192f",
      "secondary-bg": "#112240",
      "secondary-bg-dark": "#112240",
    },
    extend: {
      boxShadow: {
        aside: "rgba(2, 12, 27, 0.7) -10px 0px 30px -15px",
      },
      maxHeight: {
        "lg": "432px",
      },
    },
  },
  plugins: [],
}

