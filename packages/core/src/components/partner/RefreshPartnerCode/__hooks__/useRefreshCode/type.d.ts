import { RefreshPartnerCodePropsType } from '../../type';

export type PartnerCodeResponseType = {
  shareText: string;
  code: string;
  userName: string;
  hasPartner: boolean;
};

export type UseRefreshCodePropsType = Pick<RefreshPartnerCodePropsType, 'callBackHandler'>;
