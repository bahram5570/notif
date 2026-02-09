import { PreviewImageShapeTypes } from '../../../providers/PreviewImageProvider/types';

export type CustomImageProps = {
  id?: string;
  alt?: string;
  imageApi?: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  width?: number | string;
  height?: number | string;
  hasPreviewImage?: boolean;
  style?: React.CSSProperties;
  objectFit?: 'cover' | 'contain';
  previewImageShape?: PreviewImageShapeTypes;
  src: string | null | { image: string; imageType: string };
};
