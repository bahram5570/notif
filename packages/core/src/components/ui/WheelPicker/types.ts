export type WheelPickerValueTypes = string | number;

export type WheelPickerItemTypes = { title: string; value: WheelPickerValueTypes };

export interface WheelPickerProps {
  valueHandler: (v: WheelPickerValueTypes) => void;
  defaultValue?: WheelPickerValueTypes;
  onInitialValuesSteps?: () => void;
  list: WheelPickerItemTypes[];
  testId?: string;
}

export interface WheelPickerDividerProps {
  isTop: boolean;
}
