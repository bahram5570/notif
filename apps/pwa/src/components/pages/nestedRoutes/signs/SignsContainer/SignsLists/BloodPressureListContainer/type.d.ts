import { BloodPressureType } from '@components/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';

export type BloodPressureListPropsType = {
  bloodPressureList: BloodPressureType[];
};

type BloodPressureState = {
  text: string;
  border: string;
  result: string;
  backgroundColor: string;
};

export type InitailBloodPressureContextType = {
  normal: BloodPressureState;
  danger: BloodPressureState;
};

export type CheckBloodPressureStatusType = (high: number, low: number) => keyof InitailBloodPressureContextType;
