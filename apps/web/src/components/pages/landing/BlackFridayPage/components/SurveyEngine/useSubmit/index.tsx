import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './type';

const useSubmit = (nextRoute: string) => {
  const router = useRouter();
  const { onToast } = useCustomToast();

  const successHandler = (v: { valid: boolean }) => {
    if (v.valid) {
      router.push(nextRoute);
    } else {
      onToast({ type: 'error', message: 'خطا در برقراری ارتباط' });
    }
  };

  const { isLoading, callApi } = useApi({
    onSuccess: successHandler,
    url: `Landing/blackfriday404`,
    method: 'POST',
  });

  const handleSubmit = (payload: PayloadDataTypes) => {
    callApi(payload);
  };
  return { handleSubmit, isLoading };
};

export default useSubmit;
