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
        mainActivationModule: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        cycleUpdatingScript: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
        signsChangedToast: {
          '0%': { top: '-300px' },
          '20%': { top: '0' },
          '90%': { top: '0' },
          '100%': { top: '-300px' },
        },
        welcoming: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        ratingDescriptionOpen: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        ratingDescriptionClose: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        ratingDescriptionFadeOpen: {
          '0%': { backgroundColor: '#00000000' },
          '100%': { backgroundColor: '#00000044' },
        },
        ratingDescriptionFadeClose: {
          '0%': { backgroundColor: '#00000044' },
          '100%': { backgroundColor: '#00000000' },
        },
        skeleton: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.2' },
          '100%': { opacity: '1' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        otpError: 'otpError 0.5s linear infinite alternate',
        otpSuccess: 'otpSuccess 0.5s linear infinite alternate',
        mainActivationModule: 'mainActivationModule 1s linear',
        cycleUpdatingScript: 'cycleUpdatingScript 0.5s linear infinite alternate',
        SignsChangedToast: 'SignsChangedToast 10s linear forwards',
        welcoming: 'welcoming 6s linear forwards',
        signsChangedToast: 'signsChangedToast 10s linear forwards',
        skeleton: 'skeleton 1.5s linear infinite',
        scrollLeft: 'scrollLeft 20s linear infinite',
        scrollRight: 'scrollRight 20s linear infinite',
        'fade-in': 'fade-in 0.9s ease forwards',
      },
    },
  },
};

export default config;
