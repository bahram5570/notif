import useApi from '@hooks/useApi';

import { ResponseAiChatWelcomingType } from './type';

const useGetData = () => {
  const { data, isLoading } = useApi<ResponseAiChatWelcomingType>({
    api: 'feature/ai/chat/welcomePage',
    queryKey: ['aiChatWelcomePage'],
    method: 'GET',
  });

  return { data, isLoading };
};

export default useGetData;
