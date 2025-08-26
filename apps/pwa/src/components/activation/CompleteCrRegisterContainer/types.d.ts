import { ActivationDataTypes } from '@services/activationServices/types';

import { UserCookieTypes } from '@actions/cookie.actions';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface CompleteCrRegisterContainerProps {
  fetchedUser: UserCookieTypes;
  payload: ActivationPayloadTypes;
  partnerData?: { reward?: PageTypes; question?: PageTypes };
}

export interface CompleteCrRegisterCycleLoadingProps extends Pick<CompleteCrRegisterContainerProps, 'fetchedUser'> {
  createCycleImage: string;
}
