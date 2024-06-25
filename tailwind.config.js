/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      bsmmd: "600px",
      bsmmdTwo: "500px",
      md: "700px",
      lg: "1024px",
      blgxl: "1224px",
      xl: "1440px",
      xxl: "1600px",
    },
    extend: {
      fontFamily: {
        Anton: ['Anton', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        darkBlue: "#050752",
        midBlue: "#4eaee5",
        lightBlue: "#78e0f4",
        // bgColor: "#242424",
        bgColor: "#121212",
        btnColor: "#1f1f1f",
        otherColor: "#ffd700",
        primaryTextColor: "#ffffff",
        secondaryTextColor: "#8d8d8d",
        blackOpacity: "#000000e0"
      },
      aspectRatio: {
        "9/13": "9/13",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        md: "0.9rem",
        xl: "1.25rem",
        "2xl": "1.4rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "4rem",
        "7xl": "6rem",
        "8xl": "8rem",
        "9xl": "11rem",
      },
    },
  },
  plugins: [],
};
