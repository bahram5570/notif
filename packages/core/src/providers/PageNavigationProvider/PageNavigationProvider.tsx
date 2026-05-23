'use client';

import { createContext } from 'react';

import LoadingLogo from './LoadingLogo';
import LoadingProgressBar from './LoadingProgressBar';
import usePageNavigationLoading from './__hooks__/usePageNavigationLoading';
import usePageNavigationRouteSequence from './__hooks__/usePageNavigationRouteSequence';
import { PageNavigationContextTypes } from './types';

export const PageNavigationContext = createContext<PageNavigationContextTypes>({
  sequenceHandler: () => {},
  navigationLoadingId: false,
  pageNavigationHandler: () => {},
});

export const PageNavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const { sequenceHandler } = usePageNavigationRouteSequence();
  const { navigationLoadingId, pageNavigationHandler, pageLoading } = usePageNavigationLoading();

  return (
    <PageNavigationContext.Provider value={{ sequenceHandler, navigationLoadingId, pageNavigationHandler }}>
      <>
        {pageLoading === 'progressBar' && <LoadingProgressBar />}
        {pageLoading === 'logo' && <LoadingLogo />}
        <>{children}</>
      </>
    </PageNavigationContext.Provider>
  );
};
