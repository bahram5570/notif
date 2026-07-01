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
  const messaging = await getFirebaseMessaging(props.firebaseConfigs);

  if (messaging) {
    const registration = await navigator.serviceWorker.getRegistration();

    if (registration) {
      const firebaseToken = await getToken(messaging, {
        vapidKey: props.vapidKey,
        serviceWorkerRegistration: registration,
      });

      if (firebaseToken) {
        props.onToken(firebaseToken);
      }
    }
  }
};
