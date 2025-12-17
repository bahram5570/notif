export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};

// # Dark mode

export type DarkModesTypes = 'dark' | 'light' | 'system';

export const darkThemeHandler = async (mode: DarkModesTypes) => {
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
