import { useEffect, useState } from 'react';

import useCustomToast from '@hooks/useCustomToast';

import { PayloadDataTypes } from './types';

const useGetData = ({ giftUrl }: { giftUrl: string }) => {
  const { onToast } = useCustomToast();

  const [isLoading, setIsLoading] = useState(true);
  const [giftData, setGiftData] = useState<PayloadDataTypes>();
  const SERVER_URL = 'https://weareimpo.ir';

  const getData = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/gift/${giftUrl}`, { method: 'GET' });

      const data = await response.json();
      if (data.valid) {
        setGiftData(data);
      } else {
        onToast({ type: 'error', message: 'خطا در دریافت اطلاعات' });
      }
    } catch (error) {
      onToast({ type: 'error', message: 'خطا در دریافت اطلاعات' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { giftData, isLoading };
};

export default useGetData;
