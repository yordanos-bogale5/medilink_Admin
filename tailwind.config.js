/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,ts,css,spec}"],
  theme: {
    extend: {
      screens: {
        // xs: "480px", // Extra small devices
        mob: "680px", // Small devices
        tab: "780px", // Medium devices
        pc: "980px", // Large devices
        desk: "1240px", // Extra large devices
        "2xl": "1536px", // 2X large devices
      },
    },
  },
  plugins: [],
};
