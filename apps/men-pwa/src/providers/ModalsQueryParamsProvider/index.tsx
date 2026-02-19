'use client';

import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { EXCLUDE_PAGES_MODALS, MODALS } from './modalsConstants';

// # Clear all modal query params (that mentioned in 'MODALS') on initial load/refresh by backing the history
// # except the pages mentioned in 'EXCLUDE_PAGES_MODALS'
const ModalsQueryParamsProvider = () => {
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;

      const searchParams = new URLSearchParams(window.location.search);
      const queriesObject = Object.fromEntries(searchParams.entries());
      const modalsList = Object.values(MODALS);

      modalsList.forEach((query) => {
        const isQuery = queriesObject?.[query];
        const isExcludePage = EXCLUDE_PAGES_MODALS.includes(pathname);

        if (isQuery && !isExcludePage) {
          window.history.back();
        }
      });
    }
  }, []);

  return <></>;
};

export default ModalsQueryParamsProvider;
