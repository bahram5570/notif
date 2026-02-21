'use client';

import { useState } from 'react';

import { toEnglishNumbers } from '@utils/numbers';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { useRouter } from 'next/navigation';

export const useSendPhone = () => {
  const { notifyToastHandler } = useCustomToast();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>();
  const router = useRouter();

  const valueHandler = (v: string) => {
    if (v.length > 11) return;
    setPhoneNumber(v);
  };

  const validatePhoneNumber = () => {
    const normalizedPhone = toEnglishNumbers(phoneNumber).trim();

    if (!normalizedPhone.startsWith('09')) {
      notifyToastHandler({ message: 'شماره باید با 09 شروع شود', type: 'error' });
      return false;
    }

    if (normalizedPhone.length < 11) {
      notifyToastHandler({ message: 'شماره همراه باید 11 رقم باشد', type: 'error' });
      return false;
    }

    return true;
  };

  const submitHandler = () => {
    if (!validatePhoneNumber()) return;
    setIsLoading(true);
    sessionStorage.setItem('phone', toEnglishNumbers(phoneNumber));
    router.push('/landing/blackfriday/survey');
  };

  return {
    phoneNumber,
    valueHandler,
    submitHandler,
    isLoading,
  };
};
