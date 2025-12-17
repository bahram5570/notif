'use client';

import { useEffect, useState } from 'react';

import { DarkModesTypes, darkThemeHandler } from '@utils/system';

const D = () => {
  const [mode, setMode] = useState<DarkModesTypes>('light');

  useEffect(() => {
    const initialValue = (localStorage.getItem('theme') || 'light') as DarkModesTypes;
    setMode(initialValue);
  }, []);

  return (
    <div>
      <select
        className="bg-impo_Red_300"
        value={mode}
        onChange={(e) => {
          const v = e.target.value as DarkModesTypes;
          darkThemeHandler(v);
          setMode(v);
        }}
      >
        <option value={'light'}>Light</option>
        <option value={'dark'}>Dark</option>
        <option value={'system'}>System</option>
      </select>
    </div>
  );
};

export default D;
