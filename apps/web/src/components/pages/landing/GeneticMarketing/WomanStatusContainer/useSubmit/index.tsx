import useApi from '@hooks/useApi';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './type';

const useSubmit = () => {
  const router = useRouter();
  const { notifyToastHandler } = useCustomToast();

  const successHandler = (v: { valid: boolean }) => {
    if (v.valid) {
      router.push('/landing/geneticMarketing/testOnline');
    } else {
      notifyToastHandler({ type: 'error', message: 'خطا در برقراری ارتباط' });
    }
  };

  const { isLoading, callApi } = useApi({
    onSuccess: successHandler,
    url: `Landing/marketinggenetictest/info`,
    method: 'POST',
  });

  const handleSubmit = (payload: PayloadDataTypes) => {
    callApi(payload);
  };
  return { handleSubmit, isLoading };
};

export default useSubmit;
