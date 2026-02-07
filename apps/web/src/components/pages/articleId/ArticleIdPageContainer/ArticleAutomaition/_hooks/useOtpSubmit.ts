import { useState } from 'react';

import useCustomToast from '@hooks/useCustomToast';

type OnSuccess = () => void | Promise<void>;

export function useOtpSubmit(onSuccess: OnSuccess) {
  const { onToast } = useCustomToast();

  const [submitLoading, setSubmitLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorShake, setIsErrorShake] = useState(false);

  const handleSubmit = async (code: string[]) => {
    const full = code.join('');
    if (full.length !== 6) {
      onToast({ type: 'error', message: '۶ رقم وارد کنید' });
      setIsErrorShake(true);
      setTimeout(() => setIsErrorShake(false), 600);
      return;
    }

    setSubmitLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1200));
      setIsSuccess(true);
      setTimeout(onSuccess, 1200);
    } catch {
      onToast({ type: 'error', message: 'کد اشتباه است' });
      setIsErrorShake(true);
      setTimeout(() => setIsErrorShake(false), 600);
    } finally {
      setSubmitLoading(false);
    }
  };

  return { submitLoading, isSuccess, isErrorShake, handleSubmit };
}
