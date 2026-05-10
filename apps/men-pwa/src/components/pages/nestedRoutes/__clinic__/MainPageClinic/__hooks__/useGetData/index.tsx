import { ClinicResponseTypes } from '@repo/core/components/clinic';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useGetData = () => {
  const { data, isLoading } = usePwaApi<ClinicResponseTypes>({
    api: 'advice/newclinicv1',
    queryKey: ['clinic'],
    method: 'GET',
  });

  return { isLoading, data };
};

export default useGetData;
