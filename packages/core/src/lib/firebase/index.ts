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

export const firebaseTokenHandler = async ({
  firebaseConfigs,
  onFt,
  onMessaging,
  onPermission,
  onRegister,
  vapidKey,
  onNotifInWindow,
  onIsServiceWorkerReady,
}: FirebaseTokenHandlerTypes) => {
  onPermission(Notification.permission);
  onNotifInWindow(`${'Notification' in window}`);

  if ('Notification' in window && Notification.permission === 'granted') {
    const isServiceWorkerReady = await navigator.serviceWorker.ready;

    onIsServiceWorkerReady(`${isServiceWorkerReady}`);

    if (isServiceWorkerReady) {
      const token = await actions.getFirebaseTokenCookie();

      const messaging = await getFirebaseMessaging(firebaseConfigs)
        .then((m) => {
          onMessaging('ok');
          return m;
        })
        .catch((err) => {
          onMessaging(JSON.stringify(err));
          return null;
        });

      if (token) {
        onFt(token);
      }

      if (!token && messaging) {
        const registration = await navigator.serviceWorker
          .getRegistration()
          .then((re) => {
            onRegister('true');
            return re;
          })
          .catch((err) => {
            console.log(err);
            onRegister('false');
            return undefined;
          });

        if (registration) {
          onFt('pending ...');

          try {
            const ft = await getToken(messaging, {
              vapidKey: vapidKey,
              serviceWorkerRegistration: registration,
            });

            await actions.setFirebaseTokenCookie(ft);
            onFt(ft);
          } catch (error) {
            onFt(JSON.stringify(error));
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
