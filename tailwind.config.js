/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1B5F47",
        dark: "#0f172a",
        secondary: "#64748b",
        tri: "#EAFDFC",
        four: "#F0FCFF",
        igor: "#f4b4cc",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
