import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '../../../../utils/system';

// @ts-ignore
import * as actions from '@actions/userCookies.actions';

import { NOTIFICATION_PERMISSION_HANDELED } from '../../../../constants/storage.constants';
import { useSystem } from '../../../../hooks/useSystem';
import { firebaseTokenHandler } from '../../../../lib/firebase';
import { UseNotificationTypes } from './types';

const useNotification = ({ firebaseConfigs, vapidKey, onCallback }: UseNotificationTypes) => {
  const { isAddToHome, operatingSystem } = useSystem();
  const [showNotifications, setShowNotifications] = useState(false);

  const tokenHandler = async (firebaseToken: string) => {
    await actions.setFirebaseTokenCookie(firebaseToken);
    onCallback({ firebaseToken });
  };

  const checkPermissionHandler = async () => {
    if (Notification.permission === 'granted') {
      const token = await actions.getFirebaseTokenCookie();

      if (!token) {
        await firebaseTokenHandler({ firebaseConfigs, vapidKey, onToken: tokenHandler });
      }
    } else {
      const permissionNotHandled = localStorage.getItem(NOTIFICATION_PERMISSION_HANDELED) === null;

      if (permissionNotHandled) {
        setShowNotifications(true);
      }
    }
  };

  const acceptHandler = async (accept: boolean) => {
    if (accept) {
      const status = await Notification.requestPermission();

      setShowNotifications(false);
      localStorage.setItem(NOTIFICATION_PERMISSION_HANDELED, 'true');

      if (status === 'granted') {
        await firebaseTokenHandler({ firebaseConfigs, vapidKey, onToken: tokenHandler });
      }
    } else {
      setShowNotifications(false);
      localStorage.setItem(NOTIFICATION_PERMISSION_HANDELED, 'true');
    }
  };

  const isFirstTime = useRef(isDevelopeMode());
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const accessHandler = async () => {
      const isNotificationAvailable = 'Notification' in window;
      const isServiceWorkerReady = await navigator.serviceWorker.ready;

      if (isNotificationAvailable && isServiceWorkerReady) {
        if (operatingSystem === 'windows') {
          await checkPermissionHandler();
          return;
        }

        if (isAddToHome) {
          await checkPermissionHandler();
        }
      }
    };

    accessHandler();
  }, [isAddToHome, operatingSystem]);

  return { showNotifications, acceptHandler };
};

export default useNotification;
