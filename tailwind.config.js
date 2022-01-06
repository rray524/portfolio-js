module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script']
    },
    extend: {
      colors: {
        'regal-green': '#00f260',
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  plugins: [],
}
