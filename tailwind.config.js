/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'transparent-carbon-black': {
          35: 'rgb(0 0 0 / 35%)',
          55: 'rgb(0 0 0 / 55%)',
          65: 'rgb(0 0 0 / 65%)',
          70: 'rgb(0 0 0 / 70%)',
        },
        'carbon-gray': {
          60: 'rgb(86 91 89 / 60%)',
        },
        'transparent-blue': {
          30: 'rgb(0 47 77 / 30%)',
        },
        'transparent-pinkish-white': {
          70: 'rgb(255 241 250 / 70%)',
        },
      },
      fontFamily: {
        'amsterdam-four': ['Amsterdam Four'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'helvetica-now': ['Helvetica Now', 'sans-serif'],
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
