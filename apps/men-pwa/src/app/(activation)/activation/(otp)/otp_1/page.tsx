'use client';

import { OTP_INFO_NAME } from '@components/activation/pages/constants';
import Otp1Container from '@components/activation/pages/otp/Otp1Container';
import { Otp1CompleteHandlerTypes } from '@components/activation/pages/otp/Otp1Container/types';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';
import { useRouter } from 'next/navigation';

const Otp1 = () => {
  // # شماره همراه/ ایمیل
  const router = useRouter();
  const { payload, payloadHandler } = useActivationPayload();

  const otp1CompleteHandler: Otp1CompleteHandlerTypes = (info) => {
    payloadHandler({ password: info.password, identity: info.identity });
    sessionStorage.setItem(OTP_INFO_NAME, JSON.stringify(info));
    router.push('otp_2');
  };

  return (
    <>
      <Otp1Container payload={payload} payloadHandler={payloadHandler} otp1CompleteHandler={otp1CompleteHandler} />
    </>
  );
};

export default Otp1;
