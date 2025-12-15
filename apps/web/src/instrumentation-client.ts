import { sentryConfig } from '@lib/sentry';

const sentry = sentryConfig();

export const onRouterTransitionStart = sentry?.captureRouterTransitionStart;
