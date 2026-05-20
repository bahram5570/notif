'use client';

import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '../../utils/system';

import { useCustomRouter } from '../../hooks/useCustomRouter';
import { useSystem } from '../../hooks/useSystem';
import { firebaseTokenHandler } from '../../lib/firebase';
import { PermissionsProviderTypes } from './types';

export const PermissionsProvider = ({ firebaseConfigs, vapidKey }: PermissionsProviderTypes) => {
  const router = useCustomRouter();
  const isFirstTime = useRef(isDevelopeMode());
  const { operatingSystem, isAddToHome } = useSystem();

  const reloadHandler = () => {
    router.refresh();
  };

  const permissionHandler = async () => {
    await Notification.requestPermission().then(async (result) => {
      if (result === 'granted') {
        await firebaseTokenHandler({ firebaseConfigs, vapidKey, onReload: reloadHandler });
      }
    });
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const accessHandler = async () => {
      if ('Notification' in window && isAddToHome !== null) {
        if (operatingSystem === 'ios' && isAddToHome) {
          await permissionHandler();
        }

        if (operatingSystem === 'android' || operatingSystem === 'windows') {
          await permissionHandler();
        }
      }
    };

    accessHandler();
  }, [operatingSystem, isAddToHome]);

  return <></>;
};
