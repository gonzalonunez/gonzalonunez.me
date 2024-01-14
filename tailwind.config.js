const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rewind: '#7A3BDA'
      },
      fontFamily: {
        body: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-lora)', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
