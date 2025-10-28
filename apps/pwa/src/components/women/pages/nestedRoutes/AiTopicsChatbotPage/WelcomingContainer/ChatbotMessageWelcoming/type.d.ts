import { ChatbotWelcomingDataTypes } from '../type';

export type ChatbotMessageWelcomingPropsType = Pick<
  ChatbotWelcomingDataTypes,
  'description' | 'hintPromptText' | 'title' | 'questions'
> & {
  top: number;
};
