import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RoutinResponseTypes } from './types';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getQuery, newQuery } = useCustomReactQuery();

  const searchData = getQueryParams('searchData');

  const api = searchData ? `widgets/program/items?${searchData}` : '';

  const successHandler = (v: RoutinResponseTypes) => {
    newQuery({ queryKey: ['routinItems'], payload: v });
  };

  const { callApi, isLoading } = useApi<RoutinResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['routin'],
    onSuccess: (v: RoutinResponseTypes) => successHandler(v),
  });

  const data = getQuery<RoutinResponseTypes>({ queryKey: ['routinItems'] });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data };
};

export default useGetData;
