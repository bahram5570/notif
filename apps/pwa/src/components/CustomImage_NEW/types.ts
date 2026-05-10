import { ImageProps } from 'next/image';

// !
import { PreviewImageShapeTypes } from '../../../../../packages/core/dist/providers/PreviewImageProvider/types';

export interface CustomImage_NEWTypes extends ImageProps {
  imageApi?: string;
  hasPreviewImage?: boolean;
  previewImageShape?: PreviewImageShapeTypes;
}
