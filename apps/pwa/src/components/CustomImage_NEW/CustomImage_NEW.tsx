import { ReactEventHandler, SyntheticEvent, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import CustomImageError from './CustomImageError';
import CustomImageLoading from './CustomImageLoading';
import CustomImagePreviewLoading from './CustomImagePreviewLoading';
// import { CustomSpinner } from '../CustomSpinner';
// import CustomImageError from './CustomImageError';
import useImageSrc from './__hooks__/useImageSrc';
import usePreviewImage from './__hooks__/usePreviewImage';
// import usePreviewImage from './__hooks__/usePreviewImage';
import { CustomImage_NEWTypes } from './types';

// import { CustomImageProps } from './types';

export const CustomImage_NEW = (props: CustomImage_NEWTypes) => {
  const { hasPreviewImage, previewImageShape, className, src, imageApi, ...imageProps } = props;

  const [imageLoading, setImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { previewImageHandler, previewImageLoading } = usePreviewImage();

  const imageLoadHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (props.onLoad) {
      props.onLoad(e);
    }

    setImageLoading(false);
  };

  const errorHandler = () => {
    setImageLoading(false);
    // setHasError(true);
  };

  const { updatedSrc, resetKey } = useImageSrc({ src, imageApi, onError: errorHandler });

  const clickHandler = () => {
    previewImageHandler({
      hasPreviewImage,
      src: updatedSrc,
      shape: previewImageShape,
    });
  };

  const containerStyles = imageProps.fill ? 'w-full h-full' : 'w-fit h-fit';

  return (
    <div className={`relative ${containerStyles}`}>
      {previewImageLoading && <CustomImagePreviewLoading />}
      {imageLoading && <CustomImageLoading />}
      {hasError && <CustomImageError />}

      <Image
        {...imageProps}
        src={updatedSrc}
        className={className}
        onLoad={imageLoadHandler}
        onError={errorHandler}
        onClick={clickHandler}
        key={resetKey}
      />
    </div>
  );
};
