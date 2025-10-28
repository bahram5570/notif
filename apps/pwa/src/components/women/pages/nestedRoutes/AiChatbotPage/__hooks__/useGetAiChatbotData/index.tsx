import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { AiChatbotDataResponseType } from './type';

const useGetAiChatbotData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const api =
    categoryIdData && itemIdData
      ? `feature/ai/v2/chat/list?promptCategoryId=${categoryIdData}&promptItemId=${itemIdData}`
      : '';

  const { data, isLoading, callApi } = useApi<AiChatbotDataResponseType>({
    api,
    method: 'GET',
    queryKey: ['aiChatbot'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { data, isLoading };
};

export default useGetAiChatbotData;
