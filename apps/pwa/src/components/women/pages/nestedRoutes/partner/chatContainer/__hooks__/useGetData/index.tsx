import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useParams, useRouter } from 'next/navigation';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const router = useRouter();
  const { chatId } = useParams();

  const { data, isLoading } = useApi<ResponsePropsType>({
    api: `challenge/${chatId}/chat`,
    method: 'GET',
    queryKey: [`chat-${chatId}`],
  });

  useEffect(() => {
    if (!isLoading && !data) {
      // todo router.replace('/not-found');
    }
  }, [isLoading, data]);

  return { data, isLoading };
};

export default useGetData;
