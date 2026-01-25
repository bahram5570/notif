import { WelcomDataTypes } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';

type ItemType = Pick<WelcomDataTypes, 'data'>;

export interface FeatureIntroWelcomingPropsType extends ItemType {
  goToNext: () => void;
}
