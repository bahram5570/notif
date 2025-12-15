import { FileDataHandlerTypes } from './__hooks__/useUploadFile/type';

export type UploadItemType = {
  url: string;
  loading: boolean;
  error: boolean;
};

export type AiFileManagerProviderContextPropsType = {
  files: UploadItemType[];
  disableBtn: boolean;
  removeFileHandler: (url: string) => void;
  fileDataHandler: FileDataHandlerTypes;
  retryUploadHandler: () => void;
  resetFiles: () => void;
};
