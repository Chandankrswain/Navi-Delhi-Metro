import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  DarkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      marquee: "marquee 20s linear infinite",
      marquee2: "marquee2 20s linear infinite",
      count: "count 2s ease-out forwards",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      count: {
        from: { content: "0" },
        to: { content: "var(--final-count)" },
      },
    },
  },
  plugins: [plugin],
};
