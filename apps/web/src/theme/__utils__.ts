import { ThemeTypes } from './types';

export const themeHandler = (mode: ThemeTypes) => {
  localStorage.setItem('theme', mode);

  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (mode === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const getTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  const mode = (storedTheme ? storedTheme : 'system') as ThemeTypes;
  return mode;
};
