'use client';

import { useState } from 'react';

import { toEnglishNumbers } from '@utils/numbers';

import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

export const usePhoneNumber = () => {
  const { onToast } = useCustomToast();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const router = useRouter();

  const valueHandler = (v: string) => {
    if (v.length > 11) return;
    setPhoneNumber(v);
  };

  const validatePhoneNumber = () => {
    const normalizedPhone = toEnglishNumbers(phoneNumber).trim();

    if (!normalizedPhone.startsWith('09')) {
      onToast({ message: 'شماره باید با 09 شروع شود', type: 'error' });
      return false;
    }

    if (normalizedPhone.length < 11) {
      onToast({ message: 'شماره همراه باید 11 رقم باشد', type: 'error' });
      return false;
    }

    return true;
  };

  const submitHandler = () => {
    if (!validatePhoneNumber()) return;
    const userData = {
      phoneNumber: toEnglishNumbers(phoneNumber),
      womanStatus: null,
    };

    localStorage.setItem('geneticUserData', JSON.stringify(userData));

    router.push('/landing/geneticMarketing/womanStatus');
  };

  return {
    phoneNumber,
    valueHandler,
    submitHandler,
  };
};
