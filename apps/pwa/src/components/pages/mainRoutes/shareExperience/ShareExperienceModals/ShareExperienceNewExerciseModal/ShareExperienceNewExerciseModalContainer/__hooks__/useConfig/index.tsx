import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ConfigResponseType } from './type';

const useConfigNewExperience = () => {
  const { data, isLoading } = usePwaApi<ConfigResponseType>({
    api: 'shareeexperience/v3/experience/config',
    method: 'GET',
    queryKey: ['configNewExperience'],
  });

  const config = data;
  return { config, configLoading: isLoading };
};

export default useConfigNewExperience;
