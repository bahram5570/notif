'use client';

import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '../../utils/system';

import { useSystem } from '../../hooks/useSystem';
import { firebaseTokenHandler } from '../../lib/firebase';
import { PermissionsProviderTypes } from './types';

export const PermissionsProvider = ({ firebaseConfigs, vapidKey }: PermissionsProviderTypes) => {
  const isFirstTime = useRef(isDevelopeMode());
  const { operatingSystem, isAddToHome } = useSystem();

  const [list, setList] = useState<number[]>([]);
  const [notificationPermission, setNotificationPermission] = useState('');
  const [ft, setFt] = useState('');

  const permissionHandler = async () => {
    await Notification.requestPermission().then(async (result) => {
      setList((state) => [...state, 5]);
      setNotificationPermission(result);

      if (result === 'granted') {
        setList((state) => [...state, 6]);
        await firebaseTokenHandler({ firebaseConfigs, vapidKey, onFt: setFt });
        setList((state) => [...state, 7]);
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
        setList((state) => [...state, 0]);

        if (operatingSystem === 'ios' && isAddToHome) {
          setList((state) => [...state, 1]);
          await permissionHandler();
          setList((state) => [...state, 2]);
        }

        if (operatingSystem === 'android' || operatingSystem === 'windows') {
          setList((state) => [...state, 3]);
          await permissionHandler();
          setList((state) => [...state, 4]);
        }
      }
    };

    accessHandler();
  }, [operatingSystem, isAddToHome]);

  const requ = async () => {
    await Notification.requestPermission();
  };

  return (
    <div className="w-full p-4 bg-red-600 text-white flex flex-col gap-4">
      <div className="w-full h-10 bg-yellow-300 flex items-center justify-center" onClick={requ}>
        Request
      </div>

      <div>{`isAddToHome ---> ${JSON.stringify(isAddToHome)}`}</div>
      <div>{`operatingSystem ---> ${JSON.stringify(operatingSystem)}`}</div>
      <div>{`'Notification' in window ---> ${JSON.stringify('Notification' in window)}`}</div>
      <div>{`notificationPermission ---> ${JSON.stringify(notificationPermission)}`}</div>
      <div>{`ft ---> ${JSON.stringify(ft)}`}</div>
      <div>{`list ---> ${JSON.stringify(list)}`}</div>
    </div>
  );
};
