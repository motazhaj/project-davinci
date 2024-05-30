/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "720px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "#65a30d",
      },
    },
  },
  plugins: [],
};
