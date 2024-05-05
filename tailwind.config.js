/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        "primary-light": "#151515",
        secondary: "#f8a145",
        "secondary-light": "#f07900",
        "secondary-dark": "#d35100",
      },
    },
  },
  plugins: [],
};
