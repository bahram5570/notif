// import { FileUploadImageFileTypes } from '@hooks/useFileUpload/types';
// import { PreviewImageShapeTypes } from '@providers/PreviewImageProvider/types';
import { PreviewImageShapeTypes } from '../../../providers/PreviewImageProvider/types';

// type ImageApiTypes = '/file' | '/support/article/panel/image' | '/woman';

// export type FileUploadImageFileTypes = null | { image: string; imageType: string };

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
