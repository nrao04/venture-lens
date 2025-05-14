/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        accent: "#f43f5e",
        bgGlass: "rgba(255,255,255,0.7)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31,38,135,0.37)",
      },
      backdropBlur: {
        sm: "4px",
      },
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
