module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        active: "#282828",
        primary: "#1ed760",
        link: "#b3b3b3",
        footer: "#181818"
      },
      fontSize: {
        s: "0.813rem"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}