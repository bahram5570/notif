import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { isLoading, data } = usePwaApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['partnerSection'],
    api: 'partner',
  });

  return { isLoading, data };
};

export default useGetData;
