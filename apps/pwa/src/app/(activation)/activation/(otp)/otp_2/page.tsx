'use client';

import { useEffect, useState } from 'react';

import { UserCookieTypes, setUserCookie } from '@actions/cookie.actions';
import Otp2Container from '@components/activation/pages/otp/Otp2Container';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import { OTP_COUNT_DOWN_TIME } from '@components/activation/pages/otp/Otp2Container/constants';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import useCountDown from '@hooks/useCountDown';
import useSectionSaver from '@providers/__activation__/ActivationProvider/__hooks__/useSectionSaver';
import { useRouter } from 'next/navigation';

import useExplanation from './__hooks__/useExplanation';

const Otp2 = () => {
  // # کد
  // useExplanation();
  const router = useRouter();
  const { sectionSaverHandler } = useSectionSaver();
  const { callEventActivation } = useActivationAnalytics();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [applyOtpStatus, setApplyOtpStatus] = useState<OtpStatusTypes>(null);

  useEffect(() => {
    if (applyOtpStatus) {
      setApplyOtpStatus(null);
    }
  }, [applyOtpStatus]);

  const nextRouteHandler = () => {
    router.push('goal_1');
    sectionSaverHandler('goal_1');
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

  const loginHandler = async (v: UserCookieTypes) => {
    await setUserCookie(v);
    sessionStorage.clear();
    callEventActivation('LOGIN');
    router.replace('/protected/cycle');
  };

  return (
    <Otp2Container
      onSubmitLogin={loginHandler}
      applyOtpStatus={applyOtpStatus}
      onSubmitRegister={registerHandler}
      isRegisterSuccess={isRegisterSuccess}
    />
  );
};

export default Otp2;
