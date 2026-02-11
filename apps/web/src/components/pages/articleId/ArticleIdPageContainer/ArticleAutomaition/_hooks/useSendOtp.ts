'use client';

import { toEnglishNumbers } from '@utils/numbers';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';

export function useSendOtp() {
  const { onToast } = useCustomToast();

  const { isLoading, callApi } = useApi({
    method: 'POST',
    url: 'article/contentcategory/otp',
    onSuccess: (response) => {
      console.log('OTP ارسال شد:', response);
    },
    onError: (err) => {
      onToast({
        type: 'error',
        message: err?.message || 'خطا در ارسال کد تأیید',
      });
    },
  });

  const sendOtp = async (phone: string, contentCategoryId?: string) => {
    if (!phone || phone.length !== 11) {
      onToast({ type: 'error', message: 'شماره باید ۱۱ رقم باشد' });
      return false;
    }

    try {
      await callApi({
        phone: toEnglishNumbers(phone),
        categoryId: contentCategoryId,
      });
      return true; 
    } catch {
      return false; 
    }
  };

  return {
    isSending: isLoading,
    sendOtp,
  };
}
