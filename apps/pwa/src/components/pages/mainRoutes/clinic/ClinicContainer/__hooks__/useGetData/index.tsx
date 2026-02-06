import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ClinicResponseTypes } from './types';

const useGetData = () => {
  const { data, isLoading } = usePwaApi<ClinicResponseTypes>({
    api: 'advice/newclinicv1',
    queryKey: ['clinic'],
    method: 'GET',
  });

  return { isLoading, data };
};

export default useGetData;
