'use client';

import Tracker2Container from '@components/activation/pages/tracker/Tracker2Container';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Tracker2 = () => {
  // # منظم یا نامنظم
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Tracker2Container
        payload={payload}
        payloadHandler={payloadHandler}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_ROUTES_INFO.tracker_2}
      />
    </>
  );
};

export default Tracker2;
