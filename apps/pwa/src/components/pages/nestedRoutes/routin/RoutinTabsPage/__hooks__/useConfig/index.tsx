import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { TabsConfigResponseTypes } from './type';

const useConfig = () => {
  const { data, isLoading } = usePwaApi<TabsConfigResponseTypes>({
    api: 'widgets/program/pages/config',
    method: 'GET',
    queryKey: ['routinTabConfig'],
  });

  return { data, isLoading };
};

export default useConfig;
