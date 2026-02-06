import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams } from 'next/navigation';

import { SubmitHandlerPropsType } from './type';

const useSubmit = () => {
  const ticketId = useParams()?.ticketId;

  const successHandler = () => {
    window.history.go(-2);
  };

  const { callApi, isLoading } = usePwaApi({
    api: `support/ticket/${ticketId}/rate`,
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = (payload: SubmitHandlerPropsType) => {
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
