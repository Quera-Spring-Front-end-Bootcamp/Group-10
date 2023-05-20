/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#208D8E",
        warning: "#FF9800",
        error: "#FF5722",
        success: "#4CAF50",
        gray: "#AAAAAA",
      },
      width:{
        '469': '469px'
      },
      borderRadius:{
        card : '20px'
      },
      minWidth:{
        card402 : '402px'
      },
      maxWidth:{
        card517: '517px'
      }
    },
  },
  plugins: [],
};
