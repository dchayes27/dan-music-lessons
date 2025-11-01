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
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.3' },
        },
        'vibrate': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '75%': { transform: 'translateX(1px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'vibrate': 'vibrate 0.3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
