import { useState } from 'react';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './types';

const useSubmit = () => {
  const { notifyToastHandler } = useCustomToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const SERVER_URL = 'https://weareimpo.ir';

  const submit = async (payload: PayloadDataTypes) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${SERVER_URL}/gift/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.isValid) {
        router.push(data.backUrl);
        setIsLoading(false);
      } else {
        notifyToastHandler({ type: 'error', message: 'خطا در ارسال اطلاعات' });
        setIsLoading(false);
      }
    } catch (err) {
      notifyToastHandler({ type: 'error', message: 'مشکلی پیش آمد، دوباره تلاش کنید.' });
      setIsLoading(false);
    }
  };

  return { submit, isLoading };
};

export default useSubmit;
