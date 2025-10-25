'use client';

import { useState } from 'react';

import Image from 'next/image';

import CustomImagePreview from './CustomImagePreview';
import useImageSrc from './__hooks__/useImageSrc';
import { CustomImageTypes } from './types';

const CustomImage = (props: CustomImageTypes) => {
  const { onClick, hasPreviewImage, src, ...filteredProps } = props;

  const [previewImage, setPreviewImage] = useState(false);
  const { updatedSrc } = useImageSrc(src);

  const clickHandler = () => {
    if (props.hasPreviewImage) {
      setPreviewImage(true);
    }
  };

  return (
    <>
      <Image {...filteredProps} src={updatedSrc} onClick={clickHandler} />

      {hasPreviewImage && (
        <CustomImagePreview
          src={updatedSrc}
          previewImage={previewImage}
          closeHandler={() => setPreviewImage(false)}
          previewBackground={props.previewBackground}
        />
      )}
    </>
  );
};

export default CustomImage;
