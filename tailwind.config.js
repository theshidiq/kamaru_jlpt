/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        'primary-dark': '#4338CA',
      },
    },
  },
  plugins: [],
}
