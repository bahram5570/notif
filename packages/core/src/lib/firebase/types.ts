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
  firebaseConfigs: FirebaseConfigsTypes;
  vapidKey: string;
}
