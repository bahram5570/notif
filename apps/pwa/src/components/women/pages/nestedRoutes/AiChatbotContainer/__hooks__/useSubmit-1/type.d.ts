import { AiChatbotInputPropsType } from '../../AiChatbotFooter/AiChatbotInput/type';
import { ChatType } from '../useGetHistoryChatData/type';

export type SuccessResponseType = {
  activeRating: boolean;
  isActive: boolean;
  title: string;
  deactiveMessage: string;
  deactiveButton: null | ActionTypes;
  isInProccess: boolean;
  messageId: string;
};

export interface UseSubmitPropsType extends ItemType {
  addChatHandler: (chat: ChatType) => void;
}
