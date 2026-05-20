import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';
import { useRouter } from 'next/navigation';

import { SuccessResponseType } from './type';

const useShareExperienceProfileReport = () => {
  const router = useRouter();
  const toast = useCustomToast();
  const { accessOptionHandler } = useShareExperienceHandlers();

  const successHandler = (v: SuccessResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    toast.notifyToastHandler({ message: 'گزارش شما ثبت شد و بررسی خواهد شد', type: 'success' });
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'manshareeexperience/v3/profile/report',
    method: 'PUT',
    onSuccess: successHandler,
  });

  const reportHandler = (userId: string) => {
    const payload = {
      userId,
    };

    callApi(payload);
  };
  return { isLoading, reportHandler };
};

export default useShareExperienceProfileReport;
