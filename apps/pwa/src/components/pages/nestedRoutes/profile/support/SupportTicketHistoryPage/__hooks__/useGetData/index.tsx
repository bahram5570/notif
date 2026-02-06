import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { data, isLoading } = usePwaApi<ResponsePropsType>({
    api: 'support/tickets/0/1000',
    method: 'GET',
    queryKey: ['ticketHistory'],
  });
  return { data, isLoading };
};

export default useGetData;
