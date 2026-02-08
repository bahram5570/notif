'use client';

import { useEffect } from 'react';

import { currentDate } from '@repo/core/utils/dates';

import { RETENTION_EVENT } from '@constants/storage.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { RETENTION_EVENT_DELAY_SECONDS } from './constants';

const RetentionEventProvider = () => {
  const { callEvent } = useAnalytics();

  useEffect(() => {
    const timer = setTimeout(() => {
      const { gDate } = currentDate();
      const retentionEvent: null | string =
        typeof localStorage === 'undefined' ? null : localStorage.getItem(RETENTION_EVENT) || null;

      if (retentionEvent !== gDate) {
        localStorage.setItem(RETENTION_EVENT, gDate);
        callEvent(RETENTION_EVENT);
      }
    }, RETENTION_EVENT_DELAY_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  return <></>;
};

export default RetentionEventProvider;
