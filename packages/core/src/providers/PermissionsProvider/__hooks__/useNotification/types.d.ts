import { PermissionsProviderTypes } from '../../types';

export interface UseNotificationTypes extends Pick<
  PermissionsProviderTypes,
  'firebaseConfigs' | 'vapidKey' | 'onCallback'
> {}
