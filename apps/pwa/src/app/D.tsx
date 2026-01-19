'use client';

import { useEffect, useState } from 'react';

import { getTheme, themeHandler } from '@repo/core/theme/__utils__';

import { ThemeTypes } from '@repo/core/theme/types';

const initialTheme: ThemeTypes = 'system';

const D = () => {
  const [themeMode, setThemeMode] = useState<ThemeTypes>(initialTheme);

  useEffect(() => {
    const initialTheme = getTheme();
    setThemeMode(initialTheme);
  }, []);

  const selectHanadler = (v: ThemeTypes) => {
    themeHandler(v);
    setThemeMode(v);
  };

  return (
    <>
      <div className="fixed top-0 left-0 p-5 z-[100] bg-green-300 ">
        <select value={themeMode} onChange={(e) => selectHanadler(e.target.value as ThemeTypes)}>
          <option value="system">system</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </div>
    </>
  );
};

export default D;
