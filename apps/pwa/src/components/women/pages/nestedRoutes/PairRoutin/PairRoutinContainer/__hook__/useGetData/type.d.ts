import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type RoutinItemsTypes = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  action: ActionTypes;
  status: ProgramWidgetItemStatusEnum;
};

export type RateType = {
  title: string;
  description: string;
  rate: number;
  status: ProgramRateStatusEnum;
};

export type WelcomItemType = {
  image: string;
  title: string;
  description: string;
};

export type FinalButtonType = {
  backgroundColor: string;
  foregroundColor: string;
  text: string;
  action: ActionTypes;
};

export type WelcomType = {
  isActive: boolean;
  list: WelcomItemType[];
  finalButton: FinalButtonType;
};

export type PairRoutinResponsive = {
  description: string;
  image: string;
  items: RoutinItemsTypes[];
  name: string;
  programId: string;
  rate: RateType;
  title: string;
  wc: WelcomingType;
  writerIcon: string;
  writerName: string;
  writerSpeciality: string;
};
