import { OnboardingIntroPropsType } from '../type';

type ItemType = Pick<OnboardingIntroPropsType, 'list'>;

export interface OnboardingImageSliderPropsType extends ItemType {
  currentIndex: number;
}
