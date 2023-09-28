// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            default: {
              foreground: "#FFFFFF",
              DEFAULT: "#020616",
            },
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#31938E",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#046FD3",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#13BF5A",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#FFB807",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#E03367",
            },

            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE",
            default: {
              foreground: "#FFFFFF",
              DEFAULT: "#040912",
            },
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#2E4870",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#30B1C1",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#59B44E",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#D6A936",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#BB465B",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
