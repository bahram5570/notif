import { OnboardingIntroPropsType } from '../type';

export type ItemType = Pick<OnboardingIntroPropsType, 'finalButton'>;

export interface OnboardingIntroFooterPropsType extends ItemType {
  lastIndex: boolean;
  currentIndex: number;
  clickHandler: (index: number) => void;
}
