import { useMemo } from 'react';

import { MAX_SCREEN_WIDTH } from '../../constants/app.constants';
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
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto overflow-hidden z-[80]"
    >
      <div className={`w-full h-[4px] mt-1 rounded-full animate-pageNavigation ${bg}`} />
    </div>
  );
};

export default LoadingProgressBar;
