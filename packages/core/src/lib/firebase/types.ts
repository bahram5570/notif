export type FirebaseConfigsTypes = {
  appId: string;
  apiKey: string;
  projectId: string;
  authDomain: string;
  databaseURL?: string;
  storageBucket: string;
  measurementId: string;
  messagingSenderId: string;
};

export interface FirebaseTokenHandlerTypes {
  onFt: (v: string) => void;
  onIsServiceWorkerReady: (v: string) => void;
  onNotifInWindow: (v: string) => void;
  onPermission: (v: string) => void;
  onMessaging: (v: string) => void;
  onRegister: (v: string) => void;
  firebaseConfigs: FirebaseConfigsTypes;
  vapidKey: string;
}
