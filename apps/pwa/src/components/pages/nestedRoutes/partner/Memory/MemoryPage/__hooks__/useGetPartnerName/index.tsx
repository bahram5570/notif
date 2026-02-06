import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponsePropsType } from './type';

const useGetPartnerName = () => {
  const { isLoading, data: partnerName } = usePwaApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['partnerSection'],
    api: 'partner',
  });

  return { isLoading, partnerName };
};

export default useGetPartnerName;
