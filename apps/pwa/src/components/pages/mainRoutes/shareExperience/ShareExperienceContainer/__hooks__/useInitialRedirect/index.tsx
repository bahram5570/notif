import { useEffect, useRef } from 'react';

import {
  SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE,
  SHARE_EXPERIENCE_VIEW_REPORT_PROFILE_ID,
} from '@repo/core/components/ShareExperience';
import { isDevelopeMode } from '@repo/core/utils/system';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import useInitialLoading from './useInitialLoading';
import useViewReportProfile from './useViewReportProfile';

const useInitialRedirect = (isLoaded: boolean) => {
  const router = useCustomRouter();
  const isFirstTime = useRef(isDevelopeMode());
  const { increaseZIndex } = useShareExperienceHandlers();
  const { profileIdHandler } = useViewReportProfile(isLoaded);
  const { initialLoading, initialLoadingHandler } = useInitialLoading();

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;
    const queriesList = Array.from(params);

    // # Handles initial loading on having some modals open to prevent showing the main contents
    if (queriesList.length > 0) {
      initialLoadingHandler();
    }

    // # Handles "view reported profile from panel" task
    const viewReportQuery = queriesList.find((item) => item[0] === SHARE_EXPERIENCE_VIEW_REPORT_PROFILE_ID && item[1]);

    if (viewReportQuery) {
      profileIdHandler(viewReportQuery[1]);
      return;
    }

    // # Navigates to desired comment, reply, etc. that is strored in 'sessionStorage' set by actions
    const redirectStorage =
      typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);

    if (redirectStorage) {
      const [key, value] = redirectStorage.split('=');

      params.append(key, value);
      router.replace(`${pathname}?${params.toString()}`);

      increaseZIndex(key, value);
      sessionStorage.removeItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
    }
  }, []);

  return { initialLoading };
};

export default useInitialRedirect;
