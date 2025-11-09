import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { AiChatbotDataResponseType } from './type';

const useGetAiChatbotData = () => {
  const { getQuery, newQuery } = useCustomReactQuery(['historyAiChat']);
  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const api =
    categoryIdData && itemIdData
      ? `feature/ai/v2/chat/list?promptCategoryId=${categoryIdData}&promptItemId=${itemIdData}`
      : 'feature/ai/v2/chat/list';

  const { data, isLoading, callApi } = useApi<AiChatbotDataResponseType>({
    api,
    method: 'GET',
    queryKey: ['aiChatbot'],
    fetchOnMount: false,
  });

  const aiChatData = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });

  useEffect(() => {
    if (data) {
      newQuery({ queryKey: ['historyAiChat'], payload: data });
      newQuery({ queryKey: ['AiChatMessageList'], payload: { data: data.chats } });
    }
  }, [data]);

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, aiChatData };
};

export default useGetAiChatbotData;
