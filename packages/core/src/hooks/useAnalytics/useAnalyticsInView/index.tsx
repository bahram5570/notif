import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { ANALYTICS_IN_VIEW_TIMER_SECONDS } from '../constants';
import { UseAnalyticsInViewTypes } from '../types';

const useAnalyticsInView = (props: UseAnalyticsInViewTypes) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState<number | null | 'DONE'>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 1 });

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
        props.callEvent(`inView ${eventName}`);
      }
    }
  }, [timer, props?.inView_eventName]);

  return { inViewRef };
};

export default useAnalyticsInView;
