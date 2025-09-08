'use client';

import Tracker4Container from '@components/activation/pages/tracker/Tracker4Container/page';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

const Tracker4 = () => {
  // # پیشگیری
  const { payload, payloadHandler } = useActivationPayload();
  const { callEventActivation } = useActivationAnalytics();
  const activationData = useActivationData();

  return (
    <>
      <Tracker4Container
        payload={payload}
        activationData={activationData}
        onContinue={callEventActivation}
        info={ACTIVATION_ROUTES_INFO.tracker_4}
        payloadHandler={payloadHandler}
      />
    </>
  );
};

export default Tracker4;
