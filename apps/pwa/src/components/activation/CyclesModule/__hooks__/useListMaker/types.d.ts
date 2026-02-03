import { WheelPickerItemTypes } from '@repo/core/components/ui/WheelPicker';

export type ListTypes = WheelPickerItemTypes[];

export type DataListStateTypes = null | { list: ListTypes; defaultValue: number };

type PeriodLengthTypes = {
  name: 'periodLength';
  totalCycleLength: number;
};
type TotalCycleLengthTypes = {
  name: 'totalCycleLength';
};

type NameTypes = PeriodLengthTypes | TotalCycleLengthTypes;

export type UseListMakerProps = NameTypes;

export type ListMakerTypes = (min: number, max: number) => ListTypes;
