'use client';

import { createContext } from 'react';

import LoadingProgressBar from './LoadingProgressBar';
import usePageNavigationLoading from './__hooks__/usePageNavigationLoading';
import usePageNavigationRouteSequence from './__hooks__/usePageNavigationRouteSequence';
import { PageNavigationContextTypes } from './types';

export const PageNavigationContext = createContext<PageNavigationContextTypes>({
  sequenceHandler: () => {},
  pageNavigationLoading: false,
  pageNavigationHandler: () => {},
});

export const PageNavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const { sequenceHandler } = usePageNavigationRouteSequence();
  const { pageNavigationLoading, pageNavigationHandler, progressBarLoading } = usePageNavigationLoading();

  return (
    <PageNavigationContext.Provider value={{ sequenceHandler, pageNavigationLoading, pageNavigationHandler }}>
      <>
        {progressBarLoading && <LoadingProgressBar />}
        <>{children}</>
      </>
    </PageNavigationContext.Provider>
  );
};
