'use client';

import { useEffect, useState } from 'react';

import { UserCookieTypes } from '@actions/cookie.actions';
import Otp2Container from '@components/activation/pages/otp/Otp2Container';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import { OTP_COUNT_DOWN_TIME } from '@components/activation/pages/otp/Otp2Container/constants';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import useActivationCrRegister from '@hooks/__activation__/useActivationCrRegister';
import useCountDown from '@hooks/useCountDown';
import { useRouter } from 'next/navigation';

const Otp2 = () => {
  // # کد
  const router = useRouter();
  const { callEventActivation } = useActivationAnalytics();
  const { completeRegisterHandler } = useActivationCrRegister();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [applyOtpStatus, setApplyOtpStatus] = useState<OtpStatusTypes>(null);

  useEffect(() => {
    if (applyOtpStatus) {
      setApplyOtpStatus(null);
    }
  }, [applyOtpStatus]);

  const nextRouteHandler = () => {
    router.push('goal_1');
  };

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: nextRouteHandler,
  });

  const registerHandler = () => {
    startCounter();
    callEventActivation();
    setIsRegisterSuccess(true);
    setApplyOtpStatus('correct');
  };

  const loginHandler = (v: UserCookieTypes) => {
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
      />
    </>
  );
};

export default Otp2;
