'use client';

import { ReactNode } from 'react';

import { FIREBASE_CONFIG, FIREBASE_VAPID_KEY } from '@constants/app.constants';
import { PermissionsProvider } from '@repo/core/providers/PermissionsProvider';

import useLogin from './__hooks__/useLogin';

const PwaPermissionsProvider = ({ children }: { children: ReactNode }) => {
  const { loginHandler } = useLogin();

  return (
    <PermissionsProvider
      vapidKey={FIREBASE_VAPID_KEY}
      firebaseConfigs={FIREBASE_CONFIG}
      onCallback={(v) => loginHandler(v.firebaseToken)}
    >
      <>{children}</>
    </PermissionsProvider>
  );
};

export default PwaPermissionsProvider;
