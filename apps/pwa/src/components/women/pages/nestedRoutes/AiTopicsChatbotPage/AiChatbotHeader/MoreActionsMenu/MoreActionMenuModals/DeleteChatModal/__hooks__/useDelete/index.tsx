import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery();
  const route = useRouter();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const successHandler = () => {
    route.back();
    refetchQuery({ queryKey: ['aiChatbot'] });
  };
  const { callApi, isLoading } = useApi({
    method: 'DELETE',
    api: 'feature/ai/topic/delete',
    onSuccess: successHandler,
  });

  const onDeleteHandler = () => {
    const payload = {
      promptCategoryId: categoryIdData,
      propmptId: itemIdData,
    };

    callApi(payload);
  };

  return { onDeleteHandler, isLoading };
};

export default useDelete;
