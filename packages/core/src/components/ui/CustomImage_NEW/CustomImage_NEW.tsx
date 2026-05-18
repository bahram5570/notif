'use client';

import { useState } from 'react';

import placeholderImage from '@assets/shared/images/CustomImage_placeholder.png';
import Image from 'next/image';

import CustomImageError from './CustomImageError';
import CustomImageLoading from './CustomImageLoading';
import CustomImagePreviewLoading from './CustomImagePreviewLoading';
import useImageSrc from './__hooks__/useImageSrc';
import usePreviewImage from './__hooks__/usePreviewImage';
import { CustomImage_NEWTypes } from './types';

export const CustomImage_NEW = (props: CustomImage_NEWTypes) => {
  const { hasPreviewImage, previewImageShape, src, alt, imageApi, className, ...imageProps } = props;

  const { previewImageLoading, previewImageHandler } = usePreviewImage();
  const [imageLoading, setImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const errorHandler = () => {
    setImageLoading(false);
    setHasError(true);
  };

  const updatedSrc = useImageSrc({ src, imageApi, onError: errorHandler });

  const loadHandler = () => {
    if (!updatedSrc) {
      return;
    }

    setImageLoading(false);

    if (props.onLoad) {
      props.onLoad();
    }
  };

  const clickHandler = () => {
    if (imageLoading || previewImageLoading || hasError || !hasPreviewImage) {
      return;
    }

    previewImageHandler({ src: updatedSrc, shape: previewImageShape });
  };

  const isLoaded = updatedSrc !== '' && !hasError && !imageLoading;

  return (
    <div className={`relative ${imageProps.fill ? 'w-full h-full' : 'w-fit h-fit'}`}>
      {hasError && <CustomImageError />}
      {imageLoading && <CustomImageLoading />}
      {previewImageLoading && <CustomImagePreviewLoading />}

      <Image
        {...imageProps}
        alt={alt || ''}
        onLoad={loadHandler}
        onError={errorHandler}
        onClick={clickHandler}
        key={updatedSrc ? 'k1' : 'k2'}
        src={updatedSrc || placeholderImage}
        className={`${className} ${isLoaded ? 'animate-imageLoaded' : ''}`}
      />
    </div>
  );
};
