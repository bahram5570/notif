import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';

import { UploadFileModalPropsType } from '../type';

export type UploadFileModalContainerPropsType = Pick<
  UploadFileModalPropsType,
  'fileDataHandler' | 'uploadImageLoading'
> & {};
