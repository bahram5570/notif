import preset from '@repo/core/theme.tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      keyframes: {
        pageNavigation: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        pageNavigation: 'pageNavigation 5s linear forwards',
        fadeSlideIn: 'fadeSlideIn 0.4s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
    boxShadow: {
      impo_Shadow_White: '0 0 16px 0 #6c23371f',
      impo_Shadow_Black: '0 0 16px 0 #777777',
    },
  },
};
export default config;
