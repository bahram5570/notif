'use client';

import Intention7Container from '@components/activation/pages/intention/Intention7Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Intention7 = () => {
  // # دوره
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Intention7Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_ROUTES_INFO.intention_7}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention7;
