'use client';

import { useState } from 'react';

import { useSendOtp } from './useSendOtp';

export function usePhoneSubmit(onSuccess: () => void) {
  const [phoneValue, setPhoneValue] = useState('');
  const { isSending, sendOtp } = useSendOtp();

  const isValid = phoneValue.length === 11;

  const submit = async (e?: React.FormEvent, categoryId?: string) => {
    e?.preventDefault();

    if (!isValid) {
      return;
    }

    const success = await sendOtp(phoneValue, categoryId);

    if (success) {
      onSuccess();
    }
  };

  return {
    phoneValue,
    setPhoneValue,
    isValid,
    isSubmitting: isSending,
    submit,
  };
}
