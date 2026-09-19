/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biglia: {
          900: "#0A2A5E",
          700: "#0F52BA",
          500: "#1E6BFF",
          50: "#F6F8FF"
        }
      }
    },
  },
  plugins: [],
}
