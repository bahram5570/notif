import { useEffect, useState } from 'react';

import { OTP_INFO_NAME } from '@components/activation/pages/constants';
import { OtpInfoTypes } from '@components/activation/pages/types';

const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState(true);

  useEffect(() => {
    const hasStoredData = typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(OTP_INFO_NAME);
    const initialData = hasStoredData ? (JSON.parse(hasStoredData) as OtpInfoTypes).isPhone : true;
    setIsPhone(initialData);
  }, []);

  const scripts = {
    title: `${isPhone ? 'شماره همراهت' : 'ایمیلت'} رو وارد کن تا کد ورود به ایمپو رو برات ${isPhone ? 'پیامک' : 'ایمیل'} کنیم`,
    description: `${isPhone ? 'شماره همراهت' : 'ایمیلت'} رو وارد کن`,
    subtitle: '',
  };

  return { isPhone, scripts };
};

export default useIsPhone;
