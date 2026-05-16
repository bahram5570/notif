'use client';

import { useState } from 'react';

import imagePlaceholder from '@assets/shared/images/CustomImage_placeholder.png';
import Image from 'next/image';

import CustomImageError from './CustomImageError';
import CustomImageLoading from './CustomImageLoading';
import CustomImagePreviewLoading from './CustomImagePreviewLoading';
import useImageSrc from './__hooks__/useImageSrc';
import usePreviewImage from './__hooks__/usePreviewImage';
import { CustomImage_NEWTypes } from './types';

export const CustomImage_NEW = (props: CustomImage_NEWTypes) => {
  const { hasPreviewImage, previewImageShape, src, alt, imageApi, ...imageProps } = props;

  const { previewImageLoading, previewImageHandler } = usePreviewImage();
  const [imageLoading, setImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageLoadHandler = () => {
    if (props.onLoad) {
      props.onLoad();
    }

    setImageLoading(false);
  };

  const errorHandler = () => {
    setImageLoading(false);
    setHasError(true);
  };

  const clickHandler = () => {
    if (imageLoading || previewImageLoading || hasError) {
      return;
    }

    previewImageHandler({ hasPreviewImage, src: updatedSrc, shape: previewImageShape });
  };

  const updatedSrc = useImageSrc({ src, imageApi, onError: errorHandler });

  return (
    <div className={`relative ${imageProps.fill ? 'w-full h-full' : 'w-fit h-fit'}`}>
      {previewImageLoading && <CustomImagePreviewLoading />}
      {imageLoading && <CustomImageLoading />}
      {hasError && <CustomImageError />}

      <Image
        {...imageProps}
        alt={alt || ''}
        onError={errorHandler}
        onClick={clickHandler}
        onLoadingComplete={imageLoadHandler}
        src={updatedSrc || imagePlaceholder}
      />
    </div>
  );
};
