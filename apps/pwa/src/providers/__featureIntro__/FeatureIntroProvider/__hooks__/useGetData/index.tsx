import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { FeatureIntroResponseType } from './type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const searchData = getQueryParams('searchData');

  const api = searchData ? `feature/trailonboarding/page?${searchData}` : '';

  const { data, isLoading, callApi } = useApi<FeatureIntroResponseType>({
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
