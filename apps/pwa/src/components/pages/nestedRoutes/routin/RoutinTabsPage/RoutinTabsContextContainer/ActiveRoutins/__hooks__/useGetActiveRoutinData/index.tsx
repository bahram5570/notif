import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ActiveRoutinResponseType } from './type';

const useGetActiveRoutinData = () => {
  const { data, isLoading } = usePwaApi<ActiveRoutinResponseType>({
    api: 'widgets/program/pages/active',
    method: 'GET',
    queryKey: ['activeRoutin'],
  });
  return { data, isLoading };
};

export default useGetActiveRoutinData;
