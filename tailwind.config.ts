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
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia'],
      },
      colors: {
        orange: {
          100: '#ffedd5',
          200: '#fed7aa',
          800: '#9a3412',
          900: '#7c2d12',
        },
        pink: {
          50: '#fdf2f8',
          200: '#fbcfe8',
          300: '#f9a8d4',
          600: '#db2777',
          800: '#9f1239',
        },
        rose: {
          500: '#f43f5e',
        },
      },
    },
  },
  plugins: [],
};

export default config;