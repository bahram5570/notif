import { FileDataHandlerTypes } from '@repo/core/hooks/useFileUpload';

export type UploadModalPropsType = {
  fileDataHandler: FileDataHandlerTypes;
  uploadImageLoading: boolean;
};
