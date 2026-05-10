import { OnboardingIntroPropsType } from '../type';

type ItemType = Pick<OnboardingIntroPropsType, 'list'>['list'][0];
type ContextType = Pick<ItemType, 'description' | 'title'>;

export interface OnboardingContextPropsType extends ContextType {}
