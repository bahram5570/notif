import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { CategorybannerResponseType } from './type';

const useGetBannerList = () => {
  const { callApi, data } = useApi<CategorybannerResponseType>({
    url: 'support/article/categorybanner/public',
    method: 'GET',
  });

  useEffect(() => {
    callApi();
  }, []);

  return { items: data?.items };
};

export default useGetBannerList;
