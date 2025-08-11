import { WelcomType } from '@components/women/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';

export type ItemType = Pick<WelcomType, 'finalButton' | 'list'>;

export interface OnboardingIntroPropsType extends ItemType {
  submitHandler: () => void;
}
