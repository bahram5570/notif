import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams } from 'next/navigation';

import { ChatResponseTypes } from './type';

const useGetData = () => {
  const ticketId = useParams()?.ticketId;
  const router = useCustomRouter();

  const errorHandler = () => {
    router.replace('/not-found');
  };

  const { data, isLoading } = usePwaApi<ChatResponseTypes>({
    api: `support/ticket/${ticketId}`,
    method: 'GET',
    queryKey: [`ticketDetail`],
    onError: errorHandler,
  });

  return { data, isLoading };
};

export default useGetData;
