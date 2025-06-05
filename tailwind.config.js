/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_text: "#222",
        primary_text_hover: "#f4f4f4",
        secondary_text: "#fff",
        secondary_text_hover: "#222",
        primary_bg: "#D56602",
        secondary_bg: "#818062",
        border_primary: "#ccc"
      },
    },
  },
  plugins: [],
}