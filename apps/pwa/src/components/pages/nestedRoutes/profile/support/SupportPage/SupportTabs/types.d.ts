import { SupportTabsEnum } from '../../__hooks__/useSupportTabs/Enum';

export interface SupportTabsTypes {
  tab: SupportTabsEnum;
  hadPendingTicket: boolean;
  supportTabHandler: (v: SupportTabsEnum) => void;
}
