import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const { refetchQuery, removeQuery } = useCustomReactQuery();
  const { itemIdData, categoryIdData } = useAichatbotHistoryManager();
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
