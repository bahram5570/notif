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
            const req = await fetch(src);
            const blob = await req.blob();

            // # Dynamically import heic2any to load it client-side only, avoiding 'window is not defined' errors.
            const heic2any = (await import('heic2any')).default;
            const convertedBlob = (await heic2any({
              blob,
              toType: 'image/jpeg',
            })) as Blob;
            const result = URL.createObjectURL(convertedBlob);
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
