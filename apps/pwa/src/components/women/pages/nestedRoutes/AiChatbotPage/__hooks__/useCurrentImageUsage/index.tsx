import { useEffect, useState } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { AiChatbotDataResponseType } from '../useGetAiChatbotData/type';

const useCurrentImageUsage = () => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);
  const historyAiChat = getQuery<AiChatbotDataResponseType>({ queryKey: ['historyAiChat'] });
  const [imagesCount, setImageCount] = useState(0);

  const updateImageCountHandler = (count: number) => {
    setImageCount(count);
  };

  useEffect(() => {
    updateQuery({
      queryKey: ['historyAiChat'],
      payload: {
        ...historyAiChat,
        currentImageUsage: historyAiChat?.currentImageUsage
          ? historyAiChat.currentImageUsage + imagesCount
          : imagesCount,
      },
    });
  }, [imagesCount]);

  return { updateImageCountHandler, imagesCount };
};

export default useCurrentImageUsage;
