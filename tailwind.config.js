// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#22D3EE",
        accent: "#F472B6",
      },
      backdropBlur: {
        xs: "2px",
        sm: "6px",
        DEFAULT: "12px",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
