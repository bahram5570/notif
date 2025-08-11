import { OnboardingPageType } from '@providers/TrailonboardingProvider/__hooks__/useGetData/type';

export type TrailonboardingPageGeneratorPropsType = {
  goToNext: () => void;
} & OnboardingPageType;
