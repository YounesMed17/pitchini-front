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
        grey1: "#c4c4c4",
        silver: "rgba(196, 196, 196, 0)",
        blue: "#2f80ed",
        darkgray: "#a09d9d",
        "actionable-item": "#18a0fb",
      },
      spacing: {},
      fontFamily: {
        "titre-grey": "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        sm: "14px",
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
      "base-4": "16.4px",
      "9xl": "28px",
      "18xl": "37px",
      base: "16px",
      "44xl": "63px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
