import { ActivationDataTypes } from '@services/activationServices/types';

import { UserCookieTypes, UserInfoCookieTypes } from '@actions/userCookies.actions';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

export type FetchedUserTypes = { userCookie: UserCookieTypes; userInfoCookie: UserInfoCookieTypes };

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface CompleteRegisterContainerProps {
  clearStorage?: boolean;
  fetchedUser: FetchedUserTypes;
  payload: ActivationPayloadTypes;
  accessNotificationData?: PageTypes;
  partnerData?: { reward?: PageTypes; question?: PageTypes };
}

export interface CompleteRegisterCycleLoadingProps extends Pick<
  CompleteRegisterContainerProps,
  'fetchedUser' | 'clearStorage'
> {
  createCycleImage: string;
}
