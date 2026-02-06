import { useEffect } from 'react';

import { RoutinItemResponseTypes } from '@components/pages/nestedRoutes/routin/RoutinItemContainer/__hooks__/useGetData/types';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useGetPairRoutinItemData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const searchData = getQueryParams('searchData');

  const params = searchData ? new URLSearchParams(searchData) : null;
  const programId = params ? params.get('catId') : '';
  const api = searchData ? `widgets/womanpairprogram/item/info?${searchData}` : '';

  const { callApi, isLoading, data } = usePwaApi<RoutinItemResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['pairRoutinItem'],
  });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data, programId };
};

export default useGetPairRoutinItemData;
