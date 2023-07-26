/** @type {import('tailwindcss').Config}*/
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1025px",
      mobile: "0px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      "timber-green": "#142f26",
      instagram: "#8a3ab9",
      facebook: "#3b5998",
      twitter: "#00acee",
      transparent: "#00000000",
      "gray-nurse": "#f6f7f6",
      "dark-gray": "#686363",
      red: "#FF0000",
    },
    extend: {},
  },
  plugins: [],
};
