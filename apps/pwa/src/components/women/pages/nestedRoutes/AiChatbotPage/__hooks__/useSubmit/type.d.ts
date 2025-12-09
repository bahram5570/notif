import { AiChatbotDataResponseType } from '../useGetAiChatbotData/type';
import { AddChatHandlerType, UpdateChatHandlerType } from '../useGetAiChatbotMessageList/type';

export type ItemType = Pick<
  AiChatbotDataResponseType,
  'activeRating' | 'isActive' | 'deactiveButton' | 'deactiveMessage' | 'title' | 'mediaLimitDate'
>;

export type SubmitHandlerType = ({ prompt, imageId }: { prompt: string; imageId?: string[] }) => void;
export interface NewMessageResponse extends ItemType {
  isInProccess: boolean;
  messageId: string;
}

export type UseSubmitPropsType = {
  updateChatHandler: UpdateChatHandlerType;
  addChatHandler: AddChatHandlerType;
  itemIdData: string | null;
  categoryIdData: string | null;
};
