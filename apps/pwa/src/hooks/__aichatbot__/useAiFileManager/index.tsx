import { useContext } from 'react';

import { AiFileManagerProviderContext } from '@providers/__aiChatbot__/AiFileManagerProvider';

const useAiFileManager = () => {
  return useContext(AiFileManagerProviderContext);
};

export default useAiFileManager;
