import { AiMessagePropsType } from '../AiChatbotMessageList/AiMessage/type';

export type ItemType = Pick<AiMessagePropsType, 'defaultQustionHandler'>;
export interface SuggestedQuestionsPropsType extends ItemType {
  messageId: string;
}
