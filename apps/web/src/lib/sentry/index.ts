import * as Sentry from '@sentry/nextjs';

export const sentryConfig = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      enableLogs: true,
      tracesSampleRate: 1,
      sendDefaultPii: true,
      dsn: 'https://f25a60e2cbae56299b466b5882f43265@sentry.weareimpo.ir/7',
    });

    return Sentry;
  }
};
