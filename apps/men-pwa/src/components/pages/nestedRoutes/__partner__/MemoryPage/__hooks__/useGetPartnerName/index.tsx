import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { PartnerDetailResponsePropsType } from './type';

const useGetPartnerName = () => {
  const { isLoading, data: partnerDetail } = usePwaApi<PartnerDetailResponsePropsType>({
    method: 'GET',
    queryKey: ['partnerSection'],
    api: 'partner',
  });

  return { isLoading, partnerDetail };
};

export default useGetPartnerName;
