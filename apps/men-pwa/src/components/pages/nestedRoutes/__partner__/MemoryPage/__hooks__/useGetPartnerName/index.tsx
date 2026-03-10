import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { PartnerDetailResponsePropsType } from './type';

const useGetPartnerName = () => {
  const { newQuery, getQuery } = useCustomReactQuery(['partnerDetail']);

  const partnerDetail = getQuery<PartnerDetailResponsePropsType>({ queryKey: ['partnerDetail'] });

  const successHandler = (v: PartnerDetailResponsePropsType) => {
    newQuery({ payload: v, queryKey: ['partnerDetail'] });
  };

  const { isLoading } = usePwaApi<PartnerDetailResponsePropsType>({
    method: 'GET',
    queryKey: ['partnerSection'],
    api: 'partner',
    onSuccess: successHandler,
  });

  return { isLoading, partnerDetail };
};

export default useGetPartnerName;
