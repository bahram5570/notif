import { InfoCalendarResponseTypes } from '../type';

export type CalendarGuideInfoTypes = Pick<InfoCalendarResponseTypes, 'haveBreastfeeding' | 'havePregnency'>;

export interface CalendarGuidesProps {
  calendarGuideInfo: CalendarGuideInfoTypes | null;
}

export type GuideListTypes = { backgroundColor: string; text: string; borderColor?: string }[];
