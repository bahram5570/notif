import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UseGetConfigAiTypes } from './type';

const useGetConfigAi = () => {
  const { data: aiConfigData, isLoading: aiConfigLoading } = usePwaApi<UseGetConfigAiTypes>({
    api: 'feature/ai/chat/config',
    queryKey: ['configAi'],
    method: 'GET',
  });

  return { aiConfigLoading, aiConfigData };
};

export default useGetConfigAi;
