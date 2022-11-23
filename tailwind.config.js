/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oppenSans: ['Open Sans', "sans-serif"],
        Alkalami: ['Alkalami', 'serif'],
        smokum: ['Smokum', 'cursive', "sans-serif"],
        courgette: ['Courgette', 'cursive', "sans-serif"],
        josefin: ['Josefin Sans', 'sans-serif'],
        
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '60px 300px',
      },
    },
  },
  plugins: [],
}
