import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SubscriptionResponseTypes } from './types';

const useGetData = () => {
  const { updateQuery } = useCustomReactQuery();

  const { data, isLoading: isLoadingPage } = usePwaApi<SubscriptionResponseTypes>({
    method: 'GET',
    queryKey: ['subscription'],
    api: 'info/subscribtions_v5',
  });

  const discountSuccessHandler = (v: SubscriptionResponseTypes) => {
    updateQuery({ queryKey: ['subscription'], payload: { ...v, dummyData: Math.random() } });
  };

  const { callApi: callApiDiscount, isLoading: isDiscountLoading } = usePwaApi({
    method: 'POST',
    api: 'info/subscribtions_v5',
    onSuccess: discountSuccessHandler,
  });

  return { isLoadingPage, data, callApiDiscount, isDiscountLoading };
};

export default useGetData;
