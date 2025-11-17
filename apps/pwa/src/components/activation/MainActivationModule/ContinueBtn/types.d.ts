import { RewardBtnTypes } from '@components/activation/RewardModule/types';

import { CurrentRewardDataTypes, MainActivationModuleProps } from '../types';

export interface ContinueBtnProps
  extends Pick<
    MainActivationModuleProps,
    | 'firstName'
    | 'isLoading'
    | 'onRegister'
    | 'onContinue'
    | 'noBackButton'
    | 'nextActivation'
    | 'invalidMessage'
    | 'showContinueBtn'
    | 'orderOfRewardElements'
    | 'btnTestId'
  > {
  currentRewardData: CurrentRewardDataTypes;
}
