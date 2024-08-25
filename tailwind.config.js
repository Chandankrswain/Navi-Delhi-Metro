/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  DarkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
    },
  },
  plugins: [],
};
