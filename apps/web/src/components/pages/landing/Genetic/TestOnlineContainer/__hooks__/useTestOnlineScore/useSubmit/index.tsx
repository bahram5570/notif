import { SERVER_URL, STAGE_URL } from '@constants/links.constants';
import useCustomToast from '@hooks/useCustomToast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './types';

const useSubmit = () => {
  const { onToast } = useCustomToast();
  const router = useRouter();

  const handleSubmit = async (payload: PayloadDataTypes) => {
    const token = Cookies.get('geneticToken');

    const response = await fetch(`${STAGE_URL}/Landing/genetictest`, {
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
      onToast({ type: 'error', message: 'خطا در ارسال اطلاعات' });
    }
  };

  return { handleSubmit };
};

export default useSubmit;
