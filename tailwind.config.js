/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      white: colors.white,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      gray: {
        DEFAULT: "#f6f9fc",
        50: colors.gray[50],
        100: colors.gray[100],
        200: colors.gray[200],
        300: colors.gray[300],
        400: colors.gray[400],
        500: colors.gray[500],
        600: colors.gray[600],
        700: colors.gray[700],
        800: colors.gray[800],
        900: colors.gray[900],
      },
      blue: {
        DEFAULT: "#0a2540",
        dark: "#06182c",
        darker: "#2e3a55",
        light: "#0c2e4e",
        lighter: "#adbdcc",
        lightest: "#425466",
      },
      accent: "#635bff",
      "accent-dark": "#00d4ff",
      // primary: '#000',
      // "primary-dark": "#8892b0",
      // secondary: "#64ffda",
      // "secondary-dark": "#64ffda",
      // light: "#ccd6f6",
      // "light-dark": "#ccd6f6",
      // lighter: "#a8b2d1",
      // "lighter-dark": "#a8b2d1",
      // body: '#fff',
      // "body-dark": "#0a192f",
      // "secondary-bg": "#112240",
      // "secondary-bg-dark": "#112240",
    },
    extend: {
      boxShadow: {
        aside: "rgba(2, 12, 27, 0.7) -10px 0px 30px -15px",
      },
      maxHeight: {
        "lg": "432px",
      },
      fontFamily: {
        // 'sans': ['Calibre', ...defaultTheme.fontFamily.sans],
        'sans': [...defaultTheme.fontFamily.sans],
        'mono': ['"SF Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}

