import { ProgramRateStatusEnum, ProgramWidgetItemStatusEnum } from '../../../enum';

export type CtaType = {
  action: ActionTypes;
  ctaBtnLabel: string;
  ctaDescription: string;
};

export type RoutinItemResponseTypes = {
  id: string;
  data: string;
  icon: string;
  title: string;
  description: string;
  status: ProgramWidgetItemStatusEnum;
  rateStatus: ProgramRateStatusEnum;
  compeletButtonLabel: string;
  cta: CtaType;
};
