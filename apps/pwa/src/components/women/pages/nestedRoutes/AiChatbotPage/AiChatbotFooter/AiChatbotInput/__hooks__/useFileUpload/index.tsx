import { useState } from 'react';

import { UploadItem } from './type';

const useFileUpload = () => {
  const [files, setFiles] = useState<UploadItem[]>([]);

  const removeFileHandler = (url: string) => {
    const newFiles = files.filter((file) => file.url !== url);
    setFiles(newFiles);
  };

  const fileUploadHandler = (file: File) => {
    if (!file) return;

    if (files.length >= 3) return;

    const id = crypto.randomUUID();
    const newItem: UploadItem = {
      id,
      url: URL.createObjectURL(file),
      loading: true,
      error: null,
    };

    setFiles((prev) => [...prev, newItem]);

    setTimeout(() => {
      setFiles((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, loading: false } : { ...item, loading: false, error: 'Upload failed!' },
        ),
      );
    }, 2000);
  };
  return { files, fileUploadHandler, removeFileHandler };
};

export default useFileUpload;
