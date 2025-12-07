import { AiChatbotFooterPropsType } from '../type';

type InputItemType = Pick<
  AiChatbotFooterPropsType,
  'hintPromptText' | 'submitHandler' | 'isLoading' | 'isShowFileInput' | 'activaMedia'
>;

export interface AiChatbotInputPropsType extends InputItemType {
  btnTopHandler?: () => void;
}
