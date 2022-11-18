/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#292b4a',
          50:  '#f8f9fa',
          100: '#eaf1f8',
          200: '#d1ddf0',
          300: '#a8bbdc',
          400: '#7b93c2',
          500: '#6070a9',
          600: '#4e558d',
          700: '#3c3f6c',
          800: '#292b4a',
          900: '#17192c',
        },
        primary: {
          DEFAULT: '#293DF0',
          50: '#F5F6FF',
          100: '#E7E9FE',
          200: '#C6CBFB',
          300: '#96A0F8',
          400: '#5464F3',
          500: '#293DF0',
          600: '#0E22CD',
          700: '#0A1894',
          800: '#060F5B',
          900: '#020622'
        },
        secondary: {
          DEFAULT: '#238180',
          50: '#f4f9f9', 
          100: '#e9f2f2', 
          200: '#c8e0df', 
          300: '#a7cdcc', 
          400: '#65a7a6', 
          500: '#238180', 
          600: '#207473', 
          700: '#1a6160', 
          800: '#154d4d', 
          900: '#113f3f'
        }
      },
      boxShadow: {
        'border': 'inset 0 0px 0px 1px rgba(0, 0, 0, 1.0)',
        'border-2': 'inset 0 0px 0px 2px rgba(0, 0, 0, 1.0)',
        'border-3': 'inset 0 0px 0px 3px rgba(0, 0, 0, 1.0)',
        'border-4': 'inset 0 0px 0px 4px rgba(0, 0, 0, 1.0)',
      },
      animation: {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
    keyframes: {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
