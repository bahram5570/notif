import { useEffect } from 'react';

import useActivationCrRegister from '@hooks/__activation__/useActivationCrRegister';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import PartnerCodeContainer from '../pages/PartnerCodeContainer';
import useCompleteCrRegisterSteps from './__hooks__/useCompleteCrRegisterSteps';
import useCrRegisterPartnerCode from './__hooks__/useCrRegisterPartnerCode';
import { CompleteRegisterCrStepsEnum } from './enums';
import { CompleteCrRegisterContainerProps } from './types';

const CompleteCrRegisterContainer = ({ partnerData, fetchedUser, payload }: CompleteCrRegisterContainerProps) => {
  const { completeRegisterHandler } = useActivationCrRegister();
  const { step, stepHandler } = useCompleteCrRegisterSteps({ partnerData });

  useEffect(() => {
    if (step === CompleteRegisterCrStepsEnum.Loading) {
      completeRegisterHandler(fetchedUser);
    }
  }, [step, fetchedUser]);

  const partnerCodeCompleteHandler = () => {
    stepHandler(CompleteRegisterCrStepsEnum.Loading);
  };

  const { callApi, isLoading } = useCrRegisterPartnerCode({
    token: fetchedUser.token,
    onComplete: partnerCodeCompleteHandler,
  });

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full mx-auto bg-impo_Neutral_Background z-50"
    >
      {step === CompleteRegisterCrStepsEnum.Partner && partnerData?.question && partnerData?.reward && (
        <PartnerCodeContainer
          onSubmit={callApi}
          isLoading={isLoading}
          reward={partnerData.reward}
          firstName={payload.firstName}
          question={partnerData.question}
          onComplete={partnerCodeCompleteHandler}
        />
      )}
    </div>
  );
};

export default CompleteCrRegisterContainer;
