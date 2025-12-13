import { ChatbotMessageWelcomingPropsType } from '../../../AiTopicsChatbotPage/WelcomingContainer/ChatbotMessageWelcoming/type';

type ItemType = Pick<ChatbotMessageWelcomingPropsType, 'questions' | 'defaultQustionHandler'>;

export type DefaultQuestionListPropType = ItemType & {};
