/** @type {import('tailwindcss').Config} */
const plugin= require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hidden': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.scrollbar-hidden-vertical': {
          /* Hide vertical scrollbar */
          'overflow-y': 'scroll', // Allow vertical scrolling
          '::-webkit-scrollbar': {
            width: '0px', // Hide scrollbar width
            background: 'transparent', // Optional: make background transparent
          },
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      };
      addUtilities(newUtilities,['responsive','hover'])
    }),
  ],
}

