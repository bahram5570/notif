import { useState } from 'react';

import useCustomToast from '@hooks/useCustomToast';

type ResetTimerFn = (seconds?: number) => void;
type ResetCodeFn = () => void;

export function useOtpResend(resetTimer: ResetTimerFn, resetCode: ResetCodeFn, onError?: (message: string) => void) {
  const { onToast } = useCustomToast();
  const [resendLoading, setResendLoading] = useState(false);

  const handleResend = async () => {
    setResendLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1200));

      resetTimer(60);
      resetCode();
    } catch {
      const msg = 'خطا در ارسال مجدد کد';
      if (onError) onError(msg);
      else onToast({ type: 'error', message: msg });
    } finally {
      setResendLoading(false);
    }
  };

  return { resendLoading, handleResend };
}
