import { SPLASH_FINISHED } from '@constants/storage.constants';

import { SplashStatusTypes } from './types';

export const initialSplashStatusHandler = () => {
  const splashStorage = sessionStorage.getItem(SPLASH_FINISHED);
  const initialSplashStatus: SplashStatusTypes = splashStorage === null ? 'pending' : 'finish';
  return initialSplashStatus;
};

export const storeSplashHandler = () => {
  sessionStorage.setItem(SPLASH_FINISHED, 'true');
};
