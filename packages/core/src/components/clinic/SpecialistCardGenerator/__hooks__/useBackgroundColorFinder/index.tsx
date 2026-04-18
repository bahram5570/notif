import { useMemo } from 'react';

import { useSystem } from '../../../../../hooks/useSystem';

const useBackgroundColorFinder = () => {
  const { appName } = useSystem();

  const backgroundColor = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'bg-gradient-to-t from-[#233157] via-[#405387] to-[#415488]';

      default:
        return 'bg-impo_Blue_100 dark:!bg-impo_Blue_800';
    }
  }, [appName]);

  return { backgroundColor };
};

export default useBackgroundColorFinder;
