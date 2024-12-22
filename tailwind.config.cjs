/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        olive: {
          600: "#556B2F", // Olive Green
          700: "#455A1E", // Darker Olive Green for hover
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
