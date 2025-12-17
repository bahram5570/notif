import * as Sentry from '@sentry/nextjs';

export const handleSentryErrorExceptions = (event: Sentry.ErrorEvent) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // # google tags
  const gType = event.exception?.values?.[0]?.type === 'SyntaxError';
  const gErr = event.exception?.values?.[0]?.value === `Unexpected token '<'`;

  if (gErr && gType) {
    return null;
  }

  // #

  return event;
};
