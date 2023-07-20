/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{js,jsx,ts,tsx}','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '1024px',
      desktop: '1025px',
      mobile: '768px'
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'timber-green': '#142f26',
      'instagram': '#8a3ab9',
      'facebook': '#3b5998',
      'twitter': '#00acee',
      'transparent': '#00000000'
    },
    extend: {},
  },
  plugins: [],
}

