import { FileInputTypes } from '../../__hooks__/useFileUpload/enum';
import { FileDataHandlerTypes } from '../../__hooks__/useFileUpload/type';
import { AiChatbotUploadImagePropsType } from '../type';

export interface UploadImagesMoreActionPropsType {
  isOpen: boolean;
  closeHandler: () => void;
  fileDataHandler: FileDataHandlerTypes;
}

export type FileInputHandlerTypes = (type: FileInputTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
