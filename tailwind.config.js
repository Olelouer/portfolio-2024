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
          secondary: '#fbbc05',
        },
        dark: {
          bgPrimary: '#ffffff',
          bgSecondary: '#f3f4f7',
          text: '#282828',
          primary: '#1E90FF',
          secondary: '#fbbc05',
        },
      },
    },
  },
  plugins: [],
};
