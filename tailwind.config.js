import { fontFamily } from 'tailwindcss/defaultTheme';

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
        title: ['var(--font-lora)', ...fontFamily.serif]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
