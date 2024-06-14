/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#333333',
          primary: '#0059B3',
          secondary: '#fbbc05',
          accent: '#34a853',
          muted: '#e0e0e0',
        },
        dark: {
          background: '#121212',
          text: '#ffffff',
          primary: '#8ab4f8',
          secondary: '#fbbc05',
          accent: '#34a853',
          muted: '#3c3c3c',
        },
      },
    },
  },
  plugins: [],
}