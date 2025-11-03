import { AiChatbotMessageListPropsType, ChatType } from '../type';

export type ItemType = Pick<AiChatbotMessageListPropsType, 'defaultQustionHandler' | 'disableDeleteBtnHandler'>;
export interface AiMessagePropsType extends ChatType, ItemType {
  isLastItem: boolean;
}
