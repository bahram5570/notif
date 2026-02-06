import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { TicketsHistoryResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = usePwaApi<TicketsHistoryResponseTypes>({
    method: 'GET',
    queryKey: ['ticketsHistory'],
    api: 'advice/tickets/0/10000/-1',
  });

  return { isLoading, data };
};

export default useGetData;
