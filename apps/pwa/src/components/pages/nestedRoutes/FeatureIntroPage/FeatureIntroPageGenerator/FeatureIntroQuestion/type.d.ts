import { QuestionDataType } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';

type ItemType = Pick<QuestionDataType, 'data'>;

export interface FeatureIntroQuestionPropsType extends ItemType {
  goToNext: () => void;
}
