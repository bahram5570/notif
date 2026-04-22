import { FeedbacksTypes } from '@repo/core/components/clinic';

import { FeedbackValuesHandlerTypes, FeedbackValuesTypes } from '../__hooks__/useValues/types';

export interface RatingFeedbackProps extends FeedbacksTypes {
  feedbackValuesHandler: FeedbackValuesHandlerTypes;
  feedbackValues: FeedbackValuesTypes;
  rate: number;
}
