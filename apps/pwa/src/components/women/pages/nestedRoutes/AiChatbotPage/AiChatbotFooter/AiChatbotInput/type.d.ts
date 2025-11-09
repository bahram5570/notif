import { AiChatbotFooterPropsType } from '../type';

type InputItemType = Pick<AiChatbotFooterPropsType, 'hintPromptText' | 'submitHandler' | 'isLoading'>;

export interface AiChatbotInputPropsType extends InputItemType {}
