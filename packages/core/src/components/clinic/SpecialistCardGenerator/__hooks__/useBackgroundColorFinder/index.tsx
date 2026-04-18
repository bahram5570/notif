import { useState } from 'react';

import { useSystem } from '../../../../../hooks/useSystem';

const useBackgroundColorFinder = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const { appName } = useSystem();
  switch (appName) {
    case 'MEN_PWA':
      setBackgroundColor('bg-gradient-to-t from-[#233157] via-[#405387] to-[#415488]');
      break;

    default:
      'bg-impo_Blue_100 dark:!bg-impo_Blue_800';
      break;
  }

  return { backgroundColor };
};

export default useBackgroundColorFinder;
