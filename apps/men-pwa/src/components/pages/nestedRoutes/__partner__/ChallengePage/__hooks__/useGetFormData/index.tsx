import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ChallengeFormResponseType } from './type';

const useGetFormData = () => {
  const { data, isLoading } = usePwaApi<ChallengeFormResponseType>({
    method: 'GET',
    queryKey: ['challengeForm'],
    api: 'challenge/form',
  });

  return { data, isLoading };
};

export default useGetFormData;
