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
        error: '#FF3B30',
        primary: '#007AFF',
        success: '#34C759'
      },
      fontFamily: {
        body: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-lora)', ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
