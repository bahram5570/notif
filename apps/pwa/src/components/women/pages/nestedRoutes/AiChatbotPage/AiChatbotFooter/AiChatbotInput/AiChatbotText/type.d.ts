import { AiChatbotInputPropsType } from '../type';

type ItemType = Pick<AiChatbotInputPropsType, 'hintPromptText' | 'isLoading' | 'btnTopHandler'>;

export interface AiChatbotTextPropsType extends ItemType {
  clickHandler: (chatText: string) => void;
  checkMultiLine: (v: boolean) => void;
}
