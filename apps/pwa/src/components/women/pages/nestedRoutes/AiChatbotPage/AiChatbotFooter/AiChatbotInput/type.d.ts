import { AiChatbotFooterPropsType } from '../type';
import { UploadItem } from './__hooks__/useFileUpload/type';

type InputItemType = Pick<
  AiChatbotFooterPropsType,
  'hintPromptText' | 'submitHandler' | 'isLoading' | 'isShowFileInput'
>;

export interface AiChatbotInputPropsType extends InputItemType {
  btnTopHandler?: () => void;
  retryUploadHandler: () => void;
  removeFileHandler: (url: string) => void;
  imageFile: string[];
  files: UploadItem[];
  hasFile: boolean;
  disableBtn: boolean;
  closeHandler: () => void;
}
