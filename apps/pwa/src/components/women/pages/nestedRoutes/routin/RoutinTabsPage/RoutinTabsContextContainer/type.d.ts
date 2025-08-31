import { TabsConfigResponseTypes } from '../__hooks__/useConfig/type';

type ItemType = Pick<TabsConfigResponseTypes, 'tabsOrder'>;

export interface RoutinTabsContextContainerPropsType extends ItemType {
  activeTab: number;
}
