'use client';

import { createContext } from 'react';

import LoadingProgressBar from './LoadingProgressBar';
import useChangeRouteDetect from './__hooks__/useChangeRouteDetect';
import useChangeRouteLoading from './__hooks__/useChangeRouteLoading';
import { PageNavigationLoadingContextTypes } from './types';

export const PageNavigationLoadingContext = createContext<PageNavigationLoadingContextTypes>({
  pageNavigationHandler: () => {},
});

const PageNavigationLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const changeRouteLoading = useChangeRouteLoading();

  const pageNavigationHandler = (b: boolean) => {
    if (changeRouteLoading) {
      changeRouteLoading.navigationHandler(b);
    }
  };

  useChangeRouteDetect(pageNavigationHandler);

  return (
    <PageNavigationLoadingContext.Provider value={{ pageNavigationHandler }}>
      <>
        {changeRouteLoading?.isLoading && <LoadingProgressBar />}
        <>{children}</>
      </>
    </PageNavigationLoadingContext.Provider>
  );
};

export default PageNavigationLoadingProvider;
