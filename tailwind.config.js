/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // Add Manrope font
        verdana: ["Verdana", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.125em",
      },
    },
  },
  plugins: [],
};
