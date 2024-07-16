/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          "0%": {},
          "100%": {}
        }
      },
      animation: {
        highlight: "highlight 1s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}

