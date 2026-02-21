import { SERVER_URL } from '@constants/links.constants';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './types';

const useSubmit = () => {
  const { notifyToastHandler } = useCustomToast();
  const router = useRouter();

  const handleSubmit = async (payload: PayloadDataTypes) => {
    const token = Cookies.get('geneticToken');

    const response = await fetch(`${SERVER_URL}/Landing/genetictest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.valid) {
      router.push('/landing/genetic/result');
    } else {
      notifyToastHandler({ type: 'error', message: 'خطا در ارسال اطلاعات' });
    }
  };

  return { handleSubmit };
};

export default useSubmit;
