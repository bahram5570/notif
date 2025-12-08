import { useEffect, useState } from 'react';

import useCustomToast from '@hooks/useCustomToast';

import { PayloadDataTypes } from './types';

const useGetData = ({ giftUrl }: { giftUrl: string }) => {
  const { onToast } = useCustomToast();

  const [isLoading, setIsLoading] = useState(false);
  const [giftData, setGiftData] = useState<PayloadDataTypes>();
  const SERVER_URL = 'https://weareimpo.ir';

  const getData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${SERVER_URL}/gift/${giftUrl}`, { method: 'GET' });

      const data = await response.json();
      setGiftData(data);
    } catch (error) {
      onToast({ type: 'error', message: 'خطا در دریافت اطلاعات' });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { giftData, isLoading };
};

export default useGetData;
