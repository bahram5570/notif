import useApi from '@hooks/useApi';
import { useToast } from '@providers/ToastProvider/CustomToastProvider';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const { showToast } = useToast();
  const route = useRouter();
  const onSuccessHandler = () => {
    showToast({
      message: 'پیشنهادت با موفقیت ثبت شد ✅',
      description: 'پیشنهادت برامون ارزشمنده و در آینده حتما به موضوعات پیشنهادی اضافه میشه',
      duration: 4000,
    });
    route.back();
  };

  const { callApi, isLoading } = useApi({ api: 'feature/ai/opiniononai', method: 'POST', onSuccess: onSuccessHandler });

  const submitHandler = (text: string) => {
    const payload = {
      text,
    };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
