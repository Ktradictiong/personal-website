import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fbf7ea",
        ink: "#101010",
        marker: "#ffd873",
        mint: "#c5efe4",
        coral: "#ff7e73",
        rosepaper: "#fff1f1"
      },
      boxShadow: {
        sketch: "8px 8px 0 #101010",
        "sketch-sm": "4px 4px 0 #101010",
        "sketch-lg": "12px 12px 0 #101010"
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)", "Noto Sans SC", "system-ui", "sans-serif"],
        hand: ["var(--font-mali)", "Mali", "Comic Sans MS", "cursive"],
        scribble: ["var(--font-architects)", "Architects Daughter", "Comic Sans MS", "cursive"],
        cnhand: ["var(--font-long-cang)", "var(--font-zhi-mang)", "KaiTi", "STKaiti", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
