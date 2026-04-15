import { ChatResponseTypes } from '@repo/core/components/clinic';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const ticketId = getQueryParams('ticketId');

  const { isLoading, data } = usePwaApi<ChatResponseTypes>({
    method: 'GET',
    queryKey: ['chats'],
    api: `advice/ticket/${ticketId}`,
  });

  return { isLoading, data };
};

export default useGetData;
