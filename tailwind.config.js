/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#22c55e', // green-500
          fg: '#052e16',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
