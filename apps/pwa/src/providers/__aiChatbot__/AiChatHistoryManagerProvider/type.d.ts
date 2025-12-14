import { AiChatbotDataResponseType } from './__hook__/useGetData/type';

export type AiChatHistoryManagerContextType = {
  chatData: AiChatbotDataResponseType | undefined;
  isLoading: boolean;
  categoryIdData: string | null;
  itemIdData: string | null;
  addChatHandler: AddChatHandlerType;
  updateChatHandler: UpdateChatHandlerType;
  updateObject: (updates: any) => void;
};

export type UpdateChatHandlerType = (message: string, messageId: string) => void;
export type AddChatHandlerType = ({ chat, imageId }: { chat: string; imageId?: string[] }) => void;
