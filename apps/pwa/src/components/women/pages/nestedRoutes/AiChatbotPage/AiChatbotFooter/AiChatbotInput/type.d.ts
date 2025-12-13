import { UploadItemType } from '@providers/__aiChatbot__/AiFileManagerProvider/type';

import { AiChatbotFooterPropsType } from '../type';
import { UploadItem } from './__hooks__/useFileUpload/type';

type InputItemType = Pick<
  AiChatbotFooterPropsType,
  'hintPromptText' | 'submitHandler' | 'isLoading' | 'isShowFileInput'
>;

export interface AiChatbotInputPropsType extends InputItemType {
  btnBottomHandler?: (v: number) => void;
  closeHandler?: () => void;
}
