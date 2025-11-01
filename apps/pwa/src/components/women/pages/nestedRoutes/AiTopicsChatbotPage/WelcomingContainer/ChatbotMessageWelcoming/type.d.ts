import { ChatbotWelcomingDataTypes } from '../type';

export type ChatbotMessageWelcomingPropsType = Pick<
  ChatbotWelcomingDataTypes,
  'description' | 'defaultQustionHandler' | 'title' | 'questions'
> & {
  top: number;
};
