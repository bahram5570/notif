import { useEffect, useState } from 'react';

import { OTP_INFO_NAME } from '@components/activation/pages/constants';
import { OtpInfoTypes } from '@components/activation/pages/types';
import { useRouter } from 'next/navigation';

const useOtpInfo = () => {
  const router = useRouter();
  const [otpInfo, setOtpInfo] = useState<null | OtpInfoTypes>(null);

  useEffect(() => {
    const storedData = typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(OTP_INFO_NAME);
    const initialData = storedData ? (JSON.parse(sessionStorage.getItem(OTP_INFO_NAME) || '') as OtpInfoTypes) : null;

    if (initialData === null) {
      router.back();
    } else {
      setOtpInfo(initialData);
    }
  }, []);

  return { ...otpInfo };
};

export default useOtpInfo;
