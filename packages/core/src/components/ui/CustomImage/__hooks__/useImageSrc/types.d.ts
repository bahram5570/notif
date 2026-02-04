import { CustomImageProps } from '../../types';

export interface UseImageSrcProps {
  onError: () => void;
  src: CustomImageProps['src'];
  imageApi: CustomImageProps['imageApi'];
}
