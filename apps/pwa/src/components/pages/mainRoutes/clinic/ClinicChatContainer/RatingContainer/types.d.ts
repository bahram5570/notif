import { ChatResponseTypes, FeedbacksTypes } from '@repo/core/components/clinic';

export interface RatingContainerProps {
  isLoading: boolean;
  feedbacks?: FeedbacksTypes;
  drName?: Pick<ChatResponseTypes, 'drName'>['drName'];
  drImage?: Pick<ChatResponseTypes, 'drImage'>['drImage'];
}
