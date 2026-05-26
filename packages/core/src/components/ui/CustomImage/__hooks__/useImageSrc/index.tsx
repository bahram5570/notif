import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '../../../../../utils/system';

import { heicConverter } from '../../../../../lib/heicConverter';
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
      const req = await fetch(imageUrl);
      const blob = await req.blob();
      const convertedBlob = await heicConverter(blob);
      const result = URL.createObjectURL(convertedBlob);
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
