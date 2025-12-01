import { AiChatbotInputPropsType } from '../type';

type ItemType = Pick<AiChatbotInputPropsType, 'hintPromptText' | 'isLoading'>;

export interface AiChatbotTextPropsType extends ItemType {
  clickHandler: (chatText: string) => void;
}
