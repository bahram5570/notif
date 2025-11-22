import { FileInputTypes } from '../../__hooks__/useFileUpload/enum';
import { AiChatbotUploadImagePropsType } from '../type';

type ItemType = Pick<AiChatbotUploadImagePropsType, 'fileUploadHandler'>;

export interface UploadImagesMoreActionPropsType extends ItemType {
  isOpen: boolean;
  closeHandler: () => void;
}

export type FileInputHandlerTypes = (type: FileInputTypes) => (e: React.ChangeEvent<HTMLInputElement>) => void;
