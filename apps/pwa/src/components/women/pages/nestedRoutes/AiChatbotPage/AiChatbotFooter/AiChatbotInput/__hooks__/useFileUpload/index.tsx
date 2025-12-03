import { useState } from 'react';

import useApi from '@hooks/useApi';

import { FileDataHandlerTypes, FileResponseTypes, UploadItem } from './type';

let finalFile: File | undefined;
const useFileUpload = () => {
  const [files, setFiles] = useState<UploadItem[]>([]);

  const successHandler = (v: FileResponseTypes) => {
    if (v.valid) {
      const newFiles = [...files];
      const idx = newFiles.findIndex((f) => f.loading === true);

      if (idx !== -1) {
        newFiles[idx] = { ...newFiles[idx], loading: false, url: v.name };
      }
      setFiles(newFiles);
    }
  };

  const errorHandler = () => {
    const newFiles = [...files];
    const idx = newFiles.findIndex((f) => f.loading === true);

    if (idx !== -1) {
      newFiles[idx] = { ...newFiles[idx], loading: false, error: true };
    }
    setFiles(newFiles);
  };

  const { callApi } = useApi<FileResponseTypes>({
    api: 'feature/ai/media',
    contentType: 'multipart/form-data',
    method: 'POST',
    onSuccess: successHandler,
    onError: errorHandler,
  });

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append('files', file);
    callApi(formData);
  };

  const fileDataHandler: FileDataHandlerTypes = async ({ e, file }) => {
    finalFile = file ?? e.target.files?.[0];

    if (!finalFile) {
      return;
    }

    if (files.length >= 3) return;

    uploadFile(finalFile);

    const image = URL.createObjectURL(finalFile);
    const newItem: UploadItem = {
      url: image,
      loading: true,
      error: false,
    };

    setFiles((prev) => [...prev, newItem]);
  };

  const removeFileHandler = (url: string) => {
    const newFiles = files.filter((file) => file.url !== url);
    setFiles(newFiles);
  };

  const retryUploadHandler = () => {
    if (!finalFile) {
      return;
    }

    const newFiles = [...files];
    const idx = newFiles.findIndex((f) => f.error === true);

    if (idx !== -1) {
      newFiles[idx] = { ...newFiles[idx], error: false };
    }
    setFiles(newFiles);
    uploadFile(finalFile);
  };

  const imageFile = files.map((file) => file.url);
  const hasFile = files && files.length > 0;

  return {
    files,
    imageFile,
    fileDataHandler,
    removeFileHandler,
    retryUploadHandler,
    hasFile,
  };
};

export default useFileUpload;
