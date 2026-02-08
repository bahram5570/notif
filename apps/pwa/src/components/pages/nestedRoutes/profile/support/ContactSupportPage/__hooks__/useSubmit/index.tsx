import { APP_VERSION } from '@repo/core/constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { SubmitHandlerPropsType } from './type';

const useSubmit = () => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const categoryId = getQueryParams('id');
  const categoryName = getQueryParams('name');

  const successHandler = (id: string) => {
    route.replace(`/protected/supportTicket/${id}`);
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    api: 'support/chat',
    onSuccess: (v: { id: string }) => successHandler(v.id),
  });

  const submitHandler = ({ text, fileName }: SubmitHandlerPropsType) => {
    const payload = {
      text,
      type: 0,
      fileName,
      categoryId,
      categoryName,
      ModelPhone: '',
      packageName: '',
      version: APP_VERSION || '',
    };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
