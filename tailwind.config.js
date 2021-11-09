module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%'
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        fade: 'fadeOut 5s ease-in-out',
      },
      // https://stackoverflow.com/questions/68306441/fade-transition-tailwind-class-to-something-else-over-certain-amount-of-time
      keyframes: {
        fade: theme => ({
          fadeOut: {
            '0%': { backgroundColor: theme('colors.red.300') },
            '100%': { backgroundColor: theme('colors.transparent') },
          },
        }),
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
