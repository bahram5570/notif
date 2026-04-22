import { useMemo } from 'react';

import { useSystem } from '../../../../../hooks/useSystem';
import { ThemeType } from './type';

const useCardThemeFinder = () => {
  const { appName } = useSystem();

  const theme: ThemeType = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          strokeColor: 'stroke-[#C8ECFF]',
          TitleColor: 'text-[#C8ECFF]',
          valueColor: 'text-impo_White',
        };

      default:
        return {
          strokeColor: 'stroke-impo_Black',
          TitleColor: 'text-impo_Black',
          valueColor: 'text-impo_Black',
        };
    }
  }, [appName]);

  return { theme };
};

export default useCardThemeFinder;
