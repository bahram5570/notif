'use client';

import { useState } from 'react';

import { useSendOtp } from './useSendOtp';

export function usePhoneSubmit(onSuccess: (phone: string, sentOtpId?: string) => void) {
  const [phoneValue, setPhoneValue] = useState('');
  const { isSending, sendOtp } = useSendOtp();

  const isValid = phoneValue.length === 11;

  const submit = async (e?: React.FormEvent, categoryId?: string) => {
    e?.preventDefault();
    const { success, id } = await sendOtp(phoneValue, categoryId);
    if (success) {
      onSuccess(phoneValue, id);
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
