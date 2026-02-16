'use client';

import { OTP_INFO_NAME } from '@components/activation/pages/constants';
import Otp3Container from '@components/activation/pages/otp/Otp3Container';
import { OtpInfoTypes } from '@components/activation/pages/types';
import { useRouter } from 'next/navigation';

const Otp3 = () => {
  // # انتخاب همراه/ ایمیل
  const router = useRouter();

  const otp3CompleteHandler = (isPhone: boolean) => {
    const info: OtpInfoTypes = { identity: '', isRegister: false, password: '', isPhone };
    sessionStorage.setItem(OTP_INFO_NAME, JSON.stringify(info));
    router.push('otp_1');
  };

  return (
    <>
      <Otp3Container otp3CompleteHandler={otp3CompleteHandler} />
    </>
  );
};

export default Otp3;
