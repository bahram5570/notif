'use client';

import { useEffect } from 'react';

import { getUserCookie } from '@actions/userCookies.actions';
import * as Sentry from '@sentry/nextjs';

const SentryProvider = () => {
  useEffect(() => {
    const handleUserId = async () => {
      const userCookie = await getUserCookie();

      if (userCookie) {
        Sentry.setUser({ loginId: userCookie.loginId });
      }
    };

    handleUserId();
  }, []);

  return <></>;
};

export default SentryProvider;
