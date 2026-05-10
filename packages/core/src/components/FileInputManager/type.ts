import { FileDataHandlerTypes } from '../../hooks/useFileUpload/type';
import { FileInputTypes } from './enum';

export interface FileInputManagerTypes {
  fileDataHandler: FileDataHandlerTypes;
  uploadImageLoading: boolean;
  ShowGalleryInput?: boolean;
  ShowCameraInput?: boolean;
  ShowFileInput: boolean;
}

export type FileInputHandlerTypes = (type: FileInputTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
