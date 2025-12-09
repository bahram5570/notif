import { useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';

import { FileDataHandlerTypes, FileResponseTypes, UseFileUploadPropsType } from './type';

const MAX_SIZE = 10 * 1024 * 1024;
const useUploadFile = ({ filesHandler }: UseFileUploadPropsType) => {
  const { onToast } = useCustomToast();

  const [lastFile, setLastFile] = useState<File | null>(null);

  const { callApi } = useApi<FileResponseTypes>({
    api: 'feature/ai/media',
    contentType: 'multipart/form-data',
    method: 'POST',
    // onSuccess: successHandler,
    // onError: errorHandler,
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
      onToast({ message: 'حجم عکس نباید بیشتر از 10 مگابایت باشد.', type: 'error' });
      return;
    }

    setLastFile(selected);
    // filesHandler((prev) => [...prev, { url: URL.createObjectURL(selected), loading: true, error: false }]);

    uploadFile(selected);
  };

  const retryUploadHandler = () => {
    if (!lastFile) return;

    // filesHandler((prev) => prev.map((f) => (f.error ? { ...f, error: false, loading: true } : f)));

    uploadFile(lastFile);
  };

  return { fileDataHandler, retryUploadHandler };
};

export default useUploadFile;
