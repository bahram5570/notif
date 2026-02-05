import { ActivationDataTypes } from '@services/activationServices/types';

import { ActivationPayloadTypes } from '@providers/__activation__/types';
import { FetchedUserTypes } from '../CompleteRegisterContainer/types';

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface CompleteCrRegisterContainerProps {
  fetchedUser: FetchedUserTypes;
  payload: ActivationPayloadTypes;
  partnerData?: { reward?: PageTypes; question?: PageTypes };
}

export interface CompleteCrRegisterCycleLoadingProps extends Pick<CompleteCrRegisterContainerProps, 'fetchedUser'> {
  createCycleImage: string;
}
