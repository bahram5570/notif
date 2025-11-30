import { AiChatbotFooterPropsType } from '../type';

type InputItemType = Pick<
  AiChatbotFooterPropsType,
  'hintPromptText' | 'submitHandler' | 'isLoading' | 'isShowFileInput'
>;

export interface AiChatbotInputPropsType extends InputItemType {}
