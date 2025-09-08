'use client';

import Tracker3Container from '@components/activation/pages/tracker/Tracker3Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Tracker3 = () => {
  // # بیماری
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();
  const { callEventActivation } = useActivationAnalytics();

  return (
    <>
      <Tracker3Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_CR_ROUTES_INFO.tracker_3}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker3;
