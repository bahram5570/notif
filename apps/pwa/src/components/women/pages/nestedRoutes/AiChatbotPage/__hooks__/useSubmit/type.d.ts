import { AiChatbotDataResponseType } from '../useGetAiChatbotData/type';

export type ItemType = Pick<
  AiChatbotDataResponseType,
  'activeRating' | 'isActive' | 'deactiveButton' | 'deactiveMessage' | 'title'
>;
export interface NewMessageResponse extends ItemType {
  isInProccess: boolean;
  messageId: string;
}

export type UseSubmitPropsType = {
  updateChatHandler: (messages: string, messageId: string) => void;
  addChatHandler: (chat: ChatItemType) => void;
};
