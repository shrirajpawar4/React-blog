module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cornflower-blue': {  DEFAULT: '#7579E7',  '50': '#B0B2F1',  '100': '#A9ACF0',  '200': '#9C9FEE',  '300': '#8F92EC',  '400': '#8286E9',  '500': '#7579E7',  '600': '#686CE5',  '700': '#5B60E2',  '800': '#4E53E0',  '900': '#4146DE'},
        'winter-blue': {  DEFAULT: '#949CDF',  '50': '#C9CDEF',  '100': '#C3C8ED',  '200': '#B7BDEA',  '300': '#ACB2E6',  '400': '#A0A7E3',  '500': '#949CDF',  '600': '#8891DB',  '700': '#7C86D8',  '800': '#717BD4',  '900': '#6570D1'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
