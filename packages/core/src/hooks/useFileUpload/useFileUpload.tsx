import { useState } from 'react';

import { APP_VERSION } from '../../constants/app.constants';
import { usePwaApi } from '../usePwaApi';
import { FileDataHandlerTypes, FileResponseTypes, FileUploadImageFileTypes, OptionsTypes } from './type';

export const useFileUpload = (options?: OptionsTypes) => {
  const [imageFile, setImageFile] = useState<FileUploadImageFileTypes>(null);
  const successHandler = (v: FileResponseTypes) => {
    if (!options?.onSuccess) return;

    let fileName: string;

    if (typeof v === 'string') {
      fileName = v;
    } else if ('fileName' in v) {
      fileName = v.fileName;
    } else {
      fileName = v.name;
    }

    options.onSuccess(fileName);
  };

  const errorHandler = () => {
    if (options?.onError) {
      options.onError();
    }
    setImageFile(null);
  };

  const { callApi, isLoading: uploadImageLoading } = usePwaApi<FileResponseTypes>({
    api: `${options?.api || 'profile/image'}?AppVersion=${APP_VERSION || ''}`,
    contentType: 'multipart/form-data',
    onSuccess: successHandler,
    onError: errorHandler,
    method: options?.method || 'POST',
  });

  const fileDataHandler: FileDataHandlerTypes = async ({ file }) => {
    const finalFile = file;

    if (!finalFile) {
      return;
    }

    const formData = new FormData();
    formData.append('files', finalFile);
    callApi(formData);

    const image = URL.createObjectURL(finalFile);
    const imageType = finalFile.name.split('.')[1];
    setImageFile({ image, imageType });
  };

  const removeFileHandler = () => {
    setImageFile(null);
  };

  return { uploadImageLoading, fileDataHandler, removeFileHandler, imageFile };
};
