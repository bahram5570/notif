import { AiChatbotDataResponseType } from '../__hooks__/useGetAiChatbotData/type';

export type FooterItemType = Pick<
  AiChatbotDataResponseType,
  | 'activeRating'
  | 'deactiveMessage'
  | 'feedbackMessage'
  | 'hintPromptText'
  | 'isActive'
  | 'chatId'
  | 'title'
  | 'deactiveButton'
>;

export interface AiChatbotFooterPropsType extends FooterItemType {
  submitHandler: (text: string) => void;
  isLoading: boolean;
  isShowFileInput: boolean;
  hasChatData?: boolean;
}
