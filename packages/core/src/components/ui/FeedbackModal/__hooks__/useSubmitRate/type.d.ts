import { FeedbackModalPropsType } from '../../type';

type ItemType = Pick<FeedbackModalPropsType, 'onSubmit'>;

export interface UseSubmitRateProps extends ItemType {
  rate: number;
  description: string;
}
