import { PartnerCodeResponseType } from './__hooks__/useRefreshCode/type';

export type RefreshPartnerCodePropsType = {
  partnerCode: string | undefined;
  isLoading: boolean;
  callBackHandler: (code: string, shareText: string) => void;
};
