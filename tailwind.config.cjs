/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svelte}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1F2A48',
        'secondary': '#0079FE',
        'body': '#141C2F'
      },
      textColor: {
        'primary': '#0079FE',
      }
    },
  },
  plugins: [],
}