/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Covers all .tsx files within the root and other directories
  ],
  theme: {
    extend: {
      fontFamily: {
        otterco: ['Otterco', 'sans-serif'],
      },
      colors: {
        primary: '#f6f5f4',
        second: '#f1f0ef',
      },
    },
  },
  plugins: [],
};
