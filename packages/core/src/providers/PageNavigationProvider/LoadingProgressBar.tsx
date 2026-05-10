import { useMemo } from 'react';

import { useSystem } from '../../hooks/useSystem';

const LoadingProgressBar = () => {
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

  return (
    <div className="fixed top-1 left-0 right-0 mx-auto overflow-hidden z-[80]">
      <div className={`w-full h-[4px] rounded-full animate-pageNavigation ${bg}`} />
    </div>
  );
};

export default LoadingProgressBar;
