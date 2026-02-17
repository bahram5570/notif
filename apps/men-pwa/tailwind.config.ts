import preset from '@repo/core/theme.tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        otpError: {
          '0%': { borderColor: '', color: '#E11900' },
          '100%': { borderColor: '#E11900', color: '#E11900' },
        },
        otpSuccess: {
          '0%': { borderColor: '', color: '#34B288' },
          '100%': { borderColor: '#34B288', color: '#34B288' },
        },
      },
      animation: {
        otpError: 'otpError 0.5s linear infinite alternate',
        otpSuccess: 'otpSuccess 0.5s linear infinite alternate',
      },
    },
  },
};

export default config;
