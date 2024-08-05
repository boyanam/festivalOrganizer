/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "festival": {
          "50": "#f9e7ed",
          "100": "#f3cedb",
          "200": "#e79db6",
          "300": "#dc6c92",
          "400": "#d03b6d",
          "500": "#c40a49",
          "600": "#9d083a",
          "700": "#76062c",
          "800": "#4e041d",
          "900": "#27020f"
        }
      }
    },
  },
  plugins: [],
}

