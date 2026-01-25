import useApi from '@hooks/useApi';

import { ChallengeFormResponseType } from './type';

const useGetFormData = () => {
  const { data, isLoading } = useApi<ChallengeFormResponseType>({
    method: 'GET',
    queryKey: ['challengeForm'],
    api: 'challenge/form',
  });

  return { data, isLoading };
};

export default useGetFormData;
