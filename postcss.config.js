// postcss.config.js
/** @type {import('postcss').ProcessOptions} */
module.exports = {
    plugins: {
      "@tailwindcss/postcss": {},    // ← uses the tailwindcss package’s PostCSS plugin
      autoprefixer: {},   // ← uses the autoprefixer package
    },
  };
  