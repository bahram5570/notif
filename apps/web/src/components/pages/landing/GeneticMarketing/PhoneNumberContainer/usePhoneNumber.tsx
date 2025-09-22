'use client';

import { useState } from 'react';

import { toEnglishNumbers } from '@utils/numbers';

import { useRouter } from 'next/navigation';

export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const router = useRouter();

  const valueHandler = (v: string) => {
    if (v.length > 11) return;
    setPhoneNumber(v);
  };

  const submitHandler = () => {
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
