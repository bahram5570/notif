import { useCallback, useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import posthog, { EventName, Properties } from 'posthog-js';

import { UseAnalyticsTypes } from './types';

const useAnalytics = (props?: UseAnalyticsTypes) => {
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (props?.pageView) {
      posthog.capture('$pageview');
    }
  }, []);

  const callEvent = useCallback((event_name: EventName, properties?: Properties) => {
    posthog.capture(event_name, properties);    
  }, []);

  return { callEvent };
};

export default useAnalytics;
