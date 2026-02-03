import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { AiChatbotDataResponseType } from './type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const itemIdData = getQueryParams('promptItemId');
  const categoryIdData = getQueryParams('promptCategoryId');

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

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data, itemIdData, categoryIdData };
};

export default useGetData;
