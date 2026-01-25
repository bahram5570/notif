import { AiMessagePropsType } from '../type';

export type AiMessageActionsPropsType = Pick<AiMessagePropsType, 'dislike' | 'like' | 'messageId' | 'text'>;
