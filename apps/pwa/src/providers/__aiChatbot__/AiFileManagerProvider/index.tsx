'use client';

import { createContext } from 'react';

import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';

import useUploadFile from './__hooks__/useUploadFile';
import { AiFileManagerProviderContextPropsType } from './type';

export const AiFileManagerProviderContext = createContext<AiFileManagerProviderContextPropsType>({
  files: [],
  disableBtn: false,
  removeFileHandler: () => {},
  fileDataHandler: () => {},
  retryUploadHandler: () => {},
  resetFiles: () => {},
});

const AiFileManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const { chatData } = useAichatbotHistoryManager();
  const { fileDataHandler, retryUploadHandler, files, removeFileHandler, resetFiles } = useUploadFile();
  const hasMoreFile = chatData ? files.length + chatData?.currentImageUsage === chatData?.imageUsageLimit : true;

  const disableBtn = !chatData?.activaMedia || hasMoreFile;

  return (
    <AiFileManagerProviderContext.Provider
      value={{ files: files, removeFileHandler, fileDataHandler, retryUploadHandler, disableBtn, resetFiles }}
    >
      {children}
    </AiFileManagerProviderContext.Provider>
  );
};

export default AiFileManagerProvider;
