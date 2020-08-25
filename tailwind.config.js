module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      main: ["Roboto", "sans-serif"],
      secondary: ["Open Sans", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        mainRed: "#F26C4F",
        highlightRed: "#FE2C00",
        mainGrey: "#A4A1A1",
        shadowGrey: "#00000029",
        secondaryGrey: "#E8E8E8",
        highlightGrey: "#D1D1D1",
        backgroundWhite: "#FAFAFA",
      },
      percentage: {
        "1/10": "10%",
      },
      spacing: {
        "14": "3.5rem",
        '18':'4.5rem',
        "22": "5.5rem",
        '26':'107px',
        "28": "7rem",
        "36": "9rem",
        "60": "15rem",
        "70": "17rem",
        "72": "18rem",
        "73": "19rem",
        "74": "20rem",
        "84": "21rem",
        "96": "24rem",
        "100": "28rem",
        "102": "30rem",
        "103": "31rem",
        "104": "32rem",
      },
    },
  },
  variants: {},
  plugins: ["tailwind-percentage-heights-plugin"],
};
