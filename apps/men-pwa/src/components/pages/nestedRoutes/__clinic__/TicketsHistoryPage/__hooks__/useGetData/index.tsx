import { TicketsHistoryResponseTypes } from '@repo/core/components/clinic';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useGetData = () => {
  const { isLoading, data } = usePwaApi<TicketsHistoryResponseTypes>({
    method: 'GET',
    queryKey: ['ticketsHistory'],
    api: 'advice/tickets/0/10000/-1',
  });

  return { isLoading, data };
};

export default useGetData;
