import { useEffect, useRef, useState } from 'react';

import { handleHttpImage, handleImageName, handleLocalImage } from './__utils__';
import { isDevelopeMode } from '@repo/core/utils/system';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// !
// import { isDevelopeMode } from '../../../../../utils/system';

import { UseImageSrcProps } from './types';

const useImageSrc = ({ src, imageApi, onError }: UseImageSrcProps) => {
  const [resetKey, setResetKey] = useState('');
  const isFirstTime = useRef(isDevelopeMode());
  const [updatedSrc, setUpdatedSrc] = useState<StaticImport | string>('');

  const updateHandler = async () => {
    try {
      let result: StaticImport | string = '';

      if (typeof src === 'string') {
        // # Full url starts with 'http'
        if (src.toLowerCase().startsWith('http')) {
          result = await handleHttpImage(src);
        }

        // # Local images (in 'public' folder)
        else if (src.toLowerCase().startsWith('/')) {
          result = await handleLocalImage(src);
        }

        // # Just name of the image
        else {
          result = await handleImageName(src, imageApi);
        }
      } else {
        result = src;
      }

      setResetKey(Math.random().toString());
      setUpdatedSrc(result);
    } catch (err) {
      onError();
    }
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    updateHandler();
  }, [src]);

  return { updatedSrc, resetKey };
};

export default useImageSrc;
