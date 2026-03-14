import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';

import { CreateMemoryFormPropsType } from '../type';

export type UploadModalPropsType = Pick<CreateMemoryFormPropsType, 'isMan'> & {
  fileDataHandler: FileDataHandlerTypes;
  uploadImageLoading: boolean;
};
