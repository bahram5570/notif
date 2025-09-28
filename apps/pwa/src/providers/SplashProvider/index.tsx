'use client';

import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { initialSplashStatusHandler, storeSplashHandler } from './utils';

import { PORTAL_SPLASH_ID } from '@constants/app.constants';
import useIsRendered from '@hooks/useIsRendered';

import SplashContents from './SplashContents';
import { SplashStatusTypes, SplashTypes } from './types';

export const SplashContext = createContext<SplashTypes>({
  splashCompleteHandler: () => {},
});

const SplashProvider = ({ children }: { children: React.ReactNode }) => {
  const { isRendered } = useIsRendered();
  const [splashStatus, setSplashStatus] = useState<SplashStatusTypes>(initialSplashStatusHandler());

  const splashStatushHandler = (v: SplashStatusTypes) => {
    setSplashStatus(v);

    if (v === 'completing') {
      storeSplashHandler();
    }
  };

  const splashCompleteHandler = () => {
    if (splashStatus === 'finish') {
      return;
    }

    splashStatushHandler('completing');
  };

  return (
    <SplashContext.Provider value={{ splashCompleteHandler }}>
      <>
        {isRendered &&
          createPortal(
            <>
              {splashStatus !== 'finish' && (
                <SplashContents splashStatus={splashStatus} splashStatushHandler={splashStatushHandler} />
              )}
            </>,
            document.getElementById(PORTAL_SPLASH_ID) as Element,
          )}

        <>{children}</>
      </>
    </SplashContext.Provider>
  );
};

export default SplashProvider;
