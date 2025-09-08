import { TabsConfigResponseTypes } from '../__hooks__/useConfig/type';

type ItemType = Pick<TabsConfigResponseTypes, 'tabsOrder'>;

export interface RoutinTabsBtnPropsType extends ItemType {
  activeTab: number;
  handleTabChange: (tabId: number) => void;
}
