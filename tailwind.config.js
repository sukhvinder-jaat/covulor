/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        small: "430px",
        desktop: "1430px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xsm: "11px",
        xs: "12px",
        sm: "14px",
        md: "15px",
        base: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "36px",
      },
      colors: {
        purple: "#8220FF",
        comet: "#5D5B73",
        mountainMist: "#92929D",
        lightGreen: "#05CB0C",
        gunSmoke: "#7E838F",
        riverBed: "#464E5F",
        darkBrown: "#403A3A",
        darkGray: "#606060",
        dimGray: "#6D6C6B",
        ghostWhite: "#F5F7FB",
        gainsBor: "#E2E2E2",
        lightBlack: "#191919",
        lightBlue: "#605BFF",
        pastelGrey: "#CFCBCB",
        lightGray: "#878787",
        dusk: "#555175",
        pinkSwan: "#B5B8BF",
        greeny: "#4AB58E",
        gamboge: "#EE9D01",
        darkSlateGray: "#2E2C34",
        lightDarkSlateGray: "#646464",
        lawnGreen: "#FF993A",
        lightGainsBor: "#E6E6E6",
        midnightBlue: "#0C063A",
        iron: "#D6D6D6",
      },
    },
  },
  plugins: [],
};
