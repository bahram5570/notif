import { useEffect, useState } from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const useImageSrc = (src: string | StaticImport) => {
  const [updatedSrc, setUpdatedSrc] = useState(src);

  useEffect(() => {
    const convertHandler = async () => {
      if (typeof src === 'string') {
        const isHeic = src.toLocaleLowerCase().includes('.heic');
        const isHttp = src.toLocaleLowerCase().startsWith('http');

        if (isHeic && isHttp) {
          try {
            const payload = JSON.stringify({ imageUrl: src });
            const response = await fetch('/api/shared/CustomImage-heic-converter', { method: 'POST', body: payload });
            const blob = await response.blob();
            const result = URL.createObjectURL(blob);

            setUpdatedSrc(result);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };

    convertHandler();
  }, [src]);

  return { updatedSrc };
};

export default useImageSrc;
