import { BioType, SingleDateTypes, TextBioType } from '@repo/core/components/calendar';

export type SelectedDayBiorhythmProps = {
  selectedDateInfo: SingleDateTypes;
};

export type BiorhythmStatusType = {
  Icon: ReactDOM;
  text: string;
  type: keyof BioType;
  typeText: keyof TextBioType;
};
