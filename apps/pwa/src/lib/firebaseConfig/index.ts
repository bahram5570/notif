import { getFirebaseCookieToken, getUserExpiresDate } from '@utils/cookies';

import { getUserCookie } from '@actions/userCookies.actions';
import { FIREBASE_COOKIE_NAME } from '@constants/cookie.constants';
import { initializeApp } from 'firebase/app';
import { Messaging, getMessaging, getToken, isSupported } from 'firebase/messaging';
import cookies from 'js-cookie';

import { FIREBASE_CONFIG, FIREBASE_VAPID_KEY } from './constants';

export const getFirebaseMessaging = async (): Promise<Messaging | null> => {
  const isFirebaseSupported = await isSupported();

  if (typeof window === 'undefined' || !isFirebaseSupported) {
    return null;
  }

  const fireBaseApp = initializeApp(FIREBASE_CONFIG);
  return getMessaging(fireBaseApp);
};

export const firebaseToken = async (onReload: () => void) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const isServiceWorkerReady = await navigator.serviceWorker.ready;

    if (isServiceWorkerReady) {
      const token = getFirebaseCookieToken();
      const messaging = await getFirebaseMessaging();

      if (token === '') {
        const registration = await navigator.serviceWorker.getRegistration();

        if (messaging) {
          const ft = await getToken(messaging, {
            vapidKey: FIREBASE_VAPID_KEY,
            serviceWorkerRegistration: registration,
          });

          if (ft) {
            cookies.set(FIREBASE_COOKIE_NAME, ft, { expires: getUserExpiresDate(365) });

            // # Reset the app to set the firebase token user token
            const user = await getUserCookie();

            if (user) {
              onReload();
            }
          }
        }
      }
    }
  }
};
