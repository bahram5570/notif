import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useParams, useRouter } from 'next/navigation';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const router = useRouter();
  const chatId = useParams()?.chatId;

  const errorHandler = () => {
    router.replace('/not-found');
  };

  const { data, isLoading } = useApi<ResponsePropsType>({
    api: `challenge/${chatId}/chat`,
    method: 'GET',
    queryKey: [`chat-${chatId}`],
    onError: errorHandler,
  });

  return { data, isLoading };
};

export default useGetData;
