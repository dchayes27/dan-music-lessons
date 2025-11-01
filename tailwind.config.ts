import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#5f8375',      // Primary teal
        mauve: '#8b6f88',     // Secondary purple
        slate: '#59738c',     // Dark grey-blue
        mist: '#b0b3c1',      // Light grey-blue
        honey: '#e9c46a',     // Yellow accent
        deep: '#264653',      // Deep teal (text)
      },
    },
  },
  plugins: [],
};
export default config;
