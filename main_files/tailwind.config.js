/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#EEF0FC",
          100: "#D8DEF8",
          200: "#B0BDF2",
          300: "#8DA0EC",
          400: "#6680E5",
          500: "#3F5EDF",
          600: "#2142C5",
          700: "#193295",
          800: "#102060",
          900: "#081030",
          950: "#04091A",
        },
        default: {
          50: "#EFF0F6",
          100: "#E2E4EE",
          200: "#C5C9DD",
          300: "#A4ABCB",
          400: "#8790BA",
          500: "#6A75A9",
          600: "#505A8B",
          // 600: "#4f5a95",
          700: "#3C4367",
          800: "#292E47",
          900: "#151724",
          950: "#090A10",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        fixed: "0.9s ease 0s normal both 1 running fixed",
        heart: "0.5s alternate forwards heart",
        rotate: "2.3s infinite linear rotate",
      },
      keyframes: {
        fixed: {
          "0%": { top: "-100%" },
          "100%": { top: "0" },
        },
        heart: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.3, 1.3)" },
        },
        rotate: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      backgroundImage: {
        instagram:
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
