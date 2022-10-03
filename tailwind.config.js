/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(238, 29%, 16%)',
        veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
        darkGrayishBlue: 'hsl(240, 6%, 50%)',
        softRed: 'hsl(14, 88%, 65%)',
        softViolet: 'hsl(273, 75%, 66%)',
        softBlue: 'hsl(240, 73%, 65%)',
        lightGrayishBlue: 'hsl(240, 5%, 91%)'
      },
      fontFamily: {
        'Kumbh Sans': ['Kumbh', 'sans']
      },
      backgroundImage: {
        'mobileBackground': "url('/images/bg-pattern-mobile.svg')",
        'desktopBackground': "url('/images/bg-pattern-desktop.svg')" 
      },
      // backgroundPosition: {
      //   'bottom': 'bottom -10rem',
      //   'left' : 'left'
      // },
    }
  },
  plugins: [],
}
