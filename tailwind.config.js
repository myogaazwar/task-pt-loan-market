/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#17A9E2',
        'second-color': '#646567',
        'third-color': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
