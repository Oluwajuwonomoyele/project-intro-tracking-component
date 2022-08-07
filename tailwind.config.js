/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    colors: {
      'primary': 'hsl(0, 100%, 68%)',
      'very-dark-blue': 'hsl(230, 29%, 20%)',
      'dark-grayish-blue': 'hsl(230, 11%, 40%)',
      'grayish-blue': 'hsl(231, 7%, 65%)',
      'light-grayish-blue': 'hsl(207, 33%, 95%)'
    },
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
