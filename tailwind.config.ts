import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        'body': ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#0A0A0A',
        secondary: '#1A1A1A',
        accent: '#2A2A2A',
        text: '#FFFFFF',
        'text-muted': '#B0B0B0',
        'text-secondary': '#808080',
        border: '#333333',
        river: '#1a3a5c',
        'river-light': '#2a5a8c',
        'river-dark': '#0f2440',
      },
      keyframes: {
        'flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'flow-slow': {
          '0%': { transform: 'translateX(-50%) scaleX(1.5)' },
          '100%': { transform: 'translateX(50%) scaleX(1.5)' },
        },
      },
      animation: {
        'flow': 'flow 8s ease-in-out infinite',
        'flow-slow': 'flow-slow 12s ease-in-out infinite alternate',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;