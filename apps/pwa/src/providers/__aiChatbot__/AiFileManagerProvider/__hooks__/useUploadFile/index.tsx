import { useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';

import { UploadItemType } from '../../type';
import { FileDataHandlerTypes, FileResponseTypes } from './type';

const MAX_SIZE = 10 * 1024 * 1024;
const useUploadFile = () => {
  const [files, setFiles] = useState<UploadItemType[]>([]);
  const toast = useCustomToast();
  const [lastFile, setLastFile] = useState<File | null>(null);

  const successHandler = (v: FileResponseTypes) => {
    setFiles((prev) => prev.map((f) => (f.loading ? { ...f, loading: false, url: v.name } : f)));
  };

  const errorHandler = () => {
    setFiles((prev) => prev.map((f) => (f.loading ? { ...f, loading: false, error: true } : f)));
  };

  const { callApi } = useApi<FileResponseTypes>({
    api: 'feature/ai/media',
    contentType: 'multipart/form-data',
    method: 'POST',
    onSuccess: successHandler,
    onError: errorHandler,
  });

  const uploadFile = (file: File) => {
    const fd = new FormData();
    fd.append('files', file);
    callApi(fd);
  };

  const fileDataHandler: FileDataHandlerTypes = ({ e, file }) => {
    // if (hasMoreFile) return;

    const selected = file ?? e.target.files?.[0];
    if (!selected) return;

    if (selected.size > MAX_SIZE) {
      toast.notifyToastHandler({ message: 'حجم عکس نباید بیشتر از 10 مگابایت باشد.', type: 'error' });
      return;
    }

    setLastFile(selected);
    setFiles((prev) => [...prev, { url: URL.createObjectURL(selected), loading: true, error: false }]);

    uploadFile(selected);
  };

  const retryUploadHandler = () => {
    if (!lastFile) return;

    setFiles((prev) => prev.map((f) => (f.error ? { ...f, error: false, loading: true } : f)));

    uploadFile(lastFile);
  };

  const removeFileHandler = (url: string) => {
    setFiles((prev) => prev.filter((f) => f.url !== url));
  };

  const resetFiles = () => {
    setFiles([]);
  };

  return { fileDataHandler, retryUploadHandler, removeFileHandler, files, resetFiles };
};

export default useUploadFile;
