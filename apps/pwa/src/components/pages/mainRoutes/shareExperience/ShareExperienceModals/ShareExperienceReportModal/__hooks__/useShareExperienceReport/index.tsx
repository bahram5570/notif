import { useEffect, useState } from 'react';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

const useShareExperienceReport = () => {
  const router = useRouter();
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
