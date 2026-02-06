import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { PartnerCodeResponseType } from './type';

const useGetData = () => {
  const {
    data,
    isLoading,
    callApi: getData,
  } = usePwaApi<PartnerCodeResponseType>({
    method: 'GET',
    api: 'partner/code',
    queryKey: ['partnerCode'],
  });

  useEffect(() => {
    getData();
  }, []);

  return { data, getData, isLoading };
};

export default useGetData;
