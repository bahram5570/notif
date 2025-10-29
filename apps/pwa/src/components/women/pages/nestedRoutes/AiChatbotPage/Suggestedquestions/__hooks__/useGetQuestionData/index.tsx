import { useEffect } from 'react';

import useApi from '@hooks/useApi';

const useGetQuestionData = ({ messageId }: { messageId: string }) => {
  const api = messageId ? `feature/ai/chat/question/${messageId}` : '';
  const { isLoading, data, callApi } = useApi({
    method: 'GET',
    api,
    queryKey: ['questionListData'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (api) {
      callApi();
    }
  }, [api]);

  return { data, isLoading };
};

export default useGetQuestionData;
