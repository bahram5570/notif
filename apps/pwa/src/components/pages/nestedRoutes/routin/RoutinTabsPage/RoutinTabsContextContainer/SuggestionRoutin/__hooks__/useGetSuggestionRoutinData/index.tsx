import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@components/infiniteScrollContainer/constatns';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { RecommendedRoutinResponseType } from './type';

const useGetSuggestionRoutinData = () => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery();

  const data = getQuery<RecommendedRoutinResponseType>({ queryKey: ['recommendedRoutin'] });

  const successHandler = (v: RecommendedRoutinResponseType) => {
    if (pageNo > 0 && data) {
      const list = { ...v, programs: [...data.programs, ...v.programs] };
      updateQuery({ queryKey: ['recommendedRoutin'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['recommendedRoutin'] });
    }
  };

  const { isLoading, callApi } = usePwaApi<RecommendedRoutinResponseType>({
    api: `widgets/program/pages/recommended?pageNo=${pageNo}&pageSize=${PAGE_SIZE}`,
    method: 'GET',
    queryKey: ['recommended'],
    onSuccess: successHandler,
  });

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  useEffect(() => {
    callApi();
  }, [pageNo]);

  const isFirstLoad = isLoading && !data;

  return { data, isLoading, updatePageNo, pageNo, callApi, isFirstLoad };
};

export default useGetSuggestionRoutinData;
