'use client';

import { useState } from 'react';

import { useSendOtp } from './useSendOtp';

export function usePhoneSubmit(onSuccess: () => void) {
  const [value, setValue] = useState('');
  const { isSending, sendOtp } = useSendOtp();

  const isValid = value.length === 11;

  const submit = async (e?: React.FormEvent, categoryId?: string) => {
    e?.preventDefault();

    if (!isValid) {
      return;
    }

    const success = await sendOtp(value, categoryId);
    
    if (success) {
      onSuccess();
    }
  };

  return {
    value,
    setValue,
    isValid,
    isSubmitting: isSending,
    submit,
  };
}
