import { useState } from 'react';

import { useSystem } from '../../../../../hooks/useSystem';
import { ThemeType } from './type';

const useCardThemeFinder = () => {
  const [theme, setTheme] = useState<ThemeType>({ strokeColor: '', TitleColor: '', valueColor: '' });
  const { appName } = useSystem();
  switch (appName) {
    case 'MEN_PWA':
      setTheme({ strokeColor: 'stroke-[#C8ECFF]', TitleColor: 'text-[#C8ECFF]', valueColor: 'text-impo_White' });

      break;

    default:
      setTheme({ strokeColor: 'stroke-impo_Black', TitleColor: 'text-impo_Black', valueColor: 'text-impo_Black' });
      break;
  }

  return { theme };
};

export default useCardThemeFinder;
