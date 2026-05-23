import { ImageProps } from 'next/image';

import { PreviewImageShapeTypes } from '../../../providers/PreviewImageProvider/types';

type ItemsTypes = Omit<ImageProps, 'alt' | 'onLoad'>;
export interface CustomImage_NEWTypes extends ItemsTypes {
  alt?: string;
  imageApi?: string;
  onLoad?: () => void;
  hasPreviewImage?: boolean;
  containerClassName?: string;
  previewImageShape?: PreviewImageShapeTypes;
}
