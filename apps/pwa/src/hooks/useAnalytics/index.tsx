import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import posthog, { Properties } from 'posthog-js';

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

  const callEvent = (event_name: string, properties?: Properties) => {
    posthog.capture(event_name, properties);
  };

  return { callEvent };
};

export default useAnalytics;
