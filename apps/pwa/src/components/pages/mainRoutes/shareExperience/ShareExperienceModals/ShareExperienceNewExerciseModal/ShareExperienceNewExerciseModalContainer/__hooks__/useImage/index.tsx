import { useEffect, useState } from 'react';

import { useFileUpload } from '@repo/core/hooks/useFileUpload';
import { useRouter } from 'next/navigation';

const useImage = () => {
  const [image, setImage] = useState('');
  const router = useRouter();

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
