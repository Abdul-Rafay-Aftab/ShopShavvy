module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { 400: "#fdc221" },
        gray: { 800: "#404040" },
        light_blue: { 50: "#d4efff" },
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_3f": "#0000003f",
          "900_14": "#00000014",
        },
        blue: { 50: "#ebf7ff", 400: "#50a0db" },
        red: { 100: "#ffded4", "100_4c": "#ffded44c" },
        orange: { 50: "#ffedd4" },
        blue_gray: {
          900: "#331b3b",
          "900_a8": "#331b3ba8",
          "900_01": "#343434",
        },
        yellow: { 700: "#fdc021" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        hindvadodara: "Hind Vadodara",
        calibri: "Calibri",
        playfairdisplay: "Playfair Display",
        roboto: "Roboto",
      },
      boxShadow: {
        bs: "0px 0px  9px 2px #0000000c",
        bs2: "0px 1px  4px 0px #0000003f",
        bs1: "0px 0px  7px 1px #00000014",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
