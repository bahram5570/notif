'use client';

import Intention3Container from '@components/activation/pages/intention/Intention3Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Intention3 = () => {
  // # رابطه در بارداری
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Intention3Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_ROUTES_INFO.intention_3}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Intention3;
