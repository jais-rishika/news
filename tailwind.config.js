/** @type {import('tailwindcss').Config} */
const plugin= require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'basic':'#2abccb',
        'nextbase':'#f7fc22',
        'base':'#CADCFC',
        'base2':'#00246B',
        'text1': 'white'
      }
    },
  },
  plugins: []
}

