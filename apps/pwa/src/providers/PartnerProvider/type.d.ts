import { ChallengeResponseType } from './__hooks__/useGetData/type';

export type PartnerContextTypes = {
  partnerData: ChallengeResponseType | undefined;
  isLoading: boolean;
};

export type PartnerProviderPropsTypes = {
  children: React.ReactNode;
  //   onComplete?: () => void;
};
