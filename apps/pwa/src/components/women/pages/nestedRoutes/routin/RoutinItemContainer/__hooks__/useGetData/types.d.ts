import { ProgramWidgetItemStatusEnum } from '../../../enum';

export type RoutinItemResponseTypes = {
  id: string;
  data: string;
  icon: string;
  title: string;
  description: string;
  status: ProgramWidgetItemStatusEnum;
  compeletButtonLabel: string;
};
