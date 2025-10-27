import useApi from '@hooks/useApi';

import { TopicListResponseType } from './type';

const useGetTopicList = () => {
  const { data, isLoading } = useApi<TopicListResponseType>({
    api: 'feature/ai/chat/topic/list',
    method: 'GET',
    queryKey: ['aiChatTopicList'],
  });

  const result = data?.result;
  return { result, isLoading };
};

export default useGetTopicList;
