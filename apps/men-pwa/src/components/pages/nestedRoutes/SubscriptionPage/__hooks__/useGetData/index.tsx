import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SubscriptionResponseTypes } from './types';

const useGetData = () => {
  const { data, isLoading: isLoadingPage } = usePwaApi<SubscriptionResponseTypes>({
    method: 'GET',
    queryKey: ['subscription'],
    api: 'info/subscribtions_v5',
  });

  return { isLoadingPage, data };
};

export default useGetData;
