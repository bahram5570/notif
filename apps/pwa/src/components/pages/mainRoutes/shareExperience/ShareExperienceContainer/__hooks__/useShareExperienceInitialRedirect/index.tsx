import { useEffect, useRef } from 'react';

import {
  SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE,
  SHARE_EXPERIENCE_VIEW_REPORT_PROFILE_ID,
} from '@repo/core/components/ShareExperience';
import { isDevelopeMode } from '@repo/core/utils/system';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import useViewReportProfile from './useViewReportProfile';

const useShareExperienceInitialRedirect = (isLoaded: boolean) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { increaseZIndex } = useShareExperienceOverlayIndex();
  const isFirstTime1 = useRef(isDevelopeMode());
  const { profileIdHandler } = useViewReportProfile(isLoaded);

  // const isFirstTime2 = useRef(isDevelopeMode());

  const redirectStorage =
    typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
  const queryString = searchParams
    ? Array.from(searchParams.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    : '';

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    // # Handles "view reported profile from panel" task
    let profileId = '';
    params.forEach((value, key) => {
      if (key === SHARE_EXPERIENCE_VIEW_REPORT_PROFILE_ID && value) {
        profileId = value;
      }
    });

    if (profileId) {
      profileIdHandler(profileId);
      router.replace(pathname);
      return;
    }

    // # Navigates to desired comment, reply, etc that is strored in 'sessionStorage'
    if (isFirstTime1.current) {
      params.forEach((_, key) => {
        params.delete(key);
      });

      router.replace(pathname);
      isFirstTime1.current = false;
      return;
    }

    if (redirectStorage) {
      const [key, value] = redirectStorage.split('=');

      const params = new URLSearchParams(searchParams.toString());

      params.append(key, value);

      router.replace(`${pathname}?${params.toString()}`);

      increaseZIndex(key, value);
      sessionStorage.removeItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
    }
  }, [queryString]);

  // useEffect(() => {
  //   if (isFirstTime2.current) {
  //     isFirstTime2.current = false;
  //     return;
  //   }

  //   if (!redirectStorage) {
  //     history.replaceState(null, '', '/protected/shareExperience');
  //   }

  //   return () => {
  //     sessionStorage.removeItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
  //   };
  // }, []);
};

export default useShareExperienceInitialRedirect;
