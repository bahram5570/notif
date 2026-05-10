import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ChallengeResponseType } from './type';

const useGetPartnerData = () => {
  const { isLoading, data } = usePwaApi<ChallengeResponseType>({
    method: 'GET',
    queryKey: ['partnerKey'],
    api: 'challenge/v1',
  });

  return { isLoading, data };
};

export default useGetPartnerData;
