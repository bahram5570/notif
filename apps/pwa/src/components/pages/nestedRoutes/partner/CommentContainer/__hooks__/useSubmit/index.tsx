import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { SubmitHandler } from './type';

const useSubmit = () => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const memoryId = getQueryParams('memoryId');

  const successHandler = () => {
    route.back();
  };
  const { callApi, isLoading } = useApi({
    method: 'POST',
    api: 'memory/comment',
    onSuccess: successHandler,
  });

  const submitHandler = ({ text }: SubmitHandler) => {
    const payload = {
      id: memoryId,
      text,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
