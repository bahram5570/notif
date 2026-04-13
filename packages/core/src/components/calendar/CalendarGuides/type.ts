import { CalendarGuideInfoTypes } from '../type';

export interface CalendarGuidesProps {
  calendarGuideInfo: CalendarGuideInfoTypes | null;
}

export type GuideListTypes = { backgroundColor: string; text: string; borderColor?: string }[];
