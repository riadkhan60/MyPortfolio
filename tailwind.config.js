/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subtitleColor: "#987750",
        themeWhite: "#DDDDDD",
        themeDarkshade: "#888888",
        borderColor: "#ffffff33",
        borderHover: "#44993b",
      },

      backgroundColor: {
        backgroundColorMain: "#1D1B19",
        backgroundColorSecondary: "#181715",
      },
    },
  },
  plugins: [],
};
