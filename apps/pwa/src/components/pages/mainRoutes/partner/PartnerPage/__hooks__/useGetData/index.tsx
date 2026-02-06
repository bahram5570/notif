import { useEffect } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ChallengeResponseType } from './type';

const useGetData = () => {
  const { newQuery, getQuery } = useCustomReactQuery(['partner']);

  const {
    isLoading,
    data: partnerInfo,
    callApi,
  } = usePwaApi<ChallengeResponseType>({
    method: 'GET',
    queryKey: ['partnerKey'],
    api: 'challenge/v1',
  });

  const data = getQuery<ChallengeResponseType>({ queryKey: ['partner'] });

  useEffect(() => {
    if (partnerInfo) {
      newQuery({ payload: partnerInfo, queryKey: ['partner'] });
    } else {
      callApi();
    }
  }, [partnerInfo]);

  return { isLoading, data };
};

export default useGetData;
