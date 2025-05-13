// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#A78BFA",   // lavender
        accent:  "#F472B6",   // pink
      },
      backdropBlur: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(167,139,250,0.7)",   // glow
      },
    },
  },
  plugins: [],
};
