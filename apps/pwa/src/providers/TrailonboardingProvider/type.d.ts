import { TrailonboardingResponseType } from './__hooks__/useGetData/type';

export type TrailonboardingContextType = {
  data: TrailonboardingResponseType | undefined;
  isLoading: boolean;
  goToNext: () => void;
  currentIndex: number;
  IsLastItem: boolean;
  totalPages: number;
};
