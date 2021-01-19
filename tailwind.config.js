const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        orange: colors.orange
      },
    },
    stroke: theme => ({
      'red': theme('colors.red.500'),
      'white': theme('colors.white'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
