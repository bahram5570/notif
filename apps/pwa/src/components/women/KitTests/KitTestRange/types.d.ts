import { KitTestModuleTypeEnums } from '../enum';

export interface KitTestRangeProps {
  moduleType: KitTestModuleTypeEnums;
  subimtHandler: (result: number) => void;
  AnalytisId?: string;
}

export type RangeValueHandlerTypes = (v: number) => void;

export type KitTestScriptsTypes = {
  [key in KitTestModuleTypeEnums]: {
    resultLow: string;
    resultHigh: string;
    guideScript: string;
    resultAverage: string;
  };
};

export interface KitTestRangeResultProps {
  rangeValue: number;
  isValueSelected: boolean;
  moduleType: KitTestModuleTypeEnums;
}
