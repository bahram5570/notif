import { AiChatbotDataResponseType } from '@providers/__aiChatbot__/AiChatHistoryManagerProvider/__hook__/useGetData/type';

type ItemType = Pick<AiChatbotDataResponseType, 'chats'>;

export interface AiChatbotMessageListPropsType extends ItemType {
  isLoading: boolean;
  defaultQustionHandler: (text: string) => void;
  disableDeleteBtnHandler: (v: boolean) => void;

  showErrorMessage: boolean;
}

export type ChatType = Pick<AiChatbotMessageListPropsType, 'chats'>['chats'][0];

export interface UserMessagePropsType extends ChatType {}
