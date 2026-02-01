importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js');

const STORED_NOTIFICATION_CACHE_NAME = 'storedNotification';
const OFFLINE_CACHE_NAME = 'offlinePage';

const OFFLINE_HTML_PAGE = '/offlinePage.html';
const OFFLINE_IMAGE = '/assets/images/offline.png';
const OFFLINE_FONT = '/assets/shared/fonts/YekanBakh-VF.ttf';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_IMAGE, OFFLINE_FONT, OFFLINE_HTML_PAGE]);
    }),
  );

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== OFFLINE_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (
    event.request.method !== 'GET' ||
    !event.request.url.startsWith('http') ||
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/_next/')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        if (navigator.onLine) {
          return response;
        }

        throw new Error();
      })
      .catch(async () => {
        const cache = await caches.open(OFFLINE_CACHE_NAME);

        if (['image', 'font'].includes(event.request.destination)) {
          if (url.pathname === OFFLINE_IMAGE) {
            return await cache.match(OFFLINE_IMAGE);
          }

          if (url.pathname === OFFLINE_FONT) {
            return await cache.match(OFFLINE_FONT);
          }
        }

        return await cache.match(OFFLINE_HTML_PAGE);
      }),
  );
});

// # Firebase setup

const firebaseConfig = {
  appId: '1:497330213206:web:538d02ea2d3155564086f7',
  apiKey: 'AIzaSyDE0iz1eBW9Ku2do2kKmsJnUj6tvB4_Z2U',
  databaseURL: 'https://impo-53eb6.firebaseio.com',
  authDomain: 'impo-53eb6.firebaseapp.com',
  storageBucket: 'impo-53eb6.appspot.com',
  messagingSenderId: '497330213206',
  measurementId: 'G-ESJG2B6KLW',
  projectId: 'impo-53eb6',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.data?.title || '', {
    icon: '/assets/images/questionsImpo.svg',
    body: payload.data?.message || '',
    image: payload.data?.image || '',
    data: payload.data,
  });
});

self.addEventListener('message', (event) => {
  // # Gets notification that made in app
  const payload = event.data?.payload;
  if (event.data?.actionType !== 'APP_NOTIFICATION_CLICK' || !payload) {
    return;
  }

  self.registration.showNotification(payload?.title || '', {
    icon: '/assets/images/questionsImpo.svg',
    body: payload?.message || '',
    data: event.data,
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((allCliensts) => {
      const actionType = event.notification?.data?.actionType;

      // # Handle notification click if app is open
      if (actionType === 'APP_NOTIFICATION_CLICK') {
        allCliensts.forEach((client) => {
          client.postMessage(event.notification.data);
        });

        return;
      }

      // # Open app when it's closed
      caches.open(STORED_NOTIFICATION_CACHE_NAME).then((cache) => {
        const res = new Response(JSON.stringify(event.notification.data), {
          headers: { 'Content-Type': 'application/json' },
        });

        return cache.put(STORED_NOTIFICATION_CACHE_NAME, res);
      });

      clients.openWindow('/');
    }),
  );
});
