'use client';

import AddToHomeScreenContents from './AddToHomeScreenContents';
import NotificationContents from './NotificationContents';
import useAddToHomeScreen from './__hooks__/useAddToHomeScreen';
import useNotification from './__hooks__/useNotification';
import { PermissionsProviderTypes } from './types';

export const PermissionsProvider = ({ children, firebaseConfigs, vapidKey, onCallback }: PermissionsProviderTypes) => {
  const { showAddToHome } = useAddToHomeScreen();
  const { showNotifications, acceptHandler } = useNotification({ firebaseConfigs, vapidKey, onCallback });

  if (showAddToHome) {
    return <AddToHomeScreenContents />;
  }

  if (showNotifications) {
    return <NotificationContents acceptHandler={acceptHandler} />;
  }

  return <>{children}</>;
};
