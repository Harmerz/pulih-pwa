/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neutral: {
          0: 'FFFFFF',
          50: '#F6F6F6',
          100: '#EEEEEE',
          300: '#CBCBCB',
          500: '#A8A8A8',
          700: '#6D6D6D',
          900: '#323232',
          1000: '#141414',
        },
        cream: {
          light: {
            50: '#FFFBF6',
            300: '#F1E9D8',
            500: '#E7DBBE',
            600: '#CBBE9F',
          },
          dark: {
            200: '#E8E6E1',
            300: '#DDD9D1',
            500: '#C6C0B3',
            600: '#A8A296',
          },
          200: '#FADBB8',
          300: '#F7C995',
          400: '#F5B771',
          500: '#F2A54E',
          600: '#C6873F',
        },
        green: {
          400: '#58AD86',
          500: '#319969',
          600: '#277A54',
          700: '#1D5C3F',
          800: '#143D2A',
          850: '#0F2E20',
          pale: {
            300: '#45917F',
            400: '#297161',
            500: '#0D5242',
            900: '#03100D',
          },
          soft: {
            400: '#9DBFB4',
            500: '#85AFA1',
            600: '#6B8D82',
            900: '#1F2926',
          },
        },
        emoticon: {
          500: '#EC2227',
          400: '#F26724',
          300: '#FFBC00',
          200: '#8FC640',
          100: '#019547',
        },
      },
    },
  },
  plugins: [],
}
