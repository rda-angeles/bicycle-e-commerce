/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06283D",
        secondary: "#256D85",
        tertiary: "#47B5FF",
        quarternary: "#DFF6FF",
      },
      fontFamily: {
        "f-primary": "'Montserrat', sans-serif;",
        "f-secondary": "'Esteban', sans-serif;",
      },
    },
  },
  plugins: [],
};
