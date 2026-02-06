import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const toast = useCustomToast();
  const route = useRouter();
  const onSuccessHandler = () => {
    toast.feedbackToastHandler({
      message: 'پیشنهادت با موفقیت ثبت شد ✅',
      description: 'پیشنهادت برامون ارزشمنده و در آینده حتما به موضوعات پیشنهادی اضافه میشه',
      duration: 4000,
    });
    route.back();
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'feature/ai/opiniononai',
    method: 'POST',
    onSuccess: onSuccessHandler,
  });

  const submitHandler = (text: string) => {
    const payload = {
      text,
    };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
