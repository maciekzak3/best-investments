/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#f1c876',
        'gold-dark': '#d4a95a',
      },
    },
  },
  plugins: [],
};
