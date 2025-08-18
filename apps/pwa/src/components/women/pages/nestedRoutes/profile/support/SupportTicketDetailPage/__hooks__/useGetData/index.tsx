import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useParams, useRouter } from 'next/navigation';

import { ChatResponseTypes } from './type';

const useGetData = () => {
  const { ticketId } = useParams();
  const router = useRouter();

  const { data, isLoading } = useApi<ChatResponseTypes>({
    api: `support/ticket/${ticketId}`,
    method: 'GET',
    queryKey: [`ticketDetail`],
  });

  useEffect(() => {
    if (!isLoading && !data) {
      router.replace('/not-found');
    }
  }, [isLoading, data]);

  return { data, isLoading };
};

export default useGetData;
