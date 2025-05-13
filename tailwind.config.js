// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#4f46e5",
        accent: "#f43f5e",
        grayText: "#1f2937",      // dark gray for body text
        cardBg: "rgba(255,255,255,0.8)"
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 38, 135, 0.1)",
        heavy: "0 12px 24px rgba(0,0,0,0.1)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "8px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};