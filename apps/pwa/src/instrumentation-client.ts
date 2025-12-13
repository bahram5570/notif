import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://686f5c4241a605cb1b22a1217ccb0202@sentry.weareimpo.ir/6',
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
