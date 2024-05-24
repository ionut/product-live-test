/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-pink": "#fc9d13",
        "olive-drab": "#71a100",
        "dark-olive-green": "#436100",
        "untitled-ui-gray600": "#475467",
        "untitled-ui-gray900": "#101828",
        "untitled-ui-warning300": "#fec84b",
        "untitled-ui-gray50": "#f9fafb",
        "untitled-ui-gray200": "#fc9d13",
        "untitled-ui-gray500": "#667085",
        "untitled-ui-white": "#fff",
        "medium-violet-red": "#900047",
        "untitled-ui-gray400": "#98a2b3",
        "untitled-ui-gray700": "#344054",
        red: "#ff0004",
        peru: "#db7800",
        "deep-orange": "#ee7804",
      },
      backgroundImage: {
        mainSection:
          "url(/mark-img.svg), linear-gradient(rgba(252, 157, 19, .66), rgba(252, 157, 19, .66)), url(/lightning_1.webp)",
        womenSectionTransparent:
          "linear-gradient(rgba(255, 255, 255, .92), rgba(255, 255, 255, .92)), url(/woman-transparent_1.webp)",
        womenSection: "url(/woman-transparent_1.webp)",
        grass:
          "linear-gradient(rgba(59, 170, 46, .79), rgba(59, 170, 46, .79)), url(/grass.webp)",
        moodbooster:
          "url(/mark-img.svg), linear-gradient(rgba(252, 157, 19, .82), rgba(252, 157, 19, .82)), url(/product-bg_1.webp)",
        leaf: "linear-gradient(rgba(250, 250, 250, .57), rgba(250, 250, 250, .57)), url(/leaf.svg)",
        doctor:
          "url(/doctor.webp), url(/leaves-2.svg), linear-gradient(#3baa2e, #3baa2e)",
        packsPage:
          "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(/Your-paragraph-text-1_1Your paragraph text.webp);",
        checkoutPage:
          "url(/leaves_1.webp), url(/mark-img.svg), linear-gradient(#fc9d13, #fc9d13);",
      },
      textShadow: {
        xs: "-4px 1px #ee7804",
        sm: "-4px 3px #ee7804",
        md: "-7px 4px #ee7804",
        lg: "-13px 13px 1px #ee7804",
        xl: " -6px 5px 1px #f70404",
        number: "-5px 4px 1px rgba(230, 230, 230, 0.69)",
      },
      boxShadow: {
        mainImg: "-5px 5px #ee7804",
        green: "-3px 5px rgba(30, 95, 23, .79)",
        cards: "0 10px orange",
        numbers: "0 7px 5px rgba(0, 0, 0, .2)",
        hover: "0 8px 12px rgba(0, 0, 0, .2)",
        rating: "0 5px 0 5px #f78404",
        checkout: "0 2px 5px rgba(0, 0, 0, .2)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 15px",
          margin: "0 auto",
          "@screen md": {
            maxWidth: "728px",
          },
          "@screen lg": {
            maxWidth: "940px",
            padding: "0",
          },
        },
      });
    },
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
