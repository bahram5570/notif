import { useEffect, useState } from 'react';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';
import { useRouter } from 'next/navigation';

import { SuccessResponseType } from './type';

const useShareExperienceReport = () => {
  const router = useRouter();
  const toast = useCustomToast();
  const { accessOptionHandler } = useShareExperienceHandlers();
  const [api, setApi] = useState<null | string>(null);

  const successHandler = (v: SuccessResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

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
