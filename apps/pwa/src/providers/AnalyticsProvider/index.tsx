'use client';

import { useEffect } from 'react';

// import posthog from 'posthog-js';
// import { PostHogProvider } from 'posthog-js/react';

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }
    // posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    //   autocapture: false,
    //   api_host: '/ingest',
    //   disable_surveys: true,
    //   capture_pageview: false,
    //   capture_heatmaps: false,
    //   capture_pageleave: false,
    //   capture_performance: false,
    //   persistence: 'localStorage',
    //   disable_session_recording: true,
    //   capture_exceptions: {
    //     capture_console_errors: false,
    //     capture_unhandled_errors: false,
    //     capture_unhandled_rejections: false,
    //   },
    // });
  }, []);

  return (
    <>
      {/* <PostHogProvider client={posthog}> */}
      <>{children}</>
      {/* </PostHogProvider> */}
    </>
  );
};

export default AnalyticsProvider;
