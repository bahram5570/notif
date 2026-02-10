import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

import { ProgramRateStatusEnum, ProgramWidgetCompleteEnum, ProgramWidgetItemStatusEnum } from '../../../enum';

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
  description?: string;
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

export type CtaType = {
  action: ActionTypes;
  ctaBtnLabel: string;
  ctaDescription: string;
};

export type RoutinResponseTypes = {
  name: string;
  title: string;
  image: string;
  writerIcon: string;
  writerName: string;
  description: string;
  writerSpeciality: string;
  programId: string;
  items: RoutinItemsTypes[];
  rate: RateType;
  wc: WelcomType;
  commentCount: number;
  commentPlaceholder: string;
  commentTabName: string;
  compeletItemType: ProgramWidgetCompleteEnum;
  cta: CtaType;
  isbookmarked: boolean;
  itemsTabName: string;
  rateAvg: number;
};
