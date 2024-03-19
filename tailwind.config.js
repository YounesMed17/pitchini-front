/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        grey: "#656565",
        title: "#252424",
        orange: "#ff4f4c",
        "dgrad-color": "#fe504b",
        black: "#000",
        gray: "#040404",
        whitesmoke: "#f1f1f1",
        "gray-3": "#828282",
        "actionable-item": "#18a0fb",
      },
      spacing: {},
      fontFamily: {
        "titre-grey": "Poppins",
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      "3xl": "22px",
      "13xl": "32px",
      "17xl": "36px",
      "29xl": "48px",
      "66xl": "85px",
      "6xl": "25px",
      "15xl": "34px",
      "5xl": "24px",
      xl: "20px",
      "2xl": "21px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
