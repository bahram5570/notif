import { AiChatbotDataResponseType } from '../useGetAiChatbotData/type';
import { AddChatHandlerType, UpdateChatHandlerType } from '../useGetAiChatbotMessageList/type';

export type ItemType = Pick<
  AiChatbotDataResponseType,
  'activeRating' | 'isActive' | 'deactiveButton' | 'deactiveMessage' | 'title'
>;
export interface NewMessageResponse extends ItemType {
  isInProccess: boolean;
  messageId: string;
}

export type UseSubmitPropsType = {
  updateChatHandler: UpdateChatHandlerType;
  addChatHandler: AddChatHandlerType;
};
