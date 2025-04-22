/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {   
    screens: {
      'tiny': { max: '335px' },
      // @media (min-width: 335px) 

      'subAdj1': '440px',
      // @media (min-width: 440px) 

      'sm': '640px',
      // @media (min-width: 640px)
  
      'md': '768px',
      // @media (min-width: 768px)
  
      'lg': '1024px',
      // @media (min-width: 1024px)
  
      'xl': '1280px',
      // @media (min-width: 1280px)

      '2xl': '1536px',
      // @media (min-width: 1536px)
    
      '3xl': '1800px',
      // @media (min-width: 1800px)
    },
    
    extend: {
      colors:{
        'main': '#1b222c',
        'mainTwo': '#12151c',
        'mainThree': '#191d26',
        'mainFour': '#232834',
        'mainRed': '#661b1c',
        'MainRedTwo': '#531516',
        'MainRedThree': '#832123',
        'window': '#12151ca4'
      },

      // Shadows for layering.
      boxShadow: {
        bottom: "0 10px 4px -2px rgba(0, 0, 0, 0.2)",
        top: '0 -4px 10px rgba(0, 0, 0, 0.2)'
      },

      keyframes:{
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },

        moveAMdown: {
          '0%': { top: -500  },
          '100%': { top: 30 }
        },

        moveASdown: {
          '0%': { top: -500  },
          '100%': { top: 25 }
        },

        moveACSdown: {
          '0%': { top: -500  },
          '100%': { top: 22 }
        },

        moveALdown: {
          '0%': { top: -500  },
          '100%': { top: 19 }
        },

        slideMenuLeft: {
          '0%': { right: -500  },
          '100%': { right: 0 }
        },

        slideMenuRight: {
          '0%': { right: 0  },
          '100%': { right: -500 }
        },

        slideShadowLeft: {
          '0%': { right: -500  },
          '100%': { right: 400 }
        },

        slideShadowRight: {
          '0%': { right: 400  },
          '100%': {right: -500 }
        }
      },

      animation: {
        fadeIn08out2: 'fadeIn 0.5s ease-in 0.8s forwards, fadeOut 0.5s ease-in 2s forwards',
        fadeIn15out2: 'fadeIn 0.5s ease-in 1.5s forwards, fadeOut 0.5s ease-in 2s forwards',
        fadeIn2: 'fadeIn 0.5s ease-in 2s forwards',
        fadeOut2: 'fadeOut 0.5s ease-in 2s forwards',
        moveAMdown: 'moveAMdown 0.5s ease-in 1.8s forwards',
        moveASdown: 'moveASdown 0.5s ease-in 2s forwards',
        moveACSdown: 'moveACSdown 0.5s ease-in 2.2s forwards',
        moveALdown: 'moveALdown 0.5s ease-in 2.4s forwards',
        slideMenuLeft: 'slideMenuLeft 0.5s ease-in forwards',
        slideMenuLRight: 'slideMenuRight 0.5s ease-in forwards',
        slideCardOut: 'slideCardOut 3s ease-in forwards'
      }
    },
  },
  plugins: [],
}

