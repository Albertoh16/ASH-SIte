/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {    
    extend: {
      colors:{
        'main': '#1b222c',
        'mainTwo': '#12151c',
        'mainThree': '#191d26',
        'mainRed': '#661b1c',
        'MainRedTwo': '#531516',
        'window': '#12151ca4'
      },

      keyframes:{
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },

      animation: {
        fadeIn08out2: 'fadeIn 0.7s ease-in 0.8s forwards, fadeOut 0.7s ease-in 2s forwards',
        fadeIn15out2: 'fadeIn 0.7s ease-in 1.5s forwards, fadeOut 0.7s ease-in 2s forwards',
        fadeIn2: 'fadeIn 0.7s ease-in 2s forwards',
        fadeOut2: 'fadeOut 0.7s ease-in 2s forwards'
      }
    },
  },
  plugins: [],
}

