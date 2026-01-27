import useApi from '@hooks/useApi';

import { ConfigResponseType } from './type';

const useConfigNewExperience = () => {
  const { data, isLoading } = useApi<ConfigResponseType>({
    api: 'shareeexperience/v3/experience/config',
    method: 'GET',
    queryKey: ['configNewExperience'],
  });

  const config = data;
  return { config, configLoading: isLoading };
};

export default useConfigNewExperience;
