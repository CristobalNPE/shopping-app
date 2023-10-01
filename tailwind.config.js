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
            foreground: "#1c1d1c",
            focus:"#31938E",
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
              DEFAULT: "#069ED1",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#0BA85C",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#FCAE07",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#D32C3F",
            },

            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#1c1d1c", // or DEFAULT
            foreground: "#ECEDEE",
            focus:"#31938E",
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
              DEFAULT: "#069ED1",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#0BA85C",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#FCAE07",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#D32C3F",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
