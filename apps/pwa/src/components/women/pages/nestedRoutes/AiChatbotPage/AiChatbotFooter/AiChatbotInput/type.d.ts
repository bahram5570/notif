import { AiChatbotFooterPropsType } from '../type';

type InputItemType = Pick<
  AiChatbotFooterPropsType,
  'hintPromptText' | 'submitHandler' | 'isLoading' | 'defaultQustion'
>;

export interface AiChatbotInputPropsType extends InputItemType {}
