import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { PayloadDataTypes } from './type';

const useSubmit = () => {
  const router = useRouter();

  const successHandler = () => {
    router.push('/landing/geneticMarketing/result');
  };

  const { callApi } = useApi({
    onSuccess: successHandler,
    url: ``,
    method: 'POST',
  });

  const handleSubmit = (payload: PayloadDataTypes) => {
    // console.log(payload);
    // callApi({ payload });
  };
  return { handleSubmit };
};

export default useSubmit;
