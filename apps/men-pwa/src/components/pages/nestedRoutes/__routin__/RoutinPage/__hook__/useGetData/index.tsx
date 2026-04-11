import { useEffect } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SEARCH_DATA } from '../../constant';
import { PairRoutinResponsive } from './type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getQuery, newQuery } = useCustomReactQuery(['manHealthProgramItems']);

  const searchData = getQueryParams('searchData');

  const api = searchData ? `widgets/manhealthprogram/items?${searchData}` : '';

  const successHandler = (v: PairRoutinResponsive) => {
    newQuery({ queryKey: ['manHealthProgramItems'], payload: v });
  };

  const { callApi, isLoading } = usePwaApi<PairRoutinResponsive>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['manHealthProgram'],
    onSuccess: (v: PairRoutinResponsive) => successHandler(v),
  });

  const data = getQuery<PairRoutinResponsive>({ queryKey: ['manHealthProgramItems'] });

  useEffect(() => {
    if (api.length > 0) {
      sessionStorage.setItem(SEARCH_DATA, JSON.stringify(searchData));
      callApi();
    }
  }, [api]);

  return { isLoading, data };
};

export default useGetData;
