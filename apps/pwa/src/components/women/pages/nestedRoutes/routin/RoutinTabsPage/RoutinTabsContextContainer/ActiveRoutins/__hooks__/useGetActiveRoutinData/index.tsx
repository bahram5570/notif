import useApi from '@hooks/useApi';

import { ActiveRoutinResponseType } from './type';

const useGetActiveRoutinData = () => {
  const { data, isLoading } = useApi<ActiveRoutinResponseType>({
    api: 'widgets/program/pages/active',
    method: 'GET',
    queryKey: ['activeRoutin'],
  });
  return { data, isLoading };
};

export default useGetActiveRoutinData;
