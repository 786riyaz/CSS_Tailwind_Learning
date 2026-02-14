/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '21': '6rem',
        '22': '3rem',
        '13': '13px',
        '100': '100px'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
