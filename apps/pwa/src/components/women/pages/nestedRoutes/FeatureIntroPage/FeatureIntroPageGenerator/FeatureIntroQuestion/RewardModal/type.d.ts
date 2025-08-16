import { RewardModalType } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';

import { FeatureIntroQuestionPropsType } from '../type';

type ItemType = Pick<FeatureIntroQuestionPropsType, 'goToNext'>;

export interface RewardModalPropsType extends ItemType {
  data: RewardModalType | null;
  correctAnswer: boolean;
}
