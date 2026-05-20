import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams } from 'next/navigation';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const router = useCustomRouter();
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
