import { FirebaseTokenHandlerTypes } from '../../lib/firebase/types';

export type NotificationsDataTypes = {
  id: string;
  image: string;
  title: string;
  message: string;
  link?: string | null;
  Path?: string | null;
};

export interface ServiceWorkerProviderTypes extends Pick<FirebaseTokenHandlerTypes, 'firebaseConfigs'> {
  children: React.ReactNode;
}
