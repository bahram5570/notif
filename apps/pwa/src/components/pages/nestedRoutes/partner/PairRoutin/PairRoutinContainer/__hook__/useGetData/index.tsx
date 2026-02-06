import { useEffect } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PairRoutinResponsive } from './type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getQuery, newQuery } = useCustomReactQuery();

  const searchData = getQueryParams('searchData');

  const api = searchData ? `widgets/womanpairprogram/items?${searchData}` : '';

  const successHandler = (v: PairRoutinResponsive) => {
    newQuery({ queryKey: ['pairRoutinItems'], payload: v });
  };

  const { callApi, isLoading } = usePwaApi<PairRoutinResponsive>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['pairRoutin'],
    onSuccess: (v: PairRoutinResponsive) => successHandler(v),
  });

  const data = getQuery<PairRoutinResponsive>({ queryKey: ['pairRoutinItems'] });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data };
};

export default useGetData;
