'use client';

import Otp1Container from '@components/activation/pages/otp/Otp1Container';
import { Otp1CompleteHandlerTypes } from '@components/activation/pages/otp/Otp1Container/types';
import { OTP_INFO_NAME } from '@components/activation/pages/otp/constants';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

const Otp1 = () => {
  // # شماره همراه/ ایمیل
  const router = useCustomRouter();
  const { payload, payloadHandler } = useActivationCrPayload();
  const { callEventActivation } = useActivationAnalytics();

  const otp1CompleteHandler: Otp1CompleteHandlerTypes = (info) => {
    payloadHandler({ password: info.password, identity: info.identity });
    sessionStorage.setItem(OTP_INFO_NAME, JSON.stringify(info));
    router.push('otp_2');
  };

  return (
    <Otp1Container
      onContinue={callEventActivation}
      payload={payload}
      payloadHandler={payloadHandler}
      otp1CompleteHandler={otp1CompleteHandler}
    />
  );
};

export default Otp1;
