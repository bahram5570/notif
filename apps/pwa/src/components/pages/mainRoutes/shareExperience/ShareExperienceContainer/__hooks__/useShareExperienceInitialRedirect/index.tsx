import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE } from '../../../constants';

const useShareExperienceInitialRedirect = () => {
  const searchParams = useSearchParams();
  const isFirstTime1 = useRef(isDevelopeMode());
  const { increaseZIndex } = useOverlayIndex();
  const pathname = usePathname();
  const router = useRouter();
  // const isFirstTime2 = useRef(isDevelopeMode());

  const { newQueryParamsHandler } = useQueryParamsHandler();

  const redirectStorage =
    typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
  const queryString = searchParams
    ? Array.from(searchParams.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    : '';

  useEffect(() => {
    // # Navigates to desired comment, reply, etc that is strored in 'sessionStorage'
    if (isFirstTime1.current) {
      const params = new URLSearchParams(searchParams.toString());

      params.forEach((_, key) => params.delete(key));

      router.replace(pathname);
      isFirstTime1.current = false;
      return;
    }

    if (redirectStorage) {
      const data = redirectStorage.split('=');
      newQueryParamsHandler({ [data[0]]: data[1] });
      increaseZIndex(data[0], data[1]);
    }

    sessionStorage.removeItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
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
