'use client';

import { useState } from 'react';

import useApi from '@hooks/useApi';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';

import { VerifyOtpResponse } from './types';

export function useOtpSubmit(onSuccess: () => void, sentOtpId: string) {
  const { notifyToastHandler } = useCustomToast();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorShake, setIsErrorShake] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [link, setLink] = useState<string | undefined>(undefined);

  const { callApi } = useApi({
    method: 'POST',
    url: 'article/contentcategory/validateotp',
    onSuccess: (response: VerifyOtpResponse) => {
      if (response.valid) {
        setIsSuccess(true);
        if (response.link) {
          setLink(response.link);
        }
        setTimeout(onSuccess, 1200);
      } else {
        notifyToastHandler({ type: 'error', message: response.message || 'کد نامعتبر است' });
        setIsErrorShake(true);
        setTimeout(() => setIsErrorShake(false), 600);
      }
    },
    onError: (err) => {
      notifyToastHandler({
        type: 'error',
        message: err?.message || 'خطا در تأیید کد',
      });
      setIsErrorShake(true);
      setTimeout(() => setIsErrorShake(false), 600);
    },
  });

  const handleSubmit = async (code: string[]) => {
    const full = code.join('');
    if (full.length !== 6) {
      notifyToastHandler({ type: 'error', message: '۶ رقم وارد کنید' });
      setIsErrorShake(true);
      setTimeout(() => setIsErrorShake(false), 600);
      return;
    }

    setSubmitLoading(true);

    try {
      await callApi({
        id: sentOtpId,
        code: full,
      });
    } finally {
      setSubmitLoading(false);
    }
  };

  return { link, submitLoading, isSuccess, isErrorShake, handleSubmit };
}
