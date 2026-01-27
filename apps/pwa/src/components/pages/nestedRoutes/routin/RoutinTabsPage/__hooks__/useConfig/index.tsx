import useApi from '@hooks/useApi';

import { TabsConfigResponseTypes } from './type';

const useConfig = () => {
  const { data, isLoading } = useApi<TabsConfigResponseTypes>({
    api: 'widgets/program/pages/config',
    method: 'GET',
    queryKey: ['routinTabConfig'],
  });

  return { data, isLoading };
};

export default useConfig;
