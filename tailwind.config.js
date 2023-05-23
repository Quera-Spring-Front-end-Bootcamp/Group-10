/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#208D8E",
        secondary: "#54BEE8",
        warning: "#FF9800",
        error: "#FF5722",
        success: "#4CAF50",
        gray: "#AAAAAA",
        "gray-light": "#FAFBFC",
        "gray-dark": "#323232",
      },
    },
  },
  plugins: [],
};
