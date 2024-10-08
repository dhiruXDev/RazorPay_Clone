 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
          base: "510px",
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      }, screens: {
        "small":"275px",
        "base" : "510px",
 
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        blueviolet900: '#181C2E'
      },},
  },
  plugins: [],
}