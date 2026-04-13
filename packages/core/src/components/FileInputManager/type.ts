import { FileDataHandlerTypes } from '../partner/CreateMemoryForm/__hooks__/useFileUpload/types';
import { FileInputTypes } from './enum';

export interface FileInputManagerPropsType {
  fileDataHandler: FileDataHandlerTypes;
  ShowFileInput: boolean;
  uploadImageLoading: boolean;
  ShowGalleryInput?: boolean;
  ShowCameraInput?: boolean;
}

export type FileInputHandlerTypes = (type: FileInputTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
