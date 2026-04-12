import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PairRoutinItemResponseTypes } from './type';

const useGetPairRoutinItemData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const searchData = getQueryParams('searchData');

  const params = searchData ? new URLSearchParams(searchData) : null;
  const programId = params ? params.get('catId') : '';
  const api = searchData ? `widgets/manhealthprogram/item/info?${searchData}` : '';

  const { callApi, isLoading, data } = usePwaApi<PairRoutinItemResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['manhealthprogramItem'],
  });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data, programId };
};

export default useGetPairRoutinItemData;
