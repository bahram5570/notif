'use client';

import { toEnglishNumbers } from '@utils/numbers';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';

import { SendOtpTyps } from './types';

export function useSendOtp() {
  const { onToast } = useCustomToast();

  let resolver: ((value: SendOtpTyps) => void) | null = null;

  const { isLoading, callApi } = useApi({
    method: 'POST',
    url: 'article/contentcategory/otp',

    onSuccess: (response: SendOtpTyps) => {
      if (response.valid) {
        onToast({
          type: 'success',
          message: 'کد تایید با موفقیت ارسال شد',
        });
      }

      resolver?.(response);
    },

    onError: (err) => {
      onToast({
        type: 'error',
        message: err?.message || 'خطا در ارسال کد تأیید',
      });
    },
  });

  const sendOtp = async (phone: string, contentCategoryId?: string): Promise<{ success: boolean; id?: string }> => {
    if (!phone || phone.length !== 11) {
      onToast({ type: 'error', message: 'شماره باید ۱۱ رقم باشد' });
      return { success: false };
    }

    const response = await new Promise<SendOtpTyps>((resolve) => {
      resolver = resolve;

      callApi({
        phone: toEnglishNumbers(phone),
        categoryId: contentCategoryId,
      });
    });

    if (response.valid) {
      return { success: true, id: response.id };
    }

    return { success: false };
  };

  return {
    isSending: isLoading,
    sendOtp,
  };
}
