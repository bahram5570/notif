import { ReactNode } from 'react';

import { FirebaseTokenHandlerTypes } from '../../lib/firebase/types';

export interface PermissionsProviderTypes extends Pick<FirebaseTokenHandlerTypes, 'firebaseConfigs' | 'vapidKey'> {
  children: ReactNode;
  onCallback: (v: { firebaseToken: string }) => void;
}
