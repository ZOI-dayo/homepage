/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#0A101A",
      primary: "#213555",
      secondary: "#3E5879",
      accent: "#C35E50",
      "text-primary": "#F5EFE7",
      "text-secondary": "#D8C4B6",
      white: "#FFFFFF",
    },
    fontFamily: {
      primary: ["Open Sans", "Noto Sans JP", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};
