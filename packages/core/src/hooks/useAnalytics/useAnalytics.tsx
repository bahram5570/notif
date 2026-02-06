import { useCallback } from 'react';

import posthog from 'posthog-js';

import { UseAnalyticsCallEventTypes, UseAnalyticsTypes } from './types';
import useAnalyticsInView from './useAnalyticsInView';
import useAnalyticsMountTimer from './useAnalyticsMountTimer';
import useAnalyticsPageView from './useAnalyticsPageView';

export const useAnalytics = (props?: UseAnalyticsTypes) => {
  const callEvent: UseAnalyticsCallEventTypes = useCallback((event_name, properties) => {
    if (event_name) {
      posthog.capture(event_name, properties);
    }
  }, []);

  // # pageView
  useAnalyticsPageView({ pageView_eventName: props?.pageView_eventName, callEvent });

  // # mountTimer
  useAnalyticsMountTimer({ mountTimer_eventName: props?.mountTimer_eventName, callEvent });

  // # inView
  const { inViewRef } = useAnalyticsInView({ inView_eventName: props?.inView_eventName, callEvent });

  return { callEvent, inViewRef };
};
