import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams, useRouter } from 'next/navigation';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const router = useRouter();
  const chatId = useParams()?.chatId;

  const errorHandler = () => {
    router.replace('/not-found');
  };

  const { data, isLoading } = usePwaApi<ResponsePropsType>({
    api: `challenge/${chatId}/chat`,
    method: 'GET',
    queryKey: [`chat-${chatId}`],
    onError: errorHandler,
  });

  return { data, isLoading };
};

export default useGetData;
