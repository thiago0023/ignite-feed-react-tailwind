module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "700": "#121214",
          "600": "#202024",
          "500": "#323238",
          "400": "#7C7C8A",
          "300": "#8D8D99",
          "200": "#C4C4CC",
          "100": "#E1E1E6",
        },
        primary: {
          "base": "#00875F",
          "light": "#00B37E",
        },
        danger: {
          "base": "#F75A68",
        }
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      gridTemplateColumns: {
        'main': '256px 1fr',
      }
    },
  },
  plugins: [],
}