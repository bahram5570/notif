'use client';

import Tracker3Container from '@components/activation/pages/tracker/Tracker3Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Tracker3 = () => {
  // # بیماری
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Tracker3Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_ROUTES_INFO.tracker_3}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker3;
