'use client';

import Goal2Container from '@components/activation/pages/goal/Goal2Container';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';

import useMenPwaRegister from './__hooks__/useMenPwaRegister';

const Goal2 = () => {
  // # تاریخ تولد
  const activationData = useActivationData();
  const { payload, payloadHandler } = useActivationPayload();
  const { registerHandler, isLoading } = useMenPwaRegister();

  return (
    <>
      <Goal2Container
        payload={payload}
        isLoading={isLoading}
        onRegister={registerHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={ACTIVATION_ROUTES_INFO.goal_2}
      />
    </>
  );
};

export default Goal2;
