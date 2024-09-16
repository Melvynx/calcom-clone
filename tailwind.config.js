/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#1F1F1F",
        background: "#101010",
        "muted-foreground": "#A6A6A6",
        foreground: "#ffffff",
        accent: "#404040",
      },
    },
  },
  plugins: [],
};
