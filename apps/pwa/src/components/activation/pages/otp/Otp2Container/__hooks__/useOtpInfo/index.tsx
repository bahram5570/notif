import { useEffect, useState } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { OtpInfoTypes } from '../../../Otp1Container/types';
import { OTP_INFO_NAME } from '../../../constants';

const useOtpInfo = () => {
  const router = useCustomRouter();
  const [otpInfo, setOtpInfo] = useState<null | OtpInfoTypes>(null);

  useEffect(() => {
    const initialData =
      typeof sessionStorage === 'undefined'
        ? null
        : sessionStorage.getItem(OTP_INFO_NAME)
          ? (JSON.parse(sessionStorage.getItem(OTP_INFO_NAME) || '') as OtpInfoTypes)
          : null;

    if (initialData === null) {
      // router.back();
    } else {
      setOtpInfo(initialData);
    }
  }, []);

  return { ...otpInfo };
};

export default useOtpInfo;
