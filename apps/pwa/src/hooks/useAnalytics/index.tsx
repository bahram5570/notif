import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { isDevelopeMode } from '@utils/system';

import posthog, { EventName, Properties } from 'posthog-js';

import { ANALYTICS_IN_VIEW_TIMER_SECONDS } from './constants';
import { UseAnalyticsTypes } from './types';

const useAnalytics = (props?: UseAnalyticsTypes) => {
  const callEvent = useCallback((event_name: EventName, properties?: Properties) => {
    console.log(event_name);
    // posthog.capture(event_name, properties);
  }, []);

  // # pageView

  const isFirstTime = useRef(isDevelopeMode());
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const pageViewEvent = props?.pageView_eventName?.trim();

    if (pageViewEvent) {
      callEvent(`pageView ${pageViewEvent}`);
    }
  }, []);

  // # inView

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState<number | null | 'DONE'>(null);
  const { ref: callEventRef, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      if (timer === null) {
        setTimer(ANALYTICS_IN_VIEW_TIMER_SECONDS);
      }

      if (typeof timer === 'number' && timer > 0 && !timerRef.current) {
        timerRef.current = setInterval(() => {
          setTimer((prev) => {
            if (typeof prev === 'number') {
              if (prev > 1) {
                return prev - 1;
              }

              clearInterval(timerRef.current!);
              timerRef.current = null;

              return 'DONE';
            }

            return prev;
          });
        }, 1000);
      }
    } else {
      if (typeof timer === 'number' && timer > 0) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
        setTimer(null);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [inView, timer]);

  useEffect(() => {
    const eventName = props?.inView_eventName?.trim();

    if (timer === 'DONE') {
      if (eventName) {
        callEvent(`inView ${eventName}`);
      }
    }
  }, [timer, props?.inView_eventName]);

  return { callEvent, callEventRef };
};

export default useAnalytics;
