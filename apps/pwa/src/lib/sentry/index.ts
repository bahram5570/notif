import { handleSentryErrorExceptions } from './__utils__';

import * as Sentry from '@sentry/nextjs';

export const sentryConfig = () => {
  Sentry.init({
    enableLogs: true,
    tracesSampleRate: 1,
    sendDefaultPii: true,
    dsn: 'https://686f5c4241a605cb1b22a1217ccb0202@sentry.weareimpo.ir/6',

    beforeSend(event) {
      return handleSentryErrorExceptions(event);
    },
  });

  return Sentry;
};
