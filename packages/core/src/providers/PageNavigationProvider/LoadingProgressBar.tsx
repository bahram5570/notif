import { useMemo } from 'react';

import { useSystem } from '../../hooks/useSystem';

export const LoadingProgressBar = () => {
  const { appName } = useSystem();

  const bg = useMemo(() => {
    switch (appName) {
      case 'PWA':
        return 'bg-impo_Primary_Primary';

      case 'WEB':
        return 'bg-impo_Primary_Primary';

      case 'MEN_PWA':
        return 'bg-impo_PrimaryMan_PrimaryMan';

      default:
        return 'bg-impo_Primary_Primary';
    }
  }, [appName]);

  return <div className={`w-full h-[4px] mt-1 rounded-full animate-pageNavigation ${bg}`} />;
};
