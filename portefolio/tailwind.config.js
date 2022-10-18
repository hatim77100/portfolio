/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oppenSans: ['Open Sans', "sans-serif"],
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '60px 300px',
      },
    },
  },
  plugins: [],
}
