/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backcolor: '#D8D8D8',
        notifigreen: '#00D954',
        oceanblue: '#5A5773',
        bloodred: '#FF0000',
      }
    },
  },
  plugins: [],
}
