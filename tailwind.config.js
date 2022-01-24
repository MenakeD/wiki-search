const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        hoelfer: ['Hoefler', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: {
          base: '#FFFEFE',
          dark: '#F1F1F1',
        },
        dark: {
          background: {
            secondary: '#220065',
            primary: '#160040',
          },
          button: {
            primary: '#C748ED',
            secondary: '#EDEDED',
          },
          text: {
            result: {
              heading: '#D7C7F4',
              link: '#DC65FF',
              description: '#ECE8E8',
              date: '#CACACA',
            },
          },
          shadow: '#8A8DFE',
        },
        light: {
          background: {
            secondary: '#FFFEFE',
            primary: '#F5F4F4',
          },
          button: {
            primary: '#C748ED',
            secondary: '#D25AF6',
          },
          text: {
            result: {
              heading: '#5A0AF1',
              link: '#BF3EE5',
              description: '#6B6A6A',
              date: '#818181',
            },
          },
          shadow: '#000000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
