import { sentryConfig } from '@lib/sentry';

const sentry = sentryConfig();

export const register = async () => {
  sentry;
};

export const onRequestError = sentry?.captureRequestError;
