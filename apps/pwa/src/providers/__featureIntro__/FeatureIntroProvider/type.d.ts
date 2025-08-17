import { FeatureIntroResponseType } from './__hooks__/useGetData/type';

export type FeatureIntroContextType = {
  data: FeatureIntroResponseType | undefined;
  isLoading: boolean;
  goToNext: () => void;
  currentStep: number;
  totalPages: number;
};
