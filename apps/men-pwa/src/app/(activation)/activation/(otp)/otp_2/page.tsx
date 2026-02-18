'use client';

import { useEffect, useState } from 'react';

import { setUserCookie, setUserInfoCookie } from '@actions/userCookies.actions';
import Otp2Container from '@components/activation/pages/otp/Otp2Container';
import { OtpStatusTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useOtpStatus/types';
import { OTP_COUNT_DOWN_TIME } from '@components/activation/pages/otp/Otp2Container/constants';
import { FetchedUserTypes } from '@components/activation/pages/types';
import { useCountDown } from '@repo/core/hooks/useCountDown';
import { useRouter } from 'next/navigation';

const Otp2 = () => {
  // # کد
  const router = useRouter();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [applyOtpStatus, setApplyOtpStatus] = useState<OtpStatusTypes>(null);

  useEffect(() => {
    if (applyOtpStatus) {
      setApplyOtpStatus(null);
    }
  }, [applyOtpStatus]);

  const loginHandler = async (v: FetchedUserTypes) => {
    await setUserCookie(v.userCookie);
    await setUserInfoCookie(v.userInfoCookie);
    sessionStorage.clear();

    router.replace('/protected/partner');
  };

  const completeHander = () => {
    setIsRegisterSuccess(true);
    setApplyOtpStatus('correct');
  };

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: () => router.push('/activation/goal_1'),
  });

  const registerHandler = () => {
    completeHander();
    startCounter();
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
