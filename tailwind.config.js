/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        light: {
          bgPrimary: '#ffffff',
          bgSecondary: '#f3f4f7',
          text: '#2f2e2e',
          primary: '#1E90FF',
          secondary: '#FF8A5B',
        },
        dark: {
          bgPrimary: '#ffffff',
          bgSecondary: '#f3f4f7',
          text: '#282828',
          primary: '#1E90FF',
          secondary: '#fbbc05',
        },
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
};
