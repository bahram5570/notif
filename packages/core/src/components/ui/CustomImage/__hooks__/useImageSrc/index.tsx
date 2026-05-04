import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '../../../../../utils/system';

import { UseImageSrcProps } from './types';

const useImageSrc = ({ src, imageApi = '/file', onError }: UseImageSrcProps) => {
  const isFirstTime = useRef(isDevelopeMode());
  const [updatedSrc, setUpdatedSrc] = useState('');

  const convertHeic = async (imageUrl: string, isHeic: boolean) => {
    if (!isHeic) {
      setUpdatedSrc(imageUrl);
      return;
    }

    try {
      const payload = JSON.stringify({ imageUrl });
      const response = await fetch('/api/shared/CustomImage-heic-converter', { method: 'POST', body: payload });
      const blob = await response.blob();
      const result = URL.createObjectURL(blob);

      setUpdatedSrc(result);
    } catch (error) {
      onError();
    }
  };

  const urlMaker = (fileSrc: string) => {
    if (fileSrc.toLowerCase().includes('http')) {
      return fileSrc;
    }

    if (fileSrc.slice(0, 1) === '/') {
      return fileSrc;
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return `${baseUrl}${imageApi}/${src}`;
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const convertSrc = async () => {
      if (typeof src === 'string') {
        const result = urlMaker(src.trim());
        const is_heic_file = result.toLowerCase().includes('.heic');
        await convertHeic(result, is_heic_file);
        return;
      }

      const result = urlMaker((src?.image || '').trim());
      const is_heic_file = src?.imageType === 'heic';
      await convertHeic(result, is_heic_file);
    };

    convertSrc();
  }, [src]);

  return { updatedSrc };
};

export default useImageSrc;
