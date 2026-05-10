import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

// !
// import { isDevelopeMode } from '../../../../../utils/system';

import { UseImageSrcProps } from './types';

// const useImageSrc = ({ src, imageApi = '/file', onError }: UseImageSrcProps) => {
const useImageSrc = ({ src, imageApi, onError }: UseImageSrcProps) => {
  const isFirstTime = useRef(isDevelopeMode());
  const [updatedSrc, setUpdatedSrc] = useState('');

  useEffect(() => {
    if (typeof src === 'string') {
      //
      const isHttp = src.toLowerCase().startsWith('http');
      const isLocalFile = src.toLowerCase().startsWith('/_next');
      return;
    }

    src;
  }, [src]);

  // const convertHeicHandler = async (imageUrl: string, isHeic: boolean) => {
  //   if (!isHeic) {
  //     setUpdatedSrc(imageUrl);
  //     return;
  //   }

  //   try {
  //     const req = await fetch(imageUrl);
  //     const blob = await req.blob();
  //     const heic2any = (await import('heic2any')).default;
  //     const convertedBlob = (await heic2any({ blob, toType: 'image/jpeg' })) as Blob;

  //     const result = URL.createObjectURL(convertedBlob);
  //     setUpdatedSrc(result);
  //   } catch (error) {
  //     onError();
  //   }
  // };

  // const urlMaker = (fileSrc: string) => {
  //   if (fileSrc.toLowerCase().includes('http')) {
  //     return fileSrc;
  //   }

  //   if (fileSrc.slice(0, 1) === '/') {
  //     return fileSrc;
  //   }

  //   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  //   return `${baseUrl}${imageApi}/${src}`;
  // };

  // useEffect(() => {
  //   if (isFirstTime.current) {
  //     isFirstTime.current = false;
  //     return;
  //   }

  //   const convertSrc = async () => {
  //     const detectHeic = (url: string) => {
  //       return url.toLowerCase().includes('.heic') || url.toLowerCase().includes('.heif');
  //     };

  //     if (typeof src === 'string') {
  //       const result = urlMaker(src.trim());
  //       const isHeic = detectHeic(result);
  //       await convertHeicHandler(result, isHeic);
  //       return;
  //     }

  //     const result = urlMaker((src?.image || '').trim());
  //     const isHeic = detectHeic(result);
  //     await convertHeicHandler(result, isHeic);
  //   };

  //   convertSrc();
  // }, [src]);

  return { updatedSrc };
};

export default useImageSrc;
