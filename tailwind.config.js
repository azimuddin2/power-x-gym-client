/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#fcd842',
      secondary: '#171426',
      neutral: '#ffffff',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}