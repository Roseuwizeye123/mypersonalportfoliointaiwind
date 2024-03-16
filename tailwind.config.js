/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index/*.{html,js}"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
      DEFAUT: '1rem',
      sm: '2rem',
      md: '3rem',
      lg: '4rem',
      }
    },
    extend: {
      primary: {
        DEFAULT: '#00ADB5',
        black: '#222831',
        gray: '#393E4',
        while: '#EEEEEE',
      }
    },
  },
  plugins: [],
}

