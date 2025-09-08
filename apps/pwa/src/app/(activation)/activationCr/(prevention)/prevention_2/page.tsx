'use client';

import Prevention2Container from '@components/activation/pages/prevention/Prevention2Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Prevention2 = () => {
  // # روش پیشگیری
  const activationData = useActivationCrData();
  const { callEventActivation } = useActivationAnalytics();
  const { payload, payloadHandler } = useActivationCrPayload();

  return (
    <>
      <Prevention2Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        payloadHandler={payloadHandler}
        info={ACTIVATION_CR_ROUTES_INFO.prevention_2}
      />
    </>
  );
};

export default Prevention2;
