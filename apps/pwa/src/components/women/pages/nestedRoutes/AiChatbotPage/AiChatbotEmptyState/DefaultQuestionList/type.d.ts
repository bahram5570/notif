import { AiChatbotEmptyStatePropsType } from '../type';

type ItemType = Pick<AiChatbotEmptyStatePropsType, 'questions' | 'defaultQustionHandler'>;

export type DefaultQuestionListPropType = ItemType & {};
