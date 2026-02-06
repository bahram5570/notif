import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '../../../utils/system';

import { UseAnalyticsPageViewTypes } from '../types';

const useAnalyticsPageView = (props: UseAnalyticsPageViewTypes) => {
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const pageViewEvent = props?.pageView_eventName?.trim();

    if (pageViewEvent) {
      props.callEvent(`pageView ${pageViewEvent}`);
    }
  }, []);
};

export default useAnalyticsPageView;
