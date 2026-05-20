import { useEffect, useState } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useShareExperienceReport = () => {
  const router = useCustomRouter();
  const toast = useCustomToast();
  const [api, setApi] = useState<null | string>(null);

  const successHandler = () => {
    toast.notifyToastHandler({ message: 'پست با موفقیت ریپورت شد' });
    router.back();
    setApi(null);
  };

  const errorHandler = () => {
    setApi(null);
  };

  const { isLoading, callApi } = usePwaApi({
    method: 'GET',
    api: api || '',
    fetchOnMount: false,
    onError: errorHandler,
    onSuccess: successHandler,
    queryKey: ['report' + api],
  });

  useEffect(() => {
    if (api !== null) {
      callApi();
    }
  }, [api]);

  const reportHandler = (id: string) => {
    setApi(`shareeexperience/v3/experience/report/${id}`);
  };

  return { reportHandler, isLoading };
};

export default useShareExperienceReport;
