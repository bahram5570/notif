import { useEffect, useState } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useFileUpload } from '@repo/core/hooks/useFileUpload';

const useImage = () => {
  const [image, setImage] = useState('');
  const router = useCustomRouter();

  const successHandler = (v: string) => {
    setImage(v);
    router.back();
  };

  const { fileDataHandler, imageFile, removeFileHandler, uploadImageLoading } = useFileUpload({
    api: 'shareeexperience/v3/file',
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (imageFile === null) {
      setImage('');
    }
  }, [imageFile]);

  return { fileDataHandler, imageFile, removeFileHandler, uploadImageLoading, image };
};

export default useImage;
