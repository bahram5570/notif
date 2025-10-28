import { AiChatbotFooterPropsType } from '../type';

type InputItemType = Pick<AiChatbotFooterPropsType, 'hintPromptText'>;

export interface AiChatbotInputPropsType extends InputItemType {
  question?: string;
}
