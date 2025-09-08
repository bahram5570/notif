import { ProgramWidgetPageEnum } from './enum';

export type TabsOrderType = {
  tabType: ProgramWidgetPageEnum;
  tabName: string;
};

export type TabsConfigResponseTypes = {
  title: string;
  tabsOrder: TabsOrderType[];
};
