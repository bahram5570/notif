import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import { UseDeletePropsType } from '../type';

const useDelete = ({ categoryIdData, itemIdData }: UseDeletePropsType) => {
  const { refetchQuery, removeQuery } = useCustomReactQuery();
  const route = useRouter();

  const successHandler = () => {
    route.back();
    removeQuery({ queryKey: ['AiChatMessageList'] });
    refetchQuery({ queryKey: ['aiChatbot'] });
  };
  const { callApi, isLoading } = useApi({
    method: 'DELETE',
    api: 'feature/ai/topic/delete',
    onSuccess: successHandler,
  });

  const onDeleteHandler = () => {
    const payload = {
      promptCategoryId: categoryIdData || '',
      propmptId: itemIdData || '',
    };

    callApi(payload);
  };

  return { onDeleteHandler, isLoading };
};

export default useDelete;
