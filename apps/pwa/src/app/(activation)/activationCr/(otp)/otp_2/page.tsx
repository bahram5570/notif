'use client';

import { useEffect, useState } from 'react';

import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';
import Otp2Container from '@components/activation/pages/otp/Otp2Container';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import { OTP_COUNT_DOWN_TIME } from '@components/activation/pages/otp/Otp2Container/constants';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import useActivationCrRegister from '@hooks/__activation__/useActivationCrRegister';
import useRegister from '@hooks/__activation__/useRegister';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';
import { useCountDown } from '@repo/core/hooks/useCountDown';

const Otp2 = () => {
  // # کد
  const { payload } = useActivationCrPayload();
  const { callEventActivation } = useActivationAnalytics();
  const { completeRegisterHandler } = useActivationCrRegister();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [applyOtpStatus, setApplyOtpStatus] = useState<OtpStatusTypes>(null);

  const errorRegisterApiHandler = (v: OtpStatusTypes) => {
    if (v === 'wrong') {
      setApplyOtpStatus('wrong');
    }
  };

  const { isLoading: isRegisterLoading, registerHandler, fetchedUser } = useRegister(payload, errorRegisterApiHandler);

  useEffect(() => {
    if (applyOtpStatus) {
      setApplyOtpStatus(null);
    }
  }, [applyOtpStatus]);

  const nextRouteHandler = () => {
    if (fetchedUser) {
      completeRegisterHandler(fetchedUser);
    }
  };

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: nextRouteHandler,
  });

  useEffect(() => {
    if (fetchedUser) {
      startCounter();
      setIsRegisterSuccess(true);
      setApplyOtpStatus('correct');
      callEventActivation('REGISTER');
    }
  }, [fetchedUser]);

  const loginHandler = (v: FetchedUserTypes) => {
    sessionStorage.clear();
    completeRegisterHandler(v);
    callEventActivation('LOGIN');
  };

  return (
    <>
      <Otp2Container
        onSubmitLogin={loginHandler}
        applyOtpStatus={applyOtpStatus}
        onSubmitRegister={registerHandler}
        isRegisterSuccess={isRegisterSuccess}
        isRegisterLoading={isRegisterLoading}
      />
    </>
  );
};

export default Otp2;
