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
  vapidKey: string;
  onToken: (token: string) => void;
  firebaseConfigs: FirebaseConfigsTypes;
}
