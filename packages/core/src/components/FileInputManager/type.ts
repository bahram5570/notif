import { FileDataHandlerTypes } from '../../hooks/useFileUpload/type';
import { FileInputTypes } from './enum';

export interface FileInputManagerPropsType {
  fileDataHandler: FileDataHandlerTypes;
  ShowFileInput: boolean;
  uploadImageLoading: boolean;
  ShowGalleryInput?: boolean;
  ShowCameraInput?: boolean;
}

export type FileInputHandlerTypes = (type: FileInputTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
