import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
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
  const { callApi, isLoading } = usePwaApi({
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
