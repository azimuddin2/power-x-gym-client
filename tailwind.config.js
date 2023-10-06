/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
    fontFamily: {
      sans: [ 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Oswald'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
})