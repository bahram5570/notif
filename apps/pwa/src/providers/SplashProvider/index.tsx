'use client';

import { createContext, useState } from 'react';

import { initialSplashStatusHandler, storeSplashHandler } from './utils';

import SplashContents from './SplashContents';
import { SplashStatusTypes, SplashTypes } from './types';

export const SplashContext = createContext<SplashTypes>({
  splashCompleteHandler: () => {},
});

const SplashProvider = ({ children }: { children: React.ReactNode }) => {
  const [splashStatus, setSplashStatus] = useState<SplashStatusTypes>(initialSplashStatusHandler());

  const splashCompleteHandler = () => {
    setSplashStatus('completing');
    storeSplashHandler();
  };

  const splashFinishHandler = () => {
    setSplashStatus('finish');
  };

  return (
    <SplashContext.Provider value={{ splashCompleteHandler }}>
      {splashStatus !== 'finish' && <SplashContents splashStatus={splashStatus} onComplete={splashFinishHandler} />}
      <>{children}</>
    </SplashContext.Provider>
  );
};

export default SplashProvider;
