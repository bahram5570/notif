import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { FeatureIntroResponseType } from './type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const searchData = getQueryParams('searchData');

  const api = searchData ? `feature/trailonboarding/page?${searchData}` : '';

  const { data, isLoading, callApi } = usePwaApi<FeatureIntroResponseType>({
    api: api,
    method: 'GET',
    queryKey: ['trailonboardingData'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { data, isLoading };
};

export default useGetData;
