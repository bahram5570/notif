import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams, useRouter } from 'next/navigation';

import { ChatResponseTypes } from './type';

const useGetData = () => {
  const ticketId = useParams()?.ticketId;
  const router = useRouter();

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
