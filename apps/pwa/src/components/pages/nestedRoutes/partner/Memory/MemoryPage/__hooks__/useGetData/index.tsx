import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { MEMORY_PAGE_SIZE, PAGE_NO } from './constants';
import { MemoriesDataType, ResponsePropsType } from './type';

const useGetData = () => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['meories']);

  const memoriesData = getQuery<MemoriesDataType>({ queryKey: ['meories'] });

  const successHandler = (v: ResponsePropsType) => {
    sessionStorage.setItem(PAGE_NO, JSON.stringify(pageNo));
    setTotalCount(v.count);

    if (memoriesData) {
      const list = { memories: [...memoriesData.memories, ...v.memories] };
      updateQuery({ queryKey: ['meories'], payload: list });
    } else {
      newQuery({ payload: { memories: v.memories }, queryKey: ['meories'] });
    }
  };

  const api = `memory/${pageNo}/${MEMORY_PAGE_SIZE}`;

  const { callApi, isLoading: apiLoading } = usePwaApi<ResponsePropsType>({
    api,
    method: 'GET',
    onSuccess: successHandler,
    queryKey: ['meories' + pageNo],
  });

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, apiLoading]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(PAGE_NO);
    };
  }, []);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const isLoading = apiLoading && pageNo === 0;

  return { memoriesData, isLoading, totalCount, pageNo, updatePageNo };
};

export default useGetData;
