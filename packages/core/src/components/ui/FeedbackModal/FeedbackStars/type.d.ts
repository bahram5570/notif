import { FeedbackModalPropsType } from '../type';

export type FeedbackStarsPropsType = Pick<FeedbackModalPropsType, 'isMan'> & {
  rate: number;
  rateHandler: (v: number) => void;
};
