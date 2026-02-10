import { ActionTypeEnum, BabyCheckTypeEnums, PopupTypeEnum } from './widgetEnums';

export type NextStepTypes = {
  data: any;
  type: PopupTypeEnum;
  delaySecond: number;
  isDismissible: boolean;
};

export type ActionTypes = {
  api: string;
  internal: string;
  nextStep: NextStepTypes;
  actionType: ActionTypeEnum;
  actionTypes: ActionTypeEnum[];
};

export type WidgetsButtonTypes = {
  text: string;
  action: ActionTypes;
  backgroundColor: string;
  foregroundColor: string;
};

export type PopUpTypes = null | NextStepTypes;

export type KitTestsTypes = null | {
  babyChecks: {
    result: number;
    createTime: string;
    type: BabyCheckTypeEnums;
  }[];
  ovulationResult: null | { result: number; createTime: string; count: number };
};
