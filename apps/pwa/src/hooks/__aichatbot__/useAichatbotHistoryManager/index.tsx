import { useContext } from 'react';

import { AiChatHistoryManagerContext } from '@providers/__aiChatbot__/AiChatHistoryManagerProvider';

const useAichatbotHistoryManager = () => {
  return useContext(AiChatHistoryManagerContext);
};

export default useAichatbotHistoryManager;
