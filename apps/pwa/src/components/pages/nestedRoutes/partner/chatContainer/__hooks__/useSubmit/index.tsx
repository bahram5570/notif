import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams } from 'next/navigation';

import { SubmitResponsePropsType, UseSubmitPropsType } from './type';

const useSubmit = ({ resetChild }: UseSubmitPropsType) => {
  const chatId = useParams()?.chatId;

  const { callApi, isLoading, data } = usePwaApi<SubmitResponsePropsType>({
    api: `challenge/${chatId}/chat`,
    method: 'POST',
    onSuccess: resetChild,
  });

  const submitHandler = ({ text }: { text: string }) => {
    const payload = { text };
    callApi(payload);
  };
  return { submitHandler, isLoading, data };
};

export default useSubmit;
