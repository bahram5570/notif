'use client';

import { useState } from 'react';

import useCustomToast from '@hooks/useCustomToast';

import { UsePhoneSubmitOptions } from './types';

export function usePhoneSubmit({ onSuccess }: UsePhoneSubmitOptions) {
  const { onToast } = useCustomToast();

  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = value.length === 11;

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!isValid) {
      onToast({ type: 'error', message: 'شماره باید ۱۱ رقم باشد' });
      return;
    }

    setIsSubmitting(true);

    try {
      await onSuccess(value);
    } catch (err) {
      onToast({ type: 'error', message: 'خطا در ارسال کد' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    value,
    setValue,
    isValid,
    isSubmitting,
    submit,
    handleSubmit: submit,
  };
}
