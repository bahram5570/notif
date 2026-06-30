// @ts-ignore
import * as actions from '@actions/userCookies.actions';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, isSupported } from 'firebase/messaging';

import { FirebaseConfigsTypes, FirebaseTokenHandlerTypes } from './types';

export const getFirebaseMessaging = async (firebaseConfig: FirebaseConfigsTypes) => {
  const isFirebaseSupported = await isSupported();

  if (typeof window === 'undefined' || !isFirebaseSupported) {
    return null;
  }

  const fireBaseApp = initializeApp(firebaseConfig);
  return getMessaging(fireBaseApp);
};

export const firebaseTokenHandler = async (props: FirebaseTokenHandlerTypes) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const isServiceWorkerReady = await navigator.serviceWorker.ready;

    if (isServiceWorkerReady) {
      const token = await actions.getFirebaseTokenCookie();
      const messaging = await getFirebaseMessaging(props.firebaseConfigs);

      if (token) {
        props.onFt(token);
      }

      if (!token && messaging) {
        const registration = await navigator.serviceWorker.getRegistration();

        if (registration) {
          props.onFt('pending ...');

          try {
            const ft = await getToken(messaging, {
              vapidKey: props.vapidKey,
              serviceWorkerRegistration: registration,
            });

            await actions.setFirebaseTokenCookie(ft);
            props.onFt(ft);
          } catch (error) {
            props.onFt(JSON.stringify(error));
          }

          // const ft = await getToken(messaging, {
          //   vapidKey: props.vapidKey,
          //   serviceWorkerRegistration: registration,
          // });

          // if (ft) {
          //   await actions.setFirebaseTokenCookie(ft);
          // }
        }
      }
    }
  }
};
