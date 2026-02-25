/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Enable class-based dark mode
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0d0df2",
        "background-dark": "#0f172a",
        "surface-dark": "#1e293b",
        "accent-cyan": "#00f0ff",
        "accent-purple": "#bc13fe",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
