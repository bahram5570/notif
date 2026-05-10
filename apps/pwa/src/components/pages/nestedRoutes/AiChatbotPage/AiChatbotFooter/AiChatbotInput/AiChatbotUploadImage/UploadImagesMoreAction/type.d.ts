import { FileDataHandlerTypes } from '../../__hooks__/useFileUpload/type';
import { AiChatbotUploadImagePropsType } from '../type';

export interface UploadImagesMoreActionPropsType {
  isOpen: boolean;
  closeHandler: () => void;
}

export type FileInputHandlerTypes = (e: React.ChangeEvent<HTMLInputElement>) => void;
