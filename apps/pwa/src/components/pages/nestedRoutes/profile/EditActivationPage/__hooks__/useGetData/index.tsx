import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { EditActivationResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = usePwaApi<EditActivationResponseTypes>({
    method: 'GET',
    queryKey: ['editActivation'],
    api: 'profile/woman/activation/questions',
  });

  return { isLoading, data };
};

export default useGetData;
