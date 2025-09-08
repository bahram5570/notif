'use client';

import Pregnancy4Container from '@components/activation/pages/pregnancy/Pregnancy4Container';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Pregnancy4 = () => {
  // # وزن قبل از بارداری
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Pregnancy4Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.pregnancy_4}
      />
    </>
  );
};

export default Pregnancy4;
