'use client';

import Tracker7Container from '@components/activation/pages/tracker/Tracker7Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

const Tracker7 = () => {
  // # چرخه
  const { payload, payloadHandler } = useActivationCrPayload();
  const activationData = useActivationCrData();
  const { callEventActivation } = useActivationAnalytics();

  return (
    <>
      <Tracker7Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_CR_ROUTES_INFO.tracker_7}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker7;
