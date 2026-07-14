import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pilot: {
          50: "#eef8ff",
          100: "#d8efff",
          500: "#2f8cff",
          700: "#175bd7",
          950: "#071833"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(47, 140, 255, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
