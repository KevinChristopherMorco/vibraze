/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        "roboto-flex": ['"Roboto Flex"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "slide-left-infinite": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 0.7s ease-in-out",
        "slide-right": "slide-right 0.7s ease-in-out",
        "slide-left-infinite": "slide-left-infinite 12s linear infinite",
      },
    },
  },
  plugins: [],
};
