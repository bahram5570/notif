import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const { onToast } = useCustomToast();
  const route = useRouter();
  const onSuccessHandler = () => {
    onToast({ message: 'پیشنهادت برامون ارزشمنده و در آینده حتما به موضوعات پیشنهادی اضافه میشه', type: 'success' });
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
