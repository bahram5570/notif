import { AiChatbotDataResponseType } from '../__hooks__/useGetAiChatbotData/type';
import { SubmitHandlerType } from '../__hooks__/useSubmit/type';

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
  | 'activaMedia'
>;

export interface AiChatbotFooterPropsType extends FooterItemType {
  submitHandler: SubmitHandlerType;
  isLoading: boolean;
  isShowFileInput?: boolean;
  hasChatData?: boolean;
}
