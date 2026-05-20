import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useShareExperienceProfileReport = () => {
  const router = useCustomRouter();
  const toast = useCustomToast();

  const successHandler = () => {
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
