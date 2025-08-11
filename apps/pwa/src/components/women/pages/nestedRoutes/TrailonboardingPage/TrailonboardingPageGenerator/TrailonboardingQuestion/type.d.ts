import { QuestionDataType } from '@providers/TrailonboardingProvider/__hooks__/useGetData/type';

type ItemType = Pick<QuestionDataType, 'data'>;

export interface TrailonboardingQuestionPropsType extends ItemType {
  goToNext: () => void;
}
