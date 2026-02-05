import { CycleThemeEnum } from '@services/loginServices/enum';

import { ChildTypeEnum, PeriodStatusEnum, WomanStatusEnum } from '@constants/activation.constants';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

import { SexualStatusEnum } from './enum';

type ChangeStatusBtnsTypes = {
  text: string;
  action: ActionTypes;
  backgroundColor: string;
  foregroundColor: string;
};

type UpdateInteractionTypes = {
  type: number;
  data: string;
  delaySecond: number;
  isDismissible: boolean;
};

export type ProfileResponseTypes = {
  name: string;
  week: number;
  height: number;
  avatar: string;
  username: string;
  updated: boolean;
  birthDate: string;
  childName: string;
  isDelivery: number;
  cycleLength: number;
  remaindDays: number;
  periodLength: number;
  supportPhone: string;
  pregnancyDate: string;
  interfaceCode: string;
  interfaceText: string;
  childBirthDate: string;
  status: WomanStatusEnum;
  childType: ChildTypeEnum;
  interfaceShareText: string;
  cycleTheme: CycleThemeEnum;
  sexualStatus: SexualStatusEnum;
  calendarType: CalendarTypeEnum;
  periodStatus: PeriodStatusEnum;
  changeStatusBtns: ChangeStatusBtnsTypes[];
  updateInteraction: UpdateInteractionTypes;
};
