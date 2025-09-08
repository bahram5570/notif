'use client';

import Prevention1Container from '@components/activation/pages/prevention/Prevention1Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Prevention1 = () => {
  // # رابطه جنسی
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Prevention1Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.prevention_1}
      />
    </>
  );
};

export default Prevention1;
