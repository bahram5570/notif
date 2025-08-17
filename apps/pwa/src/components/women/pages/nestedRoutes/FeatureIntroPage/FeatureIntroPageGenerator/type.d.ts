import { OnboardingPageType } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';

export type FeatureIntroPageGeneratorPropsType = {
  goToNext: () => void;
} & OnboardingPageType;
