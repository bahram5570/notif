import useApi from '@hooks/useApi';

import { TopicListResponseType } from './type';

const useGetTopicList = () => {
  const { data, isLoading } = useApi<TopicListResponseType>({
    api: 'feature/ai/chat/topic/list',
    method: 'GET',
    queryKey: ['aiChatTopicList'],
  });

  return { data, isLoading };
};

export default useGetTopicList;
