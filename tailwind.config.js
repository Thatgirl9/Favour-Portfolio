/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primaryBrand500: '#8A42DB',
        // primaryBrand400: '#8A42DB',
        gradientPurple: '#9955E8',
        secondaryBrand: '#7DFFAF',
        gradientGreen: "#7BFFAF",
        shadowGreen: "rgba(125, 255, 175, 0.24)",

        // Surface Colors
        surfaceBackground: '#171023',
        surfacePrimary: '#2C243B',
        surfaceSecondary: '#413A4F',
        surfaceTertiary: '#4E4563',

        // Text Colors
        textPrimary: '#F5F6F6',
        textSecondary: '#CDD0D4',
      },

      // Typography
      fontFamily: {
        sectionTypo: "Heebo, sans-serif",
        textTypo: "Kalam, cursive",

      }
    },
  },
  plugins: [],
}

