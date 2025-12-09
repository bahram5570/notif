'use client';

import { createContext, useState } from 'react';

import useUploadFile from './__hooks__/useUploadFile';
import { AiFileManagerProviderContextPropsType, UploadItemType } from './type';

export const AiFileManagerProviderContext = createContext<AiFileManagerProviderContextPropsType>({
  files: [],
  removeFileHandler: () => {},
  fileDataHandler: () => {},
  retryUploadHandler: () => {},
});

const AiFileManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<UploadItemType[]>([]);
  const { fileDataHandler, retryUploadHandler } = useUploadFile({ filesHandler: setFiles });

  const removeFileHandler = (url: string) => {
    setFiles((prev) => prev.filter((f) => f.url !== url));
  };

  return (
    <AiFileManagerProviderContext.Provider
      value={{ files: files, removeFileHandler, fileDataHandler, retryUploadHandler }}
    >
      {children}
    </AiFileManagerProviderContext.Provider>
  );
};

export default AiFileManagerProvider;
