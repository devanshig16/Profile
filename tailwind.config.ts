import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        // Text colors
        "near-black": "#1a1a1a",
        // Section background alternation: white, warm cream, soft sage, light terracotta
        "warm-cream": "#faf8f5",
        "soft-sage": "#f5f7f4",
        "light-terracotta": "#faf6f3",
        // Blob colors for floating background elements
        "terracotta": "#d4a574",
        "sage": "#a8b89a",
        "peach": "#f4c2a1",
      },
      maxWidth: {
        "reading": "65ch", // Optimal reading width
      },
    },
  },
  plugins: [],
};
export default config;

