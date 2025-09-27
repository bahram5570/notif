import { useContext } from 'react';

import { SplashContext } from '@providers/SplashProvider';

const useSplash = () => {
  return useContext(SplashContext);
};

export default useSplash;
