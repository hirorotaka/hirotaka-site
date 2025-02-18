import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkblue: '#00008b',
        cadetblue: '#5f9ea0',
        whitesmoke: '#f5f5f5',
      },
      keyframes: {
        swipe: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        swipe: 'swipe 2.0s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
