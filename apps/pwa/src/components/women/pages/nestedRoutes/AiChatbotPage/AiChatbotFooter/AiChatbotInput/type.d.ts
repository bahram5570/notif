import { AiChatbotFooterPropsType } from '../type';
import { UploadItem } from './__hooks__/useFileUpload/type';

type InputItemType = Pick<
  AiChatbotFooterPropsType,
  'hintPromptText' | 'submitHandler' | 'isLoading' | 'isShowFileInput'
>;

export interface AiChatbotInputPropsType extends InputItemType {
  btnTopHandler?: () => void;
  imageFile: string[];
  hasFile: boolean;
}
