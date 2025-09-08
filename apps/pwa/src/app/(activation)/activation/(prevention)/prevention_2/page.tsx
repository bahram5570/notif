'use client';

import Prevention2Container from '@components/activation/pages/prevention/Prevention2Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Prevention2 = () => {
  // # روش پیشگیری
  const activationData = useActivationData();
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();

  return (
    <>
      <Prevention2Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.prevention_2}
      />
    </>
  );
};

export default Prevention2;
