import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import { UseAnalyticsMountTimerTypes } from './types';

const useAnalyticsMountTimer = (props: UseAnalyticsMountTimerTypes) => {
  const startTimeRef = useRef<number | null>(null);
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (props.mountTimer_eventName) {
      startTimeRef.current = Date.now();
    }
  }, [props.mountTimer_eventName]);

  useEffect(() => {
    return () => {
      if (startTimeRef.current) {
        const timeInterval = Date.now() - startTimeRef.current;
        const time = Math.round(timeInterval / 1000);
        props.callEvent(`${props.mountTimer_eventName} timeSpent=${time}`);
      }
    };
  }, []);
};

export default useAnalyticsMountTimer;
