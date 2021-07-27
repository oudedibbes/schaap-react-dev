module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#55B748",
          DEFAULT: "#55B748",
          dark: "#55B748",
        },
        schaap: {
          DEFAULT: "#55B748",
          50: "#EEF8ED",
          100: "#DDF1DA",
          200: "#BBE2B6",
          300: "#99D491",
          400: "#77C56D",
          500: "#55B748",
          600: "#44923A",
          700: "#336E2B",
          800: "#22491D",
          900: "#11250E",
        },
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  
};
