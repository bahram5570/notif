import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';

import { CreateMemoryFormPropsType } from '../type';

export type UploadModalPropsType = {
  fileDataHandler: FileDataHandlerTypes;
  uploadImageLoading: boolean;
};
