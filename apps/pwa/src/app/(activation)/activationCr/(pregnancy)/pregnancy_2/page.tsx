'use client';

import Pregnancy2Container from '@components/activation/pages/pregnancy/Pregnancy2Container';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Pregnancy2 = () => {
  // # بیماری زمینه ای
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();
  const { callEventActivation } = useActivationAnalytics();

  return (
    <>
      <Pregnancy2Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.pregnancy_2}
      />
    </>
  );
};

export default Pregnancy2;
