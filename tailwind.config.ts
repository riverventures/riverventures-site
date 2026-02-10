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