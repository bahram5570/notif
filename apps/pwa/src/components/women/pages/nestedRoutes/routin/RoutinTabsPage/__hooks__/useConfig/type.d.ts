export type TabsOrderType = {
  tabType: 'recommended';
  tabName: string;
};

export type TabsConfigResponseTypes = {
  title: string;
  tabsOrder: TabsOrderType[];
};
