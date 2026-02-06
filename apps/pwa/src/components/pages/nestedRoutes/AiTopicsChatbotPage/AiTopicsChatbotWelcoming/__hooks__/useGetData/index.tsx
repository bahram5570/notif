import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponseAiChatWelcomingType } from './type';

const useGetData = () => {
  const { data, isLoading } = usePwaApi<ResponseAiChatWelcomingType>({
    api: 'feature/ai/chat/welcomePage',
    queryKey: ['aiChatWelcomePage'],
    method: 'GET',
  });

  return { data, isLoading };
};

export default useGetData;
