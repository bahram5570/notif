import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './types';

const useSubmit = () => {
  const router = useRouter();

  const successHandler = () => {
    router.push('/landing/genetic/result');
  };

  const { callApi } = useApi({
    onSuccess: successHandler,
    url: ``,
    method: 'POST',
  });

  const handleSubmit = (payload: PayloadDataTypes) => {
    console.log(payload);
    // callApi({ payload });
  };
  return { handleSubmit };
};

export default useSubmit;
