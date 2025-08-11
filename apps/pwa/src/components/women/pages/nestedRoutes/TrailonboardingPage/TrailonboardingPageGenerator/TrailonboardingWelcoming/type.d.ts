import { WelcomDataTypes } from '@providers/TrailonboardingProvider/__hooks__/useGetData/type';

type ItemType = Pick<WelcomDataTypes, 'data'>;

export interface TrailonboardingWelcomingPropsType extends ItemType {
  goToNext: () => void;
}
