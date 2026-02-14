import { FirebaseTokenHandlerTypes } from '../../lib/firebase/types';

export interface PermissionsProviderTypes extends Pick<FirebaseTokenHandlerTypes, 'firebaseConfigs' | 'vapidKey'> {}
