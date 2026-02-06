import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { TopicListResponseType } from './type';

const useGetTopicList = () => {
  const { data, isLoading } = usePwaApi<TopicListResponseType>({
    api: 'feature/ai/chat/topic/list',
    method: 'GET',
    queryKey: ['aiChatTopicList'],
  });

  return { data, isLoading };
};

export default useGetTopicList;
