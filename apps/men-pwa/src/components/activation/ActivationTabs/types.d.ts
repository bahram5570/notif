export type ActivationTabsListTypes = { text: string; value: number }[];

export interface ActivationTabsTypes {
  tab: number;
  testid?: string;
  tabHandler: (t: number) => void;
  tabsList: ActivationTabsListTypes;
}
