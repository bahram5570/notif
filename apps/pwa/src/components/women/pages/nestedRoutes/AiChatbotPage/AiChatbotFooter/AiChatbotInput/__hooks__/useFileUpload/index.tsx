import { useState } from 'react';

import { UploadItem } from './type';

const useFileUpload = () => {
  const [files, setFiles] = useState<UploadItem[]>([]);

  const fileUploadHandler = (file: File) => {
    if (!file) return;

    if (files.length >= 3) return;

    const id = crypto.randomUUID(); // برای مدیریت هر عکس
    const newItem: UploadItem = {
      id,
      url: null,
      loading: true,
      error: null,
    };

    setFiles((prev) => [...prev, newItem]);

    // شبیه‌سازی آپلود (API یا پردازش)
    setTimeout(() => {
      const success = Math.random() > 0.2; // مثلاً 20٪ خطا بده

      setFiles((prev) =>
        prev.map((item) =>
          item.id === id
            ? success
              ? { ...item, url: URL.createObjectURL(file), loading: false }
              : { ...item, loading: false, error: 'Upload failed!' }
            : item,
        ),
      );
    }, 2000);
  };
  return { files, fileUploadHandler };
};

export default useFileUpload;
