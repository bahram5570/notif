import { THEME_STORAGE_NAME } from '../constants/storage.constants';
import { ThemeTypes } from './types';

export const themeHandler = (mode: ThemeTypes) => {
  localStorage.setItem(THEME_STORAGE_NAME, mode);

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
  const storedTheme = localStorage.getItem(THEME_STORAGE_NAME);
  const mode = (storedTheme ? storedTheme : 'system') as ThemeTypes;
  return mode;
};
