import { BabyCheckTypeEnums, DayTypeEnums } from '../../providers/WidgetActionsProvider';
import { CalendarWidgetEnums } from './CalendarEnums';

export type BioType = { bodyPercent: number; emotionalPercent: number; cognitivePercent: number };

export type TextBioType = { emotional: string; mental: string; physical: string };

export type NoteType = {
  files: [];
  text: string;
  title: string;
  noteId: string;
  dateTime: string;
  reminder: boolean;
  reminderId: number;
};

export type CalendarCycleType = {
  type: CalendarWidgetEnums.Cycle;
  data: { dayTitle: string; dayType: DayTypeEnums };
};

export type CalendarOvulationKitType = {
  type: CalendarWidgetEnums.OvulationKit;
  data: null;
};

export type CalendarBiorhythmType = {
  type: CalendarWidgetEnums.Biorythem;
  data: { bio: BioType; texts: TextBioType };
};

export type CalendarNoteType = {
  data: { notes: NoteType[] };
  type: CalendarWidgetEnums.Note;
};

export type BloodSugerType = { condition: number; value: number };

export type BloodPressureType = { high: number; low: number };

export type CalendarSignsType = {
  type: CalendarWidgetEnums.Sign;
  data: {
    babyChecks: {
      result: number;
      createTime: string;
      type: BabyCheckTypeEnums;
    }[];
    ovulationResult: { createTime: string; result: number; count: number } | null;
    signs: { category: number; sign: number }[];
    bloodPressures: BloodPressureType[];
    bloodSugers: BloodSugerType[];
    currentWeight: number;
    weight: number;
  };
};

export type CalendarBirthdayType = {
  type: CalendarWidgetEnums.Birthday;
  data: null;
};

export type ItemsTypes = (
  | CalendarNoteType
  | CalendarCycleType
  | CalendarSignsType
  | CalendarBirthdayType
  | CalendarBiorhythmType
  | CalendarOvulationKitType
)[];

export type SingleDateTypes = {
  gregorianDate: string;
  jalaaliDate: string;
  items: ItemsTypes;
  isToday: boolean;
};

export type CalendarDataTypes = {
  [key in string]: SingleDateTypes[];
};

export interface CalendarDraggingPanelProps {
  calendarData: CalendarDataTypes;
  selectedDate: string;
}
