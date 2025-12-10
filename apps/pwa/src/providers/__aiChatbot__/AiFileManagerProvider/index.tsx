'use client';

import { createContext } from 'react';

import useUploadFile from './__hooks__/useUploadFile';
import { AiFileManagerProviderContextPropsType } from './type';

export const AiFileManagerProviderContext = createContext<AiFileManagerProviderContextPropsType>({
  files: [],
  removeFileHandler: () => {},
  fileDataHandler: () => {},
  retryUploadHandler: () => {},
});

const AiFileManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const { fileDataHandler, retryUploadHandler, files, removeFileHandler } = useUploadFile();

  return (
    <AiFileManagerProviderContext.Provider
      value={{ files: files, removeFileHandler, fileDataHandler, retryUploadHandler }}
    >
      {children}
    </AiFileManagerProviderContext.Provider>
  );
};

export default AiFileManagerProvider;
