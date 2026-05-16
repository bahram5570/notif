import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '../../../../../utils/system';
import { handleHttpImage, handleImageName, handleLocalImage } from './__utils__';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { UseImageSrcTypes } from './types';

const useImageSrc = ({ src, imageApi, onError }: UseImageSrcTypes) => {
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

  return updatedSrc;
};

export default useImageSrc;
