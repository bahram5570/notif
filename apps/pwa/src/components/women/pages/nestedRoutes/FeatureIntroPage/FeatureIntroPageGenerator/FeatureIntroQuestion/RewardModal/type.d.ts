import { RewardModalType } from '@providers/FeatureIntroProvider/__hooks__/useGetData/type';

import { TrailonboardingQuestionPropsType } from '../type';

type ItemType = Pick<TrailonboardingQuestionPropsType, 'goToNext'>;

export interface RewardModalPropsType extends ItemType {
  data: RewardModalType | null;
  correctAnswer: boolean;
}
