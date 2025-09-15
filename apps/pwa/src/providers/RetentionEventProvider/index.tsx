'use client';

import { useEffect } from 'react';

import { currentDate } from '@utils/dates';

import { RETENTION_EVENT } from '@constants/storage.constants';
import useAnalytics from '@hooks/useAnalytics';

const RetentionEventProvider = () => {
  const { callEvent } = useAnalytics();

  useEffect(() => {
    const { gDate } = currentDate();
    const timer = setTimeout(() => {
      const retentionEvent: null | string = localStorage.getItem(RETENTION_EVENT) || null;

      if (retentionEvent !== gDate) {
        localStorage.setItem(RETENTION_EVENT, gDate);
        callEvent(RETENTION_EVENT);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <></>;
};

export default RetentionEventProvider;
