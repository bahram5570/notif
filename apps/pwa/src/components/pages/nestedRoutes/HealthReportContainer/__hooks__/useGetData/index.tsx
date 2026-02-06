import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { HealthReportResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = usePwaApi<HealthReportResponseTypes>({
    api: 'widgets/healthreport',
    queryKey: ['healthReport'],
    method: 'GET',
  });

  return { isLoading, data };
};

export default useGetData;
