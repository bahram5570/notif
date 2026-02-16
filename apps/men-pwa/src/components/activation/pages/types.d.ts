import { ActivationDataTypes } from '@services/activationServices/types';

import { UserCookieTypes, UserInfoCookieTypes } from '@actions/userCookies.actions';
import { ActivationPayloadTypes, ActivationRoutesInfoTypes } from '@providers/__activation__/types';

import { PayloadHandlerTypes } from '../MainActivationModule/types';

export interface ActivationContainerProps {
  isLoading?: boolean;
  onRegister?: () => void;
  onContinue?: () => void;
  payload: ActivationPayloadTypes;
  info: ActivationRoutesInfoTypes[0];
  payloadHandler: PayloadHandlerTypes;
  activationData?: ActivationDataTypes;
}

export type OtpInfoTypes = {
  isPhone: boolean;
  identity: string;
  password: string;
  isRegister: boolean;
};

export type FetchedUserTypes = { userCookie: UserCookieTypes; userInfoCookie: UserInfoCookieTypes };
