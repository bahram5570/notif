import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { SuccessResponseType } from './type';

const useShareExperienceProfileReport = () => {
  const router = useCustomRouter();
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
    api: 'shareeexperience/v3/profile/report',
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
